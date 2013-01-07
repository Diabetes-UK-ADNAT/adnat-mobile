Ext.define("adnat.view.Results", {
    extend: 'Ext.Panel',
	xtype: 'results',
    requires: [
        'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.Number',
    ],
    config: {
		id: 'results', // works with refs to enable this.getSurvey()
		title: 'My Results',
		iconCls: 'star',

		styleHtmlContent: true,
		scrollable: true,
		listeners: {
			show: function () {
				adnat.app.getController('ResultsController').onShow(event);
			}, 
			hide: function () {
			} 
		}, 
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'My Results'
			},
			{
				html: [
					"<div id=\"results\">",
					"<h1 style='font-size:2em;'>My ADNAT Results</h1>",
					"</div>",
					"<div id=\"results\">",
						"<img src=\"../resources/images/tl-green.png\"/>",
					"</div>",
				].join(""),
			},
			{
				id: 'gScore',
				padding: '1.0em',
				html: null,
			},
			{
				html: [
					"<div id=\"results\">",
						"<img src=\"../resources/images/tl-red.png\"/>",
					"</div>",
				].join(""),
			},
			{
				id: 'pScore',
				padding: '1.0em',
				html: null,
			},
			{
				html: [
					"<div id=\"results\">",
				"Note, scores are actual calculated scores, but the lights still need to be set based on the scores",
					"</div>",
				].join(""),
			},
		],
	}
});
