Ext.define("adnat.view.Contact", {
    extend: 'Ext.Panel',
	xtype: 'contact',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
		id: 'contact', 
		title: 'Contact',
		iconCls: 'reply',

		styleHtmlContent: true,
		scrollable: true,
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Help'
			},
		],
	   items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Contact ADNAT'
			},
			{
				xtype: 'fieldset',
				title: 'Contact ADNAT Support',
				instructions: 'Contact ADNAT Support',
				items: [
					{
						xtype: 'textfield',
						label: 'Name'
					},
					{
						xtype: 'emailfield',
						label: 'Email',

					},
					{
						xtype: 'textareafield',
						label: 'Message'
					}
				]
			},
			{
				xtype: 'button',
				text: 'Send',
				ui: 'confirm',
				handler: function() {
					//this.up('formpanel').submit();
				}
			}
		],
	}
});
