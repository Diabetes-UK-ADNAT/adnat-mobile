Ext.define('adnat.store.ScoreConfigs', {
    extend  : 'Ext.data.Store',
    requires: ['adnat.model.ScoreConfig'],
    config: {
		model: 'adnat.model.ScoreConfig',
		proxy:{
			type:'ajax',
			url:'resources/data/scoreconfigs.json',
            pageParam: false,
            sortParam: undefined,
            startParam: false,
            limitParam: false,
            noCache: false,
			reader : {
				type : 'json',
				rootProperty : 'scoreconfigs',
				totalCount : 'total'
			}
		},
		autoLoad:true,
		sorters: [
			{
				property : 'q',
				direction: 'ASC'
			}
		]
	},
	info : function() {
		log("ScoreConfigs Store info");
		log(this.getTotalCount());
		/*
		log(this.getAt(0));
		log(this.getCount());
		log(this.getData());
		var a = this.getData();
		for (var i=0; i<a.length; i++) {
			log(a[i]);
		}
		*/
	},
	findScoreConfigIndex : function(questionId) {
		return this.find('q', questionId, 0, false, false, true);
	},
	findScoreConfigRecord : function(questionId) {
		return this.findRecord('q', questionId, 0, false, false, true);
	}
	
});
