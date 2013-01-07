Ext.define("adnat.view.Util", {
    extend: 'Ext.Panel',
	xtype: 'util',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
		id: 'util', 
		title: 'Utility',
		iconCls: 'info',
		styleHtmlContent: true,
		scrollable: true,
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Utility'
			},
		],
	   items: [
			{
				xtype: 'button',
				text: 'Clear / Delete All Responses',
				ui: 'confirm',
				handler: function() {
					Ext.getStore('Responses').deleteAllRecords();
					location.reload();
				}
			}
		],
	}
});
