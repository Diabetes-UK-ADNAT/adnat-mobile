var AppSettings = {
    '_ASSESSMENT_LAST_SYNC': 0,
    '_ASSESSMENT_LAST_UPDATED': 1,
    'updateLastSynced': function() {
        // set last updated //fixme only set on success sync
        settings = Ext.getStore('Settings');
        lastSync = settings.findSettingRecordByName(this._ASSESSMENT_LAST_SYNC);
        lastSync.set('value', Date.now());
        settings.saveSetting(lastSync);
    },
    'updateLastUpdated': function() {
        settings = Ext.getStore('Settings');
        lastUpdated = settings.findSettingRecordByName(this._ASSESSMENT_LAST_UPDATED);
        lastUpdated.set('value', Date.now());
        settings.saveSetting(lastUpdated);
    },
    'getLastSynced': function() {
        settings = Ext.getStore('Settings');
        lastSync = settings.findSettingRecordByName(this._ASSESSMENT_LAST_SYNC);
        return lastSync.get('value');
    },
    'getLastUpdated': function() {
        settings = Ext.getStore('Settings');
        lastUpdated = settings.findSettingRecordByName(this._ASSESSMENT_LAST_UPDATED);
        return lastUpdated.get('value');
    }
};



