Ext.define('adnat.store.Questions', {
    extend  : 'Ext.data.Store',
    requires: ['adnat.model.Question'],
    config: {
		model: 'adnat.model.Question',
		proxy:{
			type:'ajax',
			url:'app/data/questions.json',
			reader:'json',
		},
		autoLoad:true,
		sorters: [
			{
				property : 'ordinal',
				direction: 'ASC',
			},
		],
	},
	test : function() {
		console.log("test function in store");
	}
});
