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
	if ( q.get('skip') != null ) {
		q = skipQuestions(q, direction);
	}
	return q;
}

function skipQuestions(q, direction) {
	log('skipQuestion direction: ' + direction + ' q: ' + q.get('skip').split(',')[0] );
	var skipItems = q.get('skip').split(',');
	skipItems.forEach(logArrayElements);
	newQ = q;
	skipItems.forEach(function(element) {
		newQ = skipQuestionsItem(newQ, element, direction);
		log('newQ ' + newQ.get('id'));
	});
	return newQ;
}

function skipQuestionsItem(q, element, direction) {
	var item = element.split('.');
	if ( isResponseEqualSkip(q,item[0], item[1]) ) { 
		log('skipped ' + q.get('id'));
		saveEmptyResponse(q);
		q = getNextQuestion(q.get('ordinal') + direction, direction);
	}
	return q;
}

function saveEmptyResponse(q) {
	r = Ext.create('adnat.model.Response', {
		q:q.get('id'),
		options: null,
		ordinal:q.get('ordinal'),
		other: null,
	});
	Ext.getStore('Responses').saveResponse(r);
}

function isResponseEqualSkip(q,skipQ, skipR) {
	log('skipQ ' + skipQ + ',skipR ' + skipR + ', skip it? q ' + q.get('id') + ',skip it? o ' + q.get('ordinal') );
	var s = Ext.getStore('Responses');
	s.load(); //is required to work
	var r = s.findResponseRecord( skipQ );
	if ( r != null ) {
		log(r);
		var options = r.get('options');
		if (options instanceof Array) {
			return ( options != null && options.indexOf(skipR) > -1 );
		} else {
			return ( options != null && options == skipR );
		}
	}
	return false;
}

function setProgressBarHtml4(indicator) {
	var percentComplete = calcProgress();
	indicator.setStyle( 'width:' + percentComplete + '%;' );
	//progressnum.setHtml( percentComplete + " %" );
}

function calcProgress() {
	var totalResponses = Ext.getStore('Responses').load().getTotalCount();
	var totalQuestions = Ext.getStore('Questions').load().getTotalCount();

	percentComplete = totalResponses / totalQuestions;
	percentComplete = Math.round(Number(percentComplete * 100));
	percentComplete = Math.max(percentComplete,0);
	percentComplete = Math.min(percentComplete,100);

	log(percentComplete + '% complete ' + totalQuestions + ', ' + totalResponses);
	return percentComplete;
}	

function buildQuestion(q) {
	//fixme switch on question types here
	var tpl = new Ext.XTemplate(
		'{ success: true, data: [ ' ,
			// fields
			'{ xtype: "hiddenfield", name: "q", suborgetsdropped: "{name}"}, ' ,
			'{ xtype: "hiddenfield", name: "ordinal", suborgetsdropped: "{name}"}, ' ,
			// info
			'<tpl if="info != null">',
			'{ html: "',
			"<div id='{name}' class='info'>",
				"{info}",
			"</div>",
			'"}, ',
			'</tpl>',
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
				// TEXT
				'<tpl if="type == &quot;TEXT&quot;">',
					"{ xtype: 'textareafield', id:'{name}', name: 'other', ",
						'style: "font-size: 1.2em;", ',
						"label:null,}, ",
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
			////"{ html: '",
			////'<div id="{name}" class="centered">',
				////'{category}',
			////'</div>',
			////"'}, ",
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

