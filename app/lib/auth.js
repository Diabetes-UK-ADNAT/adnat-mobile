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
    'clearToken': function() {
        AppSettings.clearUserToken();
    }
};

