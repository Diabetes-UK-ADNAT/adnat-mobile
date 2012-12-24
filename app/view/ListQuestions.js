Ext.define('adnat.view.ListQuestions', {
    extend: 'Ext.Panel',
	xtype: 'listQuestionsView',
    requires: [
        'Ext.TitleBar',
		'Ext.DataView',
    ],
    config: {
		title: 'Questions',
		iconCls: 'reply',
		scrollable: true,
	    items: [
			{
				xtype: 'dataview', 
				title: 'Test',
				width: 300,
				store: {
					fields: ['name', 'age'],
					data: [
						{name: 'Jamie',  age: 100},
						{name: 'Rob',   age: 21},
						{name: 'Tommy', age: 24},
						{name: 'Jacky', age: 24},
						{name: 'Ed',   age: 26}
					]
				},
				itemTpl: '<div>{name} is {age} years old</div>'
			},
		],
	},
});


