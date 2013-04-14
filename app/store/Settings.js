Ext.define('adnat.store.Settings', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.LocalStorage',
        'Ext.data.identifier.Uuid'
    ],
    config: {
        model: 'adnat.model.Setting',
        autoLoad: true
    },
    info: function() {
        log("Settings Store info");
        log(this.getAt(0));
        log(this.getCount());
        log(this.getTotalCount());
        log(this.getData());
        var a = this.getData();
        for (var i = 0; i < a.length; i++) {
            log(a[i]);
        }
    },
    saveSetting: function(s) {
        var find = this.findSettingIndexByName(s.get('name'));
        if (find !== -1) {
            this.removeAt(find);
            this.sync();
        }
        s.save();
        this.sync();
    },
    deleteAllRecords: function() {
        this.removeAll();
        this.sync();
    },
    findSettingIndexByName: function(name) {
        return this.find('name', name, 0, false, false, true);
    },
    findSettingRecordByName: function(settingName) {
        //findRecord: function(fieldName, value, startIndex, anyMatch, caseSensitive, exactMatch) {
        setting = this.findRecord('name', settingName, 0, true, true, true);
        if (setting === null) {
            setting = Ext.create('adnat.model.Setting', {name: settingName, value: null});
        }
        return setting;
    }
});
