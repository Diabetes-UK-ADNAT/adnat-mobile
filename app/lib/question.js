function setTitle(component,q) {
	var tpl = new Ext.Template([
		'<div class="question">{t}</div>',
	]);
	tpl.compile();
	html = tpl.apply( {t: q.get('text') } );
	component.getTitle().setHtml(html);
}

function setQuestion(c, q) {
	c.removeAll();
	var response = buildQuestion(q);
	c.add(Ext.decode(response).data);
}

function getNextQuestion(newO, direction) {
	// direction = 0 for direct, -1 for prev, 1 for next
	var s = Ext.getStore('Questions');
	if ( newO < 0 ) {
		newO = s.getCount() - 1;
	} else if ( newO > s.getCount() - 1) {
		newO = 0;
	}
	var q = s.getAt(newO);
	return q;
}

function buildQuestion(q) {
	//fixme switch on question types here
	var tpl = new Ext.XTemplate(
		'{ success: true, data: [ ' ,
			// fields
			'{ xtype: "hiddenfield", name: "q", suborgetsdropped: "{name}"}, ' ,
			'{ xtype: "hiddenfield", name: "ordinal", suborgetsdropped: "{name}"}, ' ,
			// options fieldset
			'{ xtype: "fieldset", items: [ ',
				'<tpl for="options">',     
				'{ ' ,
					'<tpl if="parent.type == &quot;SC&quot;">',
					'xtype: "radiofield", ' ,
					'</tpl>',
					'<tpl if="parent.type == &quot;SC-SL&quot;">',
					'xtype: "radiofield", ' ,
					'</tpl>',
					'<tpl if="parent.type == &quot;MC&quot;">',
					'xtype: "checkboxfield", ' ,
					'</tpl>',
					'name : "options", ' ,
					'label: "{text}", ' ,
					'value: "{value}", ' ,
					'labelWidth: "66%",	 ' ,
					'labelWrap: true,	 ' ,
					'labelAlign: "left",	 ' ,
					'style: "font-size: 1.2em;", ',
					'<tpl if="parent.type == &quot;SC-SL&quot;">',
					'listeners: { ',
						'check: function(button) { ',
							'Ext.get("{parent.name}").setHtml("' ,
								"<div id='{parent.name}' class='centered'>",
									'<tpl switch="value">',
										'<tpl case="0">',
											"<img src='../resources/images/tl-green.png'/>",
										'<tpl case="1">',
											"<img src='../resources/images/tl-yellow.png'/>",
										'<tpl case="2">',
											"<img src='../resources/images/tl-red.png'/>",
										'<tpl default>',
											'',
									'</tpl>',
								"</div>" ,
							'"); ',
						'}',
					'}, ' ,
					'</tpl>',
				'}, ' ,
				'</tpl>',
			'], }, ' , 
			'<tpl if="type == &quot;SC-SL&quot;">',
			// stoplight
			"{ html: '",
			'<div>&nbsp;</div>',
			'<div id="{name}" class="centered">',
				'<img src="../resources/images/tl-none.png"/>',
			'</div>',
			'<div>&nbsp;</div>',
			"'}, ",
			'</tpl>',
		'] }'  
	);
	tpl.compile();
	var html = tpl.apply({name:Date.now(), options:q.get('options'), required:q.get('required'), type:q.get('type')});  
	//console.log(html);
	return html;
}	

