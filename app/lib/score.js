/*
 *
	http://localhost:8080/#test/score
 *
 */

function testScore() {
	log('testScore');
	score();
}

var _isScored = false;
function isScored() {
	return _isScored;
}

function getGeneralScore() {
	return gScore;
}
function getPsychScore() {
	return pScore;
}

var pScore = 0;
var gScore = 0;

function score() {
	_isScored = false;
	pScore = 0;
	gScore = 0;
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
			this.doScoring();
		}
	});
}

function doScoring() {
	log('doScoring');
	var responses = Ext.getStore('Responses');
	var sc = Ext.getStore('ScoreConfigs');
	sc.each(function (scr) {
		log('scr'); log(scr);

		var area = scr.get('area');
		var scoreType = scr.get('scoreType');
		var avals = scr.get('avals');

		var response = responses.findResponseRecord(scr.get('q'));
		var options = response != null ? response.get('options') : null;
		options = makeArray(options);

		log('response'); log(response); logArray(avals); logArray(options);

		if (avals) {
			// pull answer vals based on options selected
			var scored = new Array();
			options.forEach(function(optionIndex) {
				if ( optionIndex != null && avals[optionIndex] > 0 ) {
					scored.push( avals[optionIndex] );
				}
			});
			var scoredDesc = arraySortDescNumeric(scored);

			// grab highest score
			var score = scoredDesc.length > 0 ? scoredDesc[0] : 0;
		}

		// if area is special, set score
		if (scoreType == 'MultiQ') {
			log(scoreType);
			score =	scoreMultiQ(responses,scr.get('q'),options); 
		}
		if (scoreType == 'Complex1') {
			log(scoreType);
			score = scoreComplex1(options);
		}

		if (area != null && scr.get('tally') == 1 ) {
			pScore += score;
		} else {
			gScore += score;
		}
		log( 'score=' + score + ',gScore='+gScore+',pScore='+pScore);
	});
	_isScored = true; //fixme fire scored event
}

function scoreMultiQ(responses,q,options) {
	// {"q": 57, "scoreType":"MultiQ",},
	// {"q": 62, "scoreType":"MultiQ",},
	if (q == 57) {
		var response = responses.findResponseRecord(62);
		var options62 = response != null ? response.get('options') : null;
		options62 = makeArray(options62);
		log(options62);
		// red often hypo
		// red unconcious
	    if (arrayHasVal(options, 0) || arrayHasVal(options62, 0)) {
			return 2;
		}	
		// yellow now and again hypo and !unconcious
	    if (arrayHasVal(options, 1) && arrayHasVal(options62, 2)) {
			return 1;
		}	
		// green rarely/never hypo and !unconcious
	    if (arrayHasVal(options, 2) || arrayHasVal(options62, 2)) {
			return 0;
		}	
		return 0;
	}
/*
	// {"q": 66, "scoreType":"MultiQ",},
	// {"q": 71, "scoreType":"MultiQ",},
		red
			often high bg
		red
			ketoacidosis
		yellow
			now and again high and not sure keto	
		green	
			rarely/never high and !keto	
		hand code with helpers (response == tests)
		For multi question, just log first question that score applies for (make sure zeros other ones)
		grab both question rules, process each, eaval score, save both to questionscores
*/
	return 0;
}	

// {"q": 94, "scoreType":"Complex1",},
/*
You are staying over at your friend’s house. Which of the following would you do?
*/ 
function scoreComplex1(options) {
	options =  arrayRemoveNullElements(options);

	// red length = 1 && none of the above 
 	if (options.length == 1 && arrayHasVal(options, 5)) {
		return 2;
	} 
	// red two responses are empty (no meter or insulin equip)
 	if (!arrayHasVal(options, 3) && !arrayHasVal(options, 4)) {
		return 2;
	}
	// yellow length = 2 && two responses are NOT empty (no meter or insulin equip)
 	if (options.length == 2 && arrayHasVal(options, 3) && arrayHasVal(options, 4)) {
		return 1;
	} 
	// green length > 2 && two responses are NOT empty (no meter or insulin equip)
	return 0;
}



