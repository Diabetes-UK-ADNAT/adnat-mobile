function postAssessment(ps, gs) {
    /// send assessment to the server
    log(new Date().getTime()); //3ms
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
    assessment.score.psycn = getPsychScore();
    assessment.score.general = getGeneralScore();
    log(Ext.encode(assessment));
    log(new Date().getTime());
    // post it
    Ext.Ajax.request({
        url: 'https://api.myadnat.co.uk:4443/v1/contactrequests.json', //FIXME url
        params: {json: Ext.encode(assessment)},
        success: function(response, opts) {
            log('ok');
        },
        failure: function() {
            log('fail');
        }
    });
}