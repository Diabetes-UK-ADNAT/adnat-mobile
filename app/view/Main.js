Ext.define("adnat.view.Main", {
    extend: 'Ext.tab.Panel',
	id:'mainTabPanel',
    requires: [
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
			{ xtype: 'welcome' },
			{ xtype: 'question' },
			{ xtype: 'results' },
			{ xtype: 'contact' },
			{ xtype: 'util' }
        ]
    }
});
