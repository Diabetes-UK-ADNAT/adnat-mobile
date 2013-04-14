Ext.define('adnat.controller.WelcomeLoggedInController', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
        },
        refs: {
            gscore: '#userName'
        },
        control: {
        }
    },
    onShow: function() {
        Ext.getCmp('userName').setHtml("<h1>Welcome</h1><h2>" + AppAuth.getPrincipal() + "</h2>");
    }
});
