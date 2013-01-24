Ext.define("adnat.view.ServerUnavailable", {
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
					"<h1>The Server is Unavailable</h1>",
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
				xtype: 'spacer',
				height: '20px'
			},
			{
				xtype: 'button',
				text: 'Return to Welcome Page',
				ui: 'action',
				handler: function() {
					location.reload();
				}
			}
		]
	}
});
