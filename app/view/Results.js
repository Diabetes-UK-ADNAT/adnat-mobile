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

		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'My Results'
			},
		],
		html: [
			"<div id=\"results\">",
			"<h1>My ADNAT Results</h1>",
			//"<div id=\"results\">Summary paragraph about the overall scoring</div>",
			"<div id=\"results\">",
				"<img src=\"../resources/images/tl-green.png\"/>",
				"<p>Your overall diet habits are good",
			"</div>",
			"<div id=\"results\">",
				"<img src=\"../resources/images/tl-red.png\"/>",
				"<p>Your Diabetes management level is Red",
			"</div>",
			"<div id=\"results\">",
				"<img src=\"../resources/images/tl-yellow.png\"/>",
				"<p>Your overall activity level is Yellow",
			"</div>",
			//"<p>Additional information about your results and what you can do",
			"</div>",
			//"<p>Stoplight results page",
			//"<img src=\"../resources/images/tl-all.png\"/>",
			//"<img src=\"../resources/images/tl-none.png\"/>",
		].join("")
	}
});
