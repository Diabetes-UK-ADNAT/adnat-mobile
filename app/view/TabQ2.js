Ext.define("adnat.view.TabQ2", {
    extend: 'Ext.tab.Panel',
	id:'mainTabPanel2',
    requires: [
        //'Ext.TitleBar', 'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
			{ xtype: 'welcome', },
			//{ xtype: 'survey', },
			{ xtype: 'question2', },
			{ xtype: 'results', },
			//{ xtype: 'help', },
			{ xtype: 'contact', },
			//{ xtype: 'xvideo', },
        ]
    }
});
