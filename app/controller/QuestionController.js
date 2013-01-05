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
			indicator: '#indicator',
			//progressnum: '#progressnum',
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
	launch: function() {
        Ext.getStore('Questions').load({
            callback: this.onQuestionsStoreLoad,
            scope: this
        });
    },
	onQuestionsStoreLoad : function() {
		//log('onQuestionsStoreLoad');
        var s = Ext.getStore('Questions');
		//s.info();
		// show current question, based on last available response
		// fixme: handle last page and last item navigated to instead
        var currentOrdinal = Ext.getStore('Responses').getCount();
		this.showQuestion(currentOrdinal,1);
		// testing
		//this.showQuestion(80,0); 
    },
    onSwipe: function (event) {
		 if (event.direction == 'right') {
			 this.prevPage();
		 } else if (event.direction == 'left') {
			 this.nextPage();
		 }
    },
	showQuestion: function(newO,direction) {
		var q = getNextQuestion(newO, direction);
		log(q);
		setTitle(this,q);
		// fixme does not display progress here, even though numbers are set; setProgress(this);
		setQuestion(this.getQuestionComponent(), q);
		// find previous response if it exists and put on question
		var s = Ext.getStore('Responses');
		var r = s.findResponseRecord(q.get('id'));
		if ( r != null ) {
			r.set('ordinal', q.get('ordinal'));
			r.set('category', q.get('category'));
			r.set('info', q.get('info'));
			this.getQuestion().setRecord(r);
		} else {
			q.set('q', q.get('id'));
			this.getQuestion().setRecord(q);
		}

		//setProgressBarHtml4( this.getProgressnum(), this.getIndicator() );
		setProgressBarHtml4( this.getIndicator() );
		this.getQuestion().getScrollable().getScroller().scrollTo(0,0,false)
	},

    prevPage: function(){
		// fixme validate 
		r = Ext.create('adnat.model.Response', this.getQuestion().getValues() );
		Ext.getStore('Responses').saveResponse(r);
		this.showQuestion( r.get('ordinal') - 1, -1 ); 
        /*
		 * var errors = r.validate();
        if (!errors.isValid()) {
            Ext.Msg.alert('validation');
			log('m valid? ', errors.isValid()); // returns 'false' as there were validation errors
			log('All Errors:', errors.items); // returns the array of all errors found on this model instance
			log('Field One Errors:', errors.getByField('fieldone')); // returns the errors for the age field
            r.reject();
            return;
        }
		*/
	},

	nextPage: function(){
		// fixme validate 
		r = Ext.create('adnat.model.Response', this.getQuestion().getValues() );
		Ext.getStore('Responses').saveResponse(r);
		this.showQuestion( r.get('ordinal') + 1, 1 ); 
	},
});
