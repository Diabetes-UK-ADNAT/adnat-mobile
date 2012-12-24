Ext.define("adnat.view.Help", {
    extend: 'Ext.Panel',
	xtype: 'help',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
		title: 'Help',
		iconCls: 'info',

		styleHtmlContent: true,
		scrollable: true,
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'ADNAT Patient FAQ'
			},
			{
				xtype: 'nestedlist',
				title: 'ADNAT Patient FAQ',
				iconCls: 'star',
				displayField: 'title',

				store: {
					type: 'tree',

					fields: [
						'title', 'link', 'author', 'contentSnippet', 'content',
						{name: 'leaf', defaultValue: true}
					],

					root: {
						leaf: false
					},

					proxy: {
						type: 'jsonp',
						url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
						reader: {
							type: 'json',
							rootProperty: 'responseData.feed.entries'
						}
					}
				}
			}
		],
	}
});
