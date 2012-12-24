Ext.define("adnat.view.Main", {
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
			{ xtype: 'question', },
			{ xtype: 'results', },
			//{ xtype: 'help', },
			{ xtype: 'contact', },
			{ xtype: 'listQuestionsView', },
			//{ xtype: 'xvideo', },
        ]
    }
});
