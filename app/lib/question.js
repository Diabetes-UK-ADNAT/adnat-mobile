function setTitle(component,q) {
	var t = new Ext.Template([
		'<div class="question">{t}</div>',
	]);
	t.compile();
	html = t.apply( {t: q.get('text') } );
	component.getTitle().setHtml(html);
}

function getStopLight(name) {
	var t = new Ext.Template([
	"{ html: '",
	'<div>&nbsp;</div>',
	'<div id={n} class="centered">',
		'<img src="../resources/images/tl-none.png"/>',
	'</div>',
	'<div>&nbsp;</div>',
    "'}, ",
	]);
	t.compile();
	return t.apply( {n: name } );
}
function getStopLightOption(name,text,color) {
	var t = new Ext.Template([
	'{ ' ,
		'xtype: "radiofield", ' ,
		'name : "color", ' ,
		'label: "{txt}", ' ,
		'labelWidth: "66%",	 ' ,
		'listeners: { ',
			'check: function(button) { ',
				'Ext.get("{n}").setHtml("' ,
					"<div id='{n}' class='centered'>",
						"<img src='../resources/images/tl-{c}.png'/>",
					"</div>" ,
				'"); ',
			'}',
	    '}, ' ,
	'}, ' ,
	]);
	t.compile();
	return t.apply( {txt: text, n: name, c:color } );
}	

function buildQuestion(q) {
		var name = Date.now();
		var options = q.get('options');
		var response = '{ success: true, data: [ ' +
			'{xtype: "hiddenfield", name: "ordinal",}, ' +
			'{ xtype: "fieldset", items: [ ';

			//for each option (fixme: could do w/ template also)
			options.forEach(function(entry) {
				response = response + getStopLightOption(name,entry['text'],entry['color']);
			});
			//
			response = response + 
				'], }, ' + //items
				getStopLight(name) + 
				'] }' ; //outer json array
		return response;
}	
