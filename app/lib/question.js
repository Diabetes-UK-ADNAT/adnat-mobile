function setTitle(component,q) {
	var tpl = new Ext.Template([
		'<div class="question">{t}</div>',
	]);
	tpl.compile();
	html = tpl.apply( {t: q.get('text') } );
	component.getTitle().setHtml(html);
}
function setQuestion(f, q) {
	// set question
	f.removeAll();
	var response = buildQuestion(q);
	f.add(Ext.decode(response).data);
}

function buildQuestion(q) {
		var tpl = new Ext.XTemplate(
			'{ success: true, data: [ ' ,
				// fields
				'{ xtype: "hiddenfield", name: "ordinal", suborgetsdropped: "{name}"}, ' ,
				// options fieldset
				'{ xtype: "fieldset", items: [ ',
					'<tpl for="options">',     
					'{ ' ,
						'xtype: "radiofield", ' ,
						'name : "color", ' ,
						'label: "{text}", ' ,
						'labelWidth: "66%",	 ' ,
						'listeners: { ',
							'check: function(button) { ',
								'Ext.get("{parent.name}").setHtml("' ,
									"<div id='{parent.name}' class='centered'>",
										"<img src='../resources/images/tl-{color}.png'/>",
									"</div>" ,
								'"); ',
							'}',
						'}, ' ,
					'}, ' ,
					'</tpl>',
				'], }, ' , 
				// stoplight
				"{ html: '",
				'<div>&nbsp;</div>',
				'<div id="{name}" class="centered">',
					'<img src="../resources/images/tl-none.png"/>',
				'</div>',
				'<div>&nbsp;</div>',
				"'}, ",
			'] }'  
		);
		tpl.compile();
		var response = tpl.apply({name:Date.now(), options:q.get('options')});  
		//console.log(response);
		return response;
}	


