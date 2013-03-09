Ext.define("adnat.view.Welcome", {
    extend: 'Ext.form.Panel',
	xtype: 'welcome',
    requires: [
        'Ext.TitleBar',
		'Ext.field.Email',
		'Ext.field.Password'
    ],
    config: {
		title: 'Welcome',
		iconCls: 'home',

		styleHtmlContent: true,
		scrollable: true,

		items: [
			{
				html: [
					"<div class=\"centered\">",
					"<h1>Welcome to ADNAT</h1>",
					"<img src=\"./resources/images/adnatpic4.1.png\"/>",
					"<img src=\"./resources/images/adnatpic3.png\"/>",
					"<img src=\"./resources/images/adnatpic4.png\"/>",
					"</div>"
				].join("")
			},
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'ADNAT'
			},
			{
				xtype: 'fieldset',
				title: 'ADNAT Login',
				instructions: 'Login to take ADNAT',
				items: [
					{
						xtype: 'emailfield',
						name : 'email',
						label: 'Email'

					},
					{
						xtype: 'passwordfield',
						name : 'password',
						label: 'Password'
					}
				]
			},
			{
				xtype: 'button',
				text: 'Login',
				ui: 'action',
				handler: function() {
					//Ext.Viewport.setActiveItem(Ext.create('adnat.view.ServerUnavailable'));
					//Ext.Viewport.setActiveItem(Ext.create('adnat.view.Results'));
					//Question page: Ext.getCmp('mainTabPanel').setActiveItem(1);
					Ext.getCmp('mainTabPanel').setActiveItem(1);
				}
			}
		]
	}
});
