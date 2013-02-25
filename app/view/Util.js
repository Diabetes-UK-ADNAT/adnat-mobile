Ext.define("adnat.view.Util", {
    extend: 'Ext.Panel',
	xtype: 'util',
    requires: [
        'Ext.TitleBar'
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
			{
				xtype: 'button',
				margin: '40px',
				text: 'Delete All of My Responses',
				ui: 'decline',
				handler: function() {
					Ext.Msg.confirm(
						"Confirmation", "Are you sure you want to delete all of your answers? <br><i>This action can not be undone</i>", 
						function ( answer ) { 
							if ( answer === 'yes') { 
								Ext.getStore('Responses').deleteAllRecords();
								location.reload();
							}
						}
					);
				}
			},
			{
				xtype: 'button',
				margin: '40px',
				text: 'Logout',
				ui: 'normal',
				handler: function() {
					Ext.Msg.confirm(
						"Confirmation", "Would you like to logout of the ADNAT application?",
						function ( answer ) { 
							if ( answer === 'yes') { 
								Ext.getStore('Responses').deleteAllRecords();
								location.reload();
							}
						}
					);
				}
			}
		]
	}
});
