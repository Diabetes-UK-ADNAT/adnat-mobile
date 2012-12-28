Ext.define("adnat.view.Question", {
    extend: 'Ext.form.Panel',
	xtype: 'question',
    requires: [
        'Ext.TitleBar',
		'Ext.Label',
		'Ext.form.FieldSet',
		'Ext.field.Number',
		'Ext.field.Radio',
		'Ext.field.Hidden',
		'Ext.data.proxy.JsonP',
    ],
    config: {
		id: 'questionPanel', // works with refs to enable this.getQuestion()
		title: 'ADNAT',
		iconCls: 'compose',
		styleHtmlContent: true,
		scrollable: true,
		items: [
			{xtype: 'textfield', name: 'text'},
			{xtype: 'textfield', name: 'ordinal'},
			{xtype: 'textfield', name: 'options'},
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'ADNAT'
			},
			{
				id : 'questionText',
				name: 'questionText',
				padding: '1.2em',
				html: [
				"<div class=\"question\">",
                "How many times a week do you eat treats such ",
				"as sweets, chocolate, fast food, takeaways?",
				"</div>",
			].join("")
			},
			{
				id: 'test',
                xtype: 'fieldset',
                items: [
					{
						xtype: 'radiofield',
						name : 'color',
						value: 'red',
						label: 'Every day',
						labelWidth: '66%',	
						listeners: {
							check: function(button) {
								  Ext.get('tl').setHtml([
									"<div id=\"tl\" class=\"centered\">",
									"<img src=\"../resources/images/tl-red.png\"/>",
									"</div>",
								].join(""));
							}
						},
					},
					{
						xtype: 'radiofield',
						name : 'color',
						value: 'red',
						label: '5-6',
						labelWidth: '66%',	
						listeners: {
							check: function(button) {
								  Ext.get('tl').setHtml([
									"<div id=\"tl\" class=\"centered\">",
									"<img src=\"../resources/images/tl-red.png\"/>",
									"</div>",
								].join(""));
							}
						},
					},
					{
						xtype: 'radiofield',
						name : 'color',
						value: 'yellow',
						label: '3-4',
						labelWidth: '66%',	
						listeners: {
							check: function(button) {
								  Ext.get('tl').setHtml([
									"<div id=\"tl\" class=\"centered\">",
									"<img src=\"../resources/images/tl-yellow.png\"/>",
									"</div>",
								].join(""));
							}
						},
					},
					{
						xtype: 'radiofield',
						name : 'color',
						value: 'green',
						label: '1-2',
						labelWidth: '66%',	
						listeners: {
							check: function(button) {
								  Ext.get('tl').setHtml([
									"<div id=\"tl\" class=\"centered\">",
									"<img src=\"../resources/images/tl-green.png\"/>",
									"</div>",
								].join(""));
							}
						},
					},
					{
						xtype: 'radiofield',
						name : 'color',
						value: 'green',
						label: 'Less than once per week',
						labelWidth: '66%',	
						listeners: {
							check: function(button) {
								  Ext.get('tl').setHtml([
									"<div id=\"tl\" class=\"centered\">",
									"<img src=\"../resources/images/tl-green.png\"/>",
									"</div>",
								].join(""));
							}
						},
					},
			{
				html: [
					"<div>&nbsp;</div>",
					"<div id=\"tl\" class=\"centered\">",
					"<img src=\"../resources/images/tl-none.png\"/>",
					"</div>",
					"<div>&nbsp;</div>",
				].join("")
			},
				]
			},
			{			
				layout: 'hbox',
				align: 'center',
				pack: 'center',
				items: [
				{xtype: 'spacer'},
				{
					xtype: 'button',
					text: 'Prev',
					id: 'prevButton',
					ui: 'default',
					disabled: false,
					width: '100px',
				},
				{xtype: 'spacer'},
				{
					xtype: 'button',
					text: 'Next',
					id: 'nextButton',
					ui: 'confirm',
					width: '100px',
				},
				{xtype: 'spacer'},
			]},
		],
		html: [
		].join(""),
	}
});
