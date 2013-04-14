var AppAuth = {
    'isLoggedIn': function() {
        return this.getToken() !== null;
    },
    'getToken': function() {
        return AppSettings.getUserToken();
    },
    'setToken': function(val) {
        AppSettings.setUserToken(val);
    },
    'clear': function() {
        AppSettings.clearUserToken();
        AppSettings.clearUserName();
    },
    'getPrincipal': function() {
        return AppSettings.getPrincipal();
    },
    'setPrincipal': function(val) {
        return AppSettings.setPrincipal(val);
    }
};

