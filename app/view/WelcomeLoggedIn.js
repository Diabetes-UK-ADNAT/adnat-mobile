Ext.define("adnat.view.WelcomeLoggedIn", {
    extend: 'Ext.Panel',
	xtype: 'unavailable',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
		title: 'Server Unavailable',
		iconCls: 'home',

		styleHtmlContent: true,
		scrollable: true,

		items: [
			{
				html: [
					"<div class=\"centered\">",
					"<h1>Welcome</h1>",
					"<p>",
                    "Logged in directions here",
					"</p>",
					"</div>"
				].join("")
			},
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'ADNAT'
			},
			{
				xtype: 'spacer',
				height: '20px'
			}
		]
	}
});
