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
		score();
		log("is scored " + isScored());
		// fixme, instead of delay, fire event with scores when scoring is complete
		var pscore = this.getPscore();
		var gscore = this.getGscore();
		Ext.Viewport.mask({ xtype: 'loadmask', message: 'Scoring...' });
		var task = Ext.create('Ext.util.DelayedTask', function () {
			gscore.setHtml('General Score: ' + getGeneralScore());
			pscore.setHtml('Self Perception Score: ' + getPsychScore());
			Ext.Viewport.unmask();
        });
		task.delay(1700);
	},
});
