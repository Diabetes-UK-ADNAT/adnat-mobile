Ext.define('adnat.controller.QuestionController', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
		},
        refs: {
			question: '#questionPanel',
			title: '#title',
			questionComponent: '#questionComponent',
			prevButton: '#prevButton',
			nextButton: '#nextButton',
        },
        control: {
			prevButton: {
				tap: "prevPage"
			},
			nextButton: {
				tap: "nextPage"
			},
        },
    },
	/*
	launch: function() {
        Ext.getStore('Questions').load({
            callback: this.onQuestionsStoreLoad,
            scope: this
        });
    },
	onQuestionsStoreLoad : function() {
		console.log('onQuestionsStoreLoad');
        var s = Ext.getStore('Questions');
		s.info();
    },
	*/
    prevPage: function(){
        var s = Ext.getStore('Questions');
		m = Ext.create('adnat.model.Question', this.getQuestion().getValues() );
	    var newO = m.get('ordinal') - 1;
		if ( newO < 0 ) newO = s.getCount() - 1;
		//store
		var q = s.getAt(newO);
		//view
		this.getTitle().setHtml(getTitle(q.get('text')));

		var f = this.getQuestionComponent();
		f.removeAll();
		var name = Date.now();
		var text = 'my option text';
		var color = 'red';
		var response = '{ success: true, data: [ ' +
			'{xtype: "hiddenfield", name: "ordinal",}, ' +
			getStopLightOptionStart(name,text,color) +
			getStopLightOption(name,'red1','red') +
			getStopLightOption(name,'yellow1','yellow') +
			getStopLightOption(name,'green1','green') +
			getStopLightOptionEnd(name,text,'green') +
			getStopLight(name) + 
			'] }' ;
		f.add(Ext.decode(response).data);
		// find previous response if it exists and put on question
		this.getQuestion().setRecord(q);
	},

	nextPage: function(){
		// form data
		m = Ext.create('adnat.model.Question', this.getQuestion().getValues() );

		// next question
	    var newO = m.get('ordinal') + 1;
		if ( newO > 4 ) newO = 0;
		
		//store
        var s = Ext.getStore('Questions');
		var q = s.getAt(newO);

		// view 
		var f = this.getQuestionComponent();
		f.removeAll();

		//set the question text
		this.getTitle().setHtml(getTitle(q.get('text')));
		// build a stoplight question
		var name = Date.now();
		var text = 'my option text';
		var color = 'red';
		var response = '{ success: true, data: [ ' +
			'{xtype: "hiddenfield", name: "ordinal",}, ' +
			getStopLightOptionStart(name,text,color) +
			getStopLightOption(name,'red1','red') +
			getStopLightOption(name,'yellow1','yellow') +
			getStopLightOption(name,'green1','green') +
			getStopLightOptionEnd(name,text,'green') +
			getStopLight(name) + 
			'] }' ;

		// put on the form
		f.add(Ext.decode(response).data);
		// find previous response if it exists and put on question
		this.getQuestion().setRecord(q);
	},
});
