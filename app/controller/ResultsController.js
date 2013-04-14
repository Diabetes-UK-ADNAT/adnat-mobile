Ext.define('adnat.controller.ResultsController', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
        },
        refs: {
            gscore: '#gScore',
            pscore: '#pScore'
        },
        control: {
        }
    },
    requires: [
        'adnat.model.AssessmentResponse',
        'Ext.util.DelayedTask'
    ],
    hideComponents: function() {
        Ext.getCmp('noScore').hide();
        Ext.getCmp('gScore').hide();
        Ext.getCmp('pScore').hide();
        Ext.getCmp('gScoreRed').hide();
        Ext.getCmp('gScoreYellow').hide();
        Ext.getCmp('gScoreGreen').hide();
        Ext.getCmp('pScoreRed').hide();
        Ext.getCmp('pScoreYellow').hide();
        Ext.getCmp('pScoreGreen').hide();
        Ext.getCmp('submittedDate').hide();
    },
    onShow: function() {
        this.hideComponents();
        if (isReadyToScore()) {
            this.displayScore();
        } else {
            Ext.getCmp('noScore').show();
        }
    },
    displayScore: function() {
        Ext.Viewport.mask({xtype: 'loadmask', indicator: false, message: 'Scoring...'});
        var pscore = this.getPscore();
        var gscore = this.getGscore();

        score(function() {
            var gs = getGeneralScore();
            var ps = getPsychScore();
            postAssessment(ps, gs);
            gscore.setHtml('General Score: ' + gs);
            pscore.setHtml('Self Perception Score: ' + ps);
            gscore.show();
            pscore.show();
            var psc = getPsychScoreColor();
            var gsc = getGeneralScoreColor();
            Ext.getCmp('gScore' + gsc).show();
            Ext.getCmp('pScore' + psc).show();

            var lastSyncedMessage = null;
            var ls = AppSettings.getLastSynced();
            if (ls === null) {
                lastSyncedMessage = 'Survey has not been submitted.';
            } else {
                lsDate = new Date();
                lsDate.setTime(ls);
                lastSyncedMessage = 'Survey submitted on <br>' + lsDate.toISOString();
            }

            Ext.getCmp('submittedDate').setHtml(lastSyncedMessage);
            Ext.getCmp('submittedDate').show();
            Ext.Viewport.unmask();
        });
    }
});
