Ext.define('adnat.store.Questions', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.LocalStorage'
    ],
    config: {
        model: 'adnat.model.Question',
        identifier: 'uuid',
        autoLoad: true,
        sorters: [
            {
                property: 'ordinal',
                direction: 'ASC'
            }
        ]
    },
    deleteAllRecords: function() {
        this.removeAll();
        // leaves ids in place for some reason  this.sync();
    },
    info: function() {
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
