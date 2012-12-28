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
function getStopLightOptionStart(name,text,color) {
	return '{ xtype: "fieldset", items: [ ' ;
}	
function getStopLightOptionEnd(name,text,color) {
	return '], }, ' ;
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
		// build a stoplight question
		var name = Date.now();
		var text = 'my option text';
		var color = 'red';
		var response = '{ success: true, data: [ ' +
			'{xtype: "hiddenfield", name: "ordinal",}, ' +
			getStopLightOptionStart(name,text,color) +
			//for each option (fixme: could do w/ template also)
			getStopLightOption(name,'red1','red') +
			getStopLightOption(name,'yellow1','yellow') +
			getStopLightOption(name,'green1','green') +
			//
			getStopLightOptionEnd(name,text,'green') +
			getStopLight(name) + 
			'] }' ;
		return response;
}	
