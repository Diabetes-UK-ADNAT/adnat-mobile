Ext.define("adnat.view.Question", {
    extend: 'Ext.form.Panel',
	xtype: 'question',
    requires: [
        'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.Number',
		'Ext.data.proxy.JsonP',
		'Ext.field.Radio',
		'Ext.Label',
    ],
    config: {
		id: 'questionPanel', // works with refs to enable this.getQuestion()
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
				id: 'title',
				html: "this is the question text here",
			},
			{
				xtype: 'fieldset',
				id: 'questionComponent',
				items: [
					{xtype: 'textfield', name: 'text'},
					{xtype: 'textfield', name: 'ordinal'},
					{xtype: 'textfield', name: 'options'},
				],
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
				],
			},
		],
		html: [
		].join(""),
	}
});
