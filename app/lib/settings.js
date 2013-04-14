var AppConstants = {
    REGEX_URL: /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    REGEX_EMAIL: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    REGEX_NUMBER: /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/
};

var AppSettings = {
    '_ASSESSMENT_LAST_SYNC': 0,
    '_ASSESSMENT_LAST_UPDATED': 1,
    '_USER_TOKEN': 2,
    '_USER_PRINCIPAL': 3,
    'updateLastSynced': function() {
        // set last updated //fixme only set on success sync
        settings = Ext.getStore('Settings');
        settings.load();
        setting = settings.findSettingRecordByName(this._ASSESSMENT_LAST_SYNC);
        setting.set('value', new Date().getTime());
        settings.saveSetting(setting);
    },
    'updateLastUpdated': function() {
        settings = Ext.getStore('Settings');
        settings.load();
        setting = settings.findSettingRecordByName(this._ASSESSMENT_LAST_UPDATED);
        setting.set('value', new Date().getTime());
        settings.saveSetting(setting);
    },
    'clearLastUpdated': function() {
        settings = Ext.getStore('Settings');
        settings.load();
        setting = settings.findSettingRecordByName(this._ASSESSMENT_LAST_UPDATED);
        setting.set('value', null);
        settings.saveSetting(setting);
    },
    'setUserToken': function(val) {
        settings = Ext.getStore('Settings');
        settings.load();
        setting = settings.findSettingRecordByName(this._USER_TOKEN);
        setting.set('value', val);
        settings.saveSetting(setting);
    },
    'clearUserToken': function() {
        settings = Ext.getStore('Settings');
        settings.load();
        setting = settings.findSettingRecordByName(this._USER_TOKEN);
        setting.set('value', null);
        settings.saveSetting(setting);
    },
    'getUserToken': function() {
        settings = Ext.getStore('Settings');
        settings.load();
        setting = settings.findSettingRecordByName(this._USER_TOKEN);
        return setting.get('value');
    },
    'setPrincipal': function(val) {
        settings = Ext.getStore('Settings');
        settings.load();
        setting = settings.findSettingRecordByName(this._USER_PRINCIPAL);
        setting.set('value', val);
        settings.saveSetting(setting);
    },
    'clearPrincipal': function() {
        settings = Ext.getStore('Settings');
        settings.load();
        setting = settings.findSettingRecordByName(this._USER_PRINCIPAL);
        setting.set('value', null);
        settings.saveSetting(setting);
    },
    'getPrincipal': function() {
        settings = Ext.getStore('Settings');
        settings.load();
        setting = settings.findSettingRecordByName(this._USER_PRINCIPAL);
        return setting.get('value');
    },
    'getLastSynced': function() {
        settings = Ext.getStore('Settings');
        settings.load();
        setting = settings.findSettingRecordByName(this._ASSESSMENT_LAST_SYNC);
        return setting.get('value');
    },
    'getLastUpdated': function() {
        settings = Ext.getStore('Settings');
        settings.load();
        setting = settings.findSettingRecordByName(this._ASSESSMENT_LAST_UPDATED);
        return setting.get('value');
    }
};



