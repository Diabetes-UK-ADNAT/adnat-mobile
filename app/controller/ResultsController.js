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
        score();
        log("is scored " + isScored());
        // fixme, instead of delay, fire event with scores when scoring is complete
        var pscore = this.getPscore();
        var gscore = this.getGscore();
        var task = Ext.create('Ext.util.DelayedTask', function() {
            var gs = getGeneralScore();
            var ps = getPsychScore();
            var psc = getPsychScoreColor();
            var gsc = getGeneralScoreColor();
            postAssessment(ps, gs); // anytime after scoring
            gscore.setHtml('General Score: ' + gs);
            pscore.setHtml('Self Perception Score: ' + ps);
            gscore.show();
            pscore.show();
            Ext.getCmp('gScore' + gsc).show();
            Ext.getCmp('pScore' + psc).show();
            Ext.Viewport.unmask();
        });
        task.delay(1900);
    }
});
