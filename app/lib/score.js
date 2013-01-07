/*
 *
	http://localhost:8080/#test/score
 *
 */

function testScore() {
	log('testScore');
	var sc = Ext.getStore('ScoreConfigs');
	sc.load({
		scope: this,
		callback : function() {
			this.loadResponses();
		}
	});
}

function loadResponses() {
	var responses = Ext.getStore('Responses');
	responses.load({
		scope: this,
		callback : function() {
			this.testScore2();
		}
	});
}

function testScore2() {
	log('testScore2');
	var responses = Ext.getStore('Responses');
	var sc = Ext.getStore('ScoreConfigs');
	sc.each(function (scr) {
		log('scr'); log(scr);

		var avals = scr.get('avals');
		var response = responses.findResponseRecord(scr.get('q'));

		log('response'); log(response);

		var options = response != null ? response.get('options') : null;
		options = makeArray(options);

		logArray(avals); logArray(options);

		// pull answer vals based on options selected
		var scored = new Array();
		for( i = 0; options != null && i < options.length; i++ ) {
			// score selected options that have a score > 0
			if ( options[i] != null && avals[i] > 0 ) {
				scored.push( avals[i] );
			}
		};

		// sort desc
		var scoredDesc = arraySortDescNumeric(scored);
		logArray(scoredDesc);

		// grab highest score
		var score = scoredDesc.length > 0 ? scoredDesc[0] : 0;
		log( 'score=' + score );
	});
}




