function setTitle(component,q) {
	var tpl = new Ext.Template([
		'<div class="question">{t}</div>',
	]);
	tpl.compile();
	html = tpl.apply( {t: q.get('text') } );
	component.getTitle().setHtml(html);
}

function buildQuestion(q) {
		var nm = Date.now();
		var opts = q.get('options');
		var tpl = new Ext.XTemplate(
			'{ success: true, data: [ ' ,
				//fixme stripped by template? '{ xtype: "hiddenfield", name: "ordinal", }, ' ,
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
		var response = tpl.apply({name:nm, options:opts});  
		console.log(response);
		return response;
}	


