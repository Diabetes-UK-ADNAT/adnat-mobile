Ext.define("adnat.view.Main", {
    extend: 'Ext.tab.Panel',
    id: 'mainTabPanel',
    requires: [
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {xtype: 'welcomeloggedin'},
            {xtype: 'question'},
            {xtype: 'results'},
            {xtype: 'contact'},
            {xtype: 'util'}
        ]
    }
});
