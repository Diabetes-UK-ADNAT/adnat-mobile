Ext.define("adnat.view.Main", {
    extend: 'Ext.tab.Panel',
    id: 'mainTabPanel',
    requires: [
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {xtype: 'welcome'},
            {xtype: 'question', disabled: true},
            {xtype: 'results', disabled: true},
            {xtype: 'contact'},
            {xtype: 'util'}
        ]
    }
});
