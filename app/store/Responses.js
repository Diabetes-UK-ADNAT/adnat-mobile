Ext.define('adnat.store.Responses', {
    extend  : 'Ext.data.Store',
    requires: ['adnat.model.Response'],
    config: {
		model: 'adnat.model.Response',
		autoLoad:true,
	},
	info : function() {
		console.log("Response Store info");
		console.log(this.getAt(0));
		console.log(this.getCount());
		console.log(this.getTotalCount());
		console.log(this.getData());
		var a = this.getData();
		for (var i=0; i<a.length; i++) {
			console.log(a[i]);
		}
	},
	saveResponse : function (r) {
		//var s = Ext.getStore('Responses');
		var find = this.find('q', r.get('q'));
		if (find != -1) {
			this.removeAt(find);
			this.sync();
		}
		r.save();
		this.sync();
	},
	deleteAllRecords : function() {
		this.removeAll();
		this.sync();
	},
});
