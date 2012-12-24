Ext.define("adnat.view.Question3", {
    extend: 'Ext.Panel',
	xtype: 'question3',
    requires: [
        'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.Number',
    ],
    config: {
		id: 'question3', // works with refs to enable this.getSurvey()
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
				id: 'test',
                xtype: 'fieldset',
                title: '3What color traffic light would you prefer to see?',
                items: [
					{
						xtype: 'radiofield',
						name : 'color',
						value: 'red',
						label: 'Red',
						//checked: true,
						listeners: {
							check: function(button) {
								//Ext.get('tl').setHtml('Hello');
								//Ext.get('tl').removeCls('centered');
								//Ext.get('tl').setCls('red');
								//Ext.get('tl').addCls('red');
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
						value: 'green',
						label: 'Green',
						listeners: {
							check: function(button) {
								//Ext.get('tl').setHtml('Hello');
								//Ext.get('tl').removeCls('centered');
								//Ext.get('tl').setCls('red');
								//Ext.get('tl').addCls('red');
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
						value: 'yellow',
						label: 'Yellow',
						listeners: {
							check: function(button) {
								//Ext.get('tl').setHtml('Hello');
								//Ext.get('tl').removeCls('centered');
								//Ext.get('tl').setCls('red');
								//Ext.get('tl').addCls('red');
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
				]
			},
			{
				html: [
					"<div id=\"tl\" class=\"centered\">",
					"<img src=\"../resources/images/tl-none.png\"/>",
					"</div>",
				].join("")
			},
			{
				xtype: 'button',
				text: 'Prev',
				ui: 'default',
				handler: function() {
					//Ext.Viewport.setActiveItem(Ext.create('adnat.view.Welcome'));
					Ext.getCmp('mainTabPanel').setActiveItem(0);
				},
			},
			{
				xtype: 'button',
				text: 'Next',
				ui: 'confirm',
				handler: function() {
					//Ext.Viewport.setActiveItem(Ext.create('adnat.view.Results'));
					Ext.getCmp('mainTabPanel').setActiveItem(2);
				},
			},
		],
		html: [
			//"<h1>ADNAT Forms</h1>",
			//" <a href=\"http://emlair:8080/#page/1\">Page 1</a>",
			//" <a href=\"http://emlair:8080/#page/2\">Page 2</a>",
			//" <a href=\"http://emlair:8080/#page/3\">Page 3</a>",
			//"<p/>",
			//"<p><a href=\"poc/#question\">Question</a>",
			//"<p><a href=\"poc/#teststore\">Store</a>",
		].join(""),
	}
});
