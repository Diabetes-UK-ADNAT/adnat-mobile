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




