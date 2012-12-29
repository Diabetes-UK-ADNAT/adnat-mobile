Ext.define('adnat.store.Questions', {
    extend  : 'Ext.data.Store',
    requires: ['adnat.model.Question'],
    config: {
		model: 'adnat.model.Question',
		proxy:{
			type:'ajax',
			url:'app/data/questions.json',
			reader : {
				type : 'json',
				rootProperty : 'questions',
				totalCount : 'total',
			},
		},
		autoLoad:true,
		sorters: [
			{
				property : 'ordinal',
				direction: 'ASC',
			},
		],
	},
	info : function() {
		console.log("Question Store info");
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
	}
});
