Ext.define("adnat.view.TabQ3", {
    extend: 'Ext.tab.Panel',
	id:'mainTabPanel',
    requires: [
        //'Ext.TitleBar', 'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
			{ xtype: 'welcome', },
			//{ xtype: 'survey', },
			{ xtype: 'question3', },
			{ xtype: 'results', },
			//{ xtype: 'help', },
			{ xtype: 'contact', },
			//{ xtype: 'xvideo', },
        ]
    }
});
