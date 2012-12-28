function questionAlert() {
	alert('question.js');
}


function getQuestion1( component ) {
	Ext.getStore('Questions').info();
	console.log('getQuestion1');
	component.removeAll();
	var response = '{ success: true, data: [ ' +
		'{xtype: "help", name: "helpme"}, ' +
		'{xtype: "textfield", title: "label1", name: "tf1"}, ' +
		'{xtype: "textfield", title: "label1", name: "tf1"}, ' +
		'{xtype: "textfield", title: "label1", name: "tf1"}, ' +
		'] }' 
		;
	component.add(Ext.decode(response).data);
}

function getQuestion2( component ) {
	Ext.getStore('Questions').info();
	console.log('getQuestion2');
	component.removeAll();
	var response = '{ success: true, data: [ ' +
		'{xtype: "help", name: "helpme"}, ' +
		'{xtype: "textfield", title: "label1", name: "tf1"}, ' +
		'{xtype: "textfield", title: "label1", name: "tf1"}, ' +
		'] }' 
		;
	component.add(Ext.decode(response).data);
}
function getTitle(title) {
	return "<div class=\"question\">" + title + "</div>" ;
}

function getStopLight(name) {
	return "{ html: '<div>&nbsp;</div><div id=\"" + name + "\" class=\"centered\"><img src=\"../resources/images/tl-none.png\"/></div><div>&nbsp;</div>' }, ";
}
function getStopLightOptionStart(name,text,color) {
	return '{ xtype: "fieldset", items: [ ' ;
}	
function getStopLightOptionEnd(name,text,color) {
	return '], }, ' ;
}
function getStopLightOption(name,text,color) {
	return '{ ' +
				'xtype: "radiofield", ' +
				'name : "color", ' +
				//'value: "red", ' +
				'label: "'+text+'", ' +
				'labelWidth: "66%",	 ' +
				'listeners: { check: function(button) { Ext.get("' + name + '").setHtml("' +
				"<div id='"+name+"' class='centered'><img src='../resources/images/tl-"+color+".png'/></div>" +
				'"); } }, ' +
			'}, ' ;
}	

function getPrevNextButtons() {
return " \
			{			\
				layout: 'hbox',\
				align: 'center',\
				pack: 'center',\
				items: [\
				{xtype: 'spacer'},\
				{\
					xtype: 'button',\
					text: 'Prev',\
					id: 'prevButton',\
					ui: 'default',\
					disabled: false,\
					width: '100px',\
				},\
				{xtype: 'spacer'},\
				{\
					xtype: 'button',\
					text: 'Next',\
					id: 'nextButton',\
					ui: 'confirm',\
					width: '100px',\
				},\
				{xtype: 'spacer'},\
				],\
			},\
";
}	


