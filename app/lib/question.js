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
	// wrap around for now; go to welcome / summary
	if ( newO < 0 ) {
		// summary
		newO = s.getCount() - 1;
	} else if ( newO > s.getCount() - 1) {
		// start (clear/etc)
		newO = 0;
	}
	var q = s.getAt(newO);
	// skip?
	log(q.get('skip'));
	if ( q.get('skip') != null ) {
		q = skipQuestions(q, direction);
	}
	//
	return q;
}

function skipQuestions(q, direction) {
	log('skipQuestion direction: ' + direction + ' q: ' + q.get('skip').split(',')[0] );
	var skipItems = q.get('skip').split(',');
	skipItems.forEach(logArrayElements);
	skipItems.forEach(function(element) {
		if ( newQ = skipQuestionsItem(q, element, direction) ) {
			log('skipped ' + q.get('id'));
			log('newQ ' + newQ.get('id'));
		}
	});
	return newQ;
}
function skipQuestionsItem(q, element, direction) {
	var item = element.split('.');
	// if this question id
	log( item[0] );
	// has this answer
	log( item[1] );
	// skip this question id
	log( 'skipped q ' + q.get('id') );
	log( 'skipped o ' + q.get('ordinal') );
	// make sure the skipped q has a response of null
	// saveResponse()
	//  getNextQuestion(newO, direction) 
	var newQ = getNextQuestion(q.get('ordinal') + direction, direction);
	return newQ;
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
				'<tpl if="this.isGroup(text)">',
					"{ xtype: 'label', name:'{name}', style: 'padding: 0.2em;background: #eee;font-weight:bold;font-size: 1.2em;width: 30% !important;', cls:'x-form-labelDISAPPEARS', html:'{[this.formatGroup(values.text)]}',}, ",
				'<tpl elseif="text != &quot;TEXT_OTHER&quot;">',
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
				'</tpl>',
				// TEXT_OTHER
				'<tpl for="options">',     
					'<tpl if="text == &quot;TEXT_OTHER&quot;">',
						"{ xtype: 'textfield', id:'{name}', name: 'other', ",
							'style: "font-size: 1.2em;", ',
							"label:'Other',}, ",
					'</tpl>',
				'</tpl>',
			'], }, ' , 
			// stoplight
			'<tpl if="type == &quot;SC-SL&quot;">',
			"{ html: '",
			'<div>&nbsp;</div>',
			'<div id="{name}" class="centered">',
				'<img src="../resources/images/tl-none.png"/>',
			'</div>',
			'<div>&nbsp;</div>',
			"'}, ",
			'</tpl>',
			// category
			"{ html: '",
			'<div id="{name}" class="centered">',
				'{category}',
			'</div>',
			"'}, ",
			// info
			"{ html: '",
			'<div id="{name}" class="centered">',
				'{info}',
			'</div>',
			"'}, ",
		'] }',
	    {
        // XTemplate configuration:
        disableFormats: true,
        isGroup: function(text){
           return text.substring(0, 6) == "GROUP:";
        },
        formatGroup: function(text){
           return text.substring(6, text.length);
        },
    }	
	);
	tpl.compile();
	var html = tpl.apply({name:Date.now(), info:q.get('info'), category:q.get('category'),options:q.get('options'), required:q.get('required'), type:q.get('type')});  
	//log(html);
	return html;
}	

