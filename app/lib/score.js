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

		// if area is special, set score
		if (scoreType == 'MultiQ') {
			log(scoreType);
			score =	scoreMultiQ(); 
		}
		if (scoreType == 'Complex1') {
			log(scoreType);
			score = scoreComplex1();
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

// {"q": 57, "scoreType":"MultiQ",},
// {"q": 62, "scoreType":"MultiQ",},
// {"q": 66, "scoreType":"MultiQ",},
// {"q": 71, "scoreType":"MultiQ",},
function scoreMultiQ() {
	return 0;
}	

// {"q": 94, "scoreType":"Complex1",},
function scoreComplex1() {
	return 0;
}



