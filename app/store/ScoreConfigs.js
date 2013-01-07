Ext.define('adnat.store.ScoreConfigs', {
    extend  : 'Ext.data.Store',
    requires: ['adnat.model.ScoreConfig'],
    config: {
		model: 'adnat.model.ScoreConfig',
		proxy:{
			type:'ajax',
			url:'resources/data/scoreconfigs.json',
			reader : {
				type : 'json',
				rootProperty : 'scoreconfigs',
				totalCount : 'total',
			},
		},
		autoLoad:true,
		sorters: [
			{
				property : 'q',
				direction: 'ASC',
			},
		],
	},
	info : function() {
		console.log("ScoreConfigs Store info");
		console.log(this.getTotalCount());
		/*
		console.log(this.getAt(0));
		console.log(this.getCount());
		console.log(this.getData());
		var a = this.getData();
		for (var i=0; i<a.length; i++) {
			console.log(a[i]);
		}
		*/
	},
	findScoreConfigIndex : function(questionId) {
		return this.find('q', questionId, 0, false, false, true);
	},
	findScoreConfigRecord : function(questionId) {
		return this.findRecord('q', questionId, 0, false, false, true);
	},
	
});
