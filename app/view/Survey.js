Ext.define("adnat.view.Survey", {
    extend: 'Ext.Panel',
	xtype: 'survey',
    requires: [
        'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.Number',
		'Ext.field.Radio',
    ],
    config: {
		id: 'survey', // works with refs to enable this.getSurvey()
		title: 'Survey',
		iconCls: 'compose',

		styleHtmlContent: true,
		scrollable: true,

		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Survey'
			},
			{
				id: 'test',
                xtype: 'fieldset',
                title: 'Page One',
                items: [
                    {
						xtype: 'numberfield',
						name: 'age',
						label: 'Age',
						minValue: 1,
						maxValue: 99,
                    },
					{
						xtype: 'radiofield',
						name : 'color',
						value: 'red',
						label: 'Red',
						checked: true
					},
					{
						xtype: 'radiofield',
						name : 'color',
						value: 'green',
						label: 'Green'
					},
					{
						xtype: 'radiofield',
						name : 'color',
						value: 'blue',
						label: 'Blue'
					},
				]
			},
		],
		html: [
			//"<h1>ADNAT Forms</h1>",
			" <a href=\"http://emlair:8080/#page/1\">Page 1</a>",
			" <a href=\"http://emlair:8080/#page/2\">Page 2</a>",
			" <a href=\"http://emlair:8080/#page/3\">Page 3</a>",
			//"<p/>",
			//"<p><a href=\"poc/#question\">Question</a>",
			//"<p><a href=\"poc/#teststore\">Store</a>",
		].join("")
	}
});
