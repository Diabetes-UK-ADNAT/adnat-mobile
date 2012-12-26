Ext.define("adnat.view.Question", {
    extend: 'Ext.Panel',
	xtype: 'question',
    requires: [
        'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.Number',
		'Ext.data.proxy.JsonP',
    ],
    config: {
		id: 'question', // works with refs to enable this.getQuestion()
		title: 'ADNAT',
		iconCls: 'compose',

		styleHtmlContent: true,
		scrollable: true,

		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'ADNAT'
			},
			{
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
				//centered: true,
				//width: '80%',
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
/*
//create the delayed task instance with our callback
var task = Ext.create('Ext.util.DelayedTask', function() {
	Ext.Viewport.setActiveItem(Ext.create('adnat.view.Results'));
});
task.delay(1500); //the callback function will now be called after 1500ms
*/
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
					//handler: function() {
						//Ext.Viewport.setActiveItem(Ext.create('adnat.view.Welcome'));
						//Ext.getCmp('mainTabPanel').setActiveItem(0);
						//utilAlert();
					//},
				},
				{xtype: 'spacer'},
				{
					xtype: 'button',
					text: 'Next',
					id: 'nextButton',
					ui: 'confirm',
					width: '100px',
					//handler: function() {
						//adnatAlert();
						//Ext.getCmp('mainTabPanel').setActiveItem(2);
						//Ext.Viewport.add(Ext.create('adnat.view.TabQ2'));
						//Ext.Viewport.setActiveItem(Ext.create('adnat.view.TabQ2'));
						//Ext.getCmp('mainTabPanel2').setActiveItem(1);
					//},
				},
				{xtype: 'spacer'},
			]},
		],
		html: [
		].join(""),
	}
});
