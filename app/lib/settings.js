var AppSettings = {
    '_ASSESSMENT_LAST_SYNC': 0,
    '_ASSESSMENT_LAST_UPDATED': 1,
    'updateLastSynced': function() {
        // set last updated //fixme only set on success sync
        settings = Ext.getStore('Settings');
        settings.load();
        lastSync = settings.findSettingRecordByName(this._ASSESSMENT_LAST_SYNC);
        lastSync.set('value', new Date().getTime());
        settings.saveSetting(lastSync);
    },
    'updateLastUpdated': function() {
        settings = Ext.getStore('Settings');
        settings.load();
        lastUpdated = settings.findSettingRecordByName(this._ASSESSMENT_LAST_UPDATED);
        lastUpdated.set('value', new Date().getTime());
        settings.saveSetting(lastUpdated);
    },
    'clearLastUpdated': function() {
        settings = Ext.getStore('Settings');
        settings.load();
        lastUpdated = settings.findSettingRecordByName(this._ASSESSMENT_LAST_UPDATED);
        lastUpdated.set('value', null);
        settings.saveSetting(lastUpdated);
    },
    'getLastSynced': function() {
        settings = Ext.getStore('Settings');
        settings.load();
        lastSync = settings.findSettingRecordByName(this._ASSESSMENT_LAST_SYNC);
        return lastSync.get('value');
    },
    'getLastUpdated': function() {
        settings = Ext.getStore('Settings');
        settings.load();
        lastUpdated = settings.findSettingRecordByName(this._ASSESSMENT_LAST_UPDATED);
        return lastUpdated.get('value');
    }
};



