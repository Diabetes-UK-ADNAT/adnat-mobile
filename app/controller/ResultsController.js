Ext.define('adnat.controller.ResultsController', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
		},
        refs: {
			gscore: '#gScore',
			pscore: '#pScore',
        },
        control: {
        },
    },
    onShow: function(){
		Ext.getCmp('gScore').hide();
		Ext.getCmp('pScore').hide();
		Ext.getCmp('gScoreRed').hide();
		Ext.getCmp('gScoreYellow').hide();
		Ext.getCmp('gScoreGreen').hide();
		Ext.getCmp('pScoreRed').hide();
		Ext.getCmp('pScoreYellow').hide();
		Ext.getCmp('pScoreGreen').hide();
		score();
		log("is scored " + isScored());
		// fixme, instead of delay, fire event with scores when scoring is complete
		var pscore = this.getPscore();
		var gscore = this.getGscore();
		Ext.Viewport.mask({ xtype: 'loadmask', message: 'Scoring...' });
		var task = Ext.create('Ext.util.DelayedTask', function () {
			var gs = getGeneralScore();
			var ps = getPsychScore();
			gscore.setHtml('General Score: ' + gs);
			pscore.setHtml('Self Perception Score: ' + ps);
			gscore.show();
			pscore.show();
			if (gs > 25) {
				Ext.getCmp('gScoreRed').show();
			} else if (gs > 12) {
				Ext.getCmp('gScoreYellow').show();
			} else {
				Ext.getCmp('gScoreGreen').show();
			}
			if (ps > 10) {
				Ext.getCmp('pScoreRed').show();
			} else if (ps > 4) {
				Ext.getCmp('pScoreYellow').show();
			} else {
				Ext.getCmp('pScoreGreen').show();
			}
			Ext.Viewport.unmask();
        });
		task.delay(1700);
	},
});