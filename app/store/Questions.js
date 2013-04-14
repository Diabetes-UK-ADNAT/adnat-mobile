Ext.define('adnat.store.Questions', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.LocalStorage'
    ],
    config: {
        model: 'adnat.model.Question',
        identifier: 'uuid',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'resources/data/questions.json',
            pageParam: false,
            sortParam: undefined,
            startParam: false,
            limitParam: false,
            noCache: false,
            reader: {
                type: 'json',
                rootProperty: 'questions',
                totalCount: 'total'
            }
        },
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
        log("Question Store info");
        log(this.getTotalCount());
    }
});
