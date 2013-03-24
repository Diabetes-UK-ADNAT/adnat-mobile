Ext.define('adnat.controller.QuestionController', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            'test/score': 'doTestScore'
        },
        refs: {
            question: '#questionPanel',
            title: '#title',
            feedback: '#feedback',
            morefeedback: '#morefeedback',
            questionComponent: '#questionComponent',
            prevButton: '#prevButton',
            nextButton: '#nextButton',
            indicator: '#indicator'
        },
        control: {
            prevButton: {
                tap: "prevPage"
            },
            nextButton: {
                tap: "nextPage"
            }
        }
    },
    launch: function() {
        Ext.getStore('Questions').load({
            callback: this.onQuestionsStoreLoad,
            scope: this
        });
    },
    onQuestionsStoreLoad: function() {
        var currentOrdinal = Ext.getStore('Responses').getCount();
        this.showQuestion(currentOrdinal, 0);
    },
    onSwipe: function(event) {
        if (event.direction === 'right') {
            this.prevPage();
        } else if (event.direction === 'left') {
            this.nextPage();
        }
    },
    prevPage: function() {
        this.navToNextPage(-1);
    },
    nextPage: function() {
        this.navToNextPage(+1);
    },
    navToNextPage: function(direction) {
        r = Ext.create('adnat.model.Response', this.getQuestion().getValues());
        options = r.get('options');
        if (r.get('required') === 1 && (
                typeof options === 'undefined'
                || options === null
                || options.length === 0
                )) {
            this.showQuestion(r.get('ordinal'), 0, 'Please answer this question so we may score your ADNAT survey');
        } else {
            // save text, response texts, and category 
            if (
                    typeof options !== 'undefined'
                    && options !== null
                    && options.length > 0
                    ) {
                var responseTexts = new Array();
                q = Ext.getStore('Questions').getAt(r.get('ordinal'));
                optionTexts = q.get('options');
                log(optionTexts);
                if (options instanceof Array) {
                    options.forEach(function(optionIndex) {
                        if (optionIndex !== null) {
                            responseTexts.push(optionTexts[optionIndex]['text']);
                        }
                    });
                } else {
                    responseTexts.push(optionTexts[options]['text']);
                }
                r.set('optionsText', responseTexts);
            }

            Ext.getStore('Responses').saveResponse(r);

            this.showQuestion(r.get('ordinal') + direction, direction);
        }
    },
    showQuestion: function(newO, direction, moreFeedback) {
        var q = getNextQuestion(newO, direction);
        log(q);
        setFeedback(this, q);
        setMoreFeedback(this, moreFeedback);
        setTitle(this, q);
        // fixme does not display progress here, even though numbers are set; setProgress(this);
        setQuestion(this.getQuestionComponent(), q);
        // find previous response if it exists and put on question
        var s = Ext.getStore('Responses');
        var r = s.findResponseRecord(q.get('id'));
        if (r !== null) {
            r.set('ordinal', q.get('ordinal'));
            r.set('category', q.get('category'));
            r.set('info', q.get('info'));
            r.set('required', q.get('required'));
            this.getQuestion().setRecord(r);
        } else {
            q.set('q', q.get('id'));
            this.getQuestion().setRecord(q);
        }
        //setProgressBarHtml4( this.getProgressnum(), this.getIndicator() );
        setProgressBarHtml4(this.getIndicator());
        this.getQuestion().getScrollable().getScroller().scrollTo(0, 0, false);
    },
    doTestScore: function() {
        testScore();
        log("is scored " + isScored());
        // fixme, instead of delay, fire event with scores when scoring is complete
        var task = Ext.create('Ext.util.DelayedTask', function() {
            log("is scored " + isScored());
            log('General Score is ' + getGeneralScore());
            log('Psych-Social Score is ' + getPsychScore());
        });
        task.delay(1000);
    }
});
