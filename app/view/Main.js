Ext.define("adnat.view.Main", {
    extend: 'Ext.tab.Panel',
    id: 'mainTabPanel',
    requires: [
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {xtype: 'welcome'},
            {xtype: 'question', disabled: !AppAuth.isLoggedIn()},
            {xtype: 'results', disabled: !AppAuth.isLoggedIn()},
            {xtype: 'contact'},
            {xtype: 'util'}
        ]
    }
});
