function postAssessment(ps, gs, force) {
    if (force || needsUpdate()) {
        log(new Date().getTime()); //3ms
        var assessment = prep();
        log(new Date().getTime());
        post(assessment);
        log(new Date().getTime());
    }
}

function needsUpdate() {
    settings = Ext.getStore('Settings');
    lastSync = settings.findSettingRecordByName(settings.getSettingNames().ASSESSMENT_LAST_SYNC);
    lastUpdated = settings.findSettingRecordByName(settings.getSettingNames().ASSESSMENT_LAST_UPDATED);
    lastUpdatedTs = lastUpdated.get('value');
    lastSyncedTs = lastSync.get('value');
    return (lastUpdatedTs === null || lastSyncedTs === null)
            ||
            (lastUpdatedTs > lastSyncedTs);
}
function prep() {
    responses = Ext.getStore('Responses');
    var assessmentResponses = [];
    responses.each(function(record) {
        var ar = Ext.create('adnat.model.AssessmentResponse', record.data);
        // remove id and any empty properties
        delete ar.data.id;
        for (i in ar.data) {
            if (ar.data[i] === null || ar.data[i] === '' || ar.data[i] === undefined) {
                delete ar.data[i];
            }
        }
        assessmentResponses.push(ar.data);
    });
    var assessment = new Object();
    assessment.responses = assessmentResponses;
    assessment.score = new Object();
    assessment.score.psych = getPsychScore();
    assessment.score.general = getGeneralScore();
    log(Ext.encode(assessment));
    return assessment;
}

function post(assessment) {
    // post it with json
    Ext.define("assessment", {extend: "Ext.data.Model",
        config: {
            fields: ['responses', 'score'],
            proxy: {
                type: 'rest',
                url: 'https://api.myadnat.co.uk:4443/v1/assessments.json'
            }
        }
    });
    Ext.ModelMgr.create(assessment, 'assessment').save();
    // set last updated //fixme only set on success sync
    settings = Ext.getStore('Settings');
    lastSync = settings.findSettingRecordByName(settings.getSettingNames().ASSESSMENT_LAST_SYNC);
    lastSync.set('value', new Date());
    lastSync.save();
    settings.sync();
}