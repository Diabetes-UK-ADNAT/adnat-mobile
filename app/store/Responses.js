Ext.define('adnat.store.Responses', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.LocalStorage',
        'Ext.data.identifier.Uuid'
    ],
    config: {
        model: 'adnat.model.Response',
        autoLoad: true
    },
    info: function() {
        log("Response Store info");
        log(this.getAt(0));
        log(this.getCount());
        log(this.getTotalCount());
        log(this.getData());
        var a = this.getData();
        for (var i = 0; i < a.length; i++) {
            log(a[i]);
        }
    },
    saveResponse: function(r) {
        var find = this.findResponseIndex(r.get('q'));
        if (find !== -1) {
            this.removeAt(find);
            this.sync();
        }
        r.save();
        this.sync();
        AppSettings.updateLastUpdated(); // timestamp
    },
    deleteAllRecords: function() {
        this.removeAll();
        this.sync();
    },
    findResponseIndex: function(questionId) {
        return this.find('q', questionId, 0, false, false, true);
    },
    findResponseRecord: function(questionId) {
        return this.findRecord('q', questionId, 0, false, false, true);
    }
});
