/*
 *
	http://localhost:8080/#test/score
 *
 */

function testScore() {
	log('testScore');

	var avals = [2,1,0,2,1,0];
	avals.forEach(logArrayElements);
	var opts = [1,2,3,4];

	var scored = new Array();
	opts.forEach(function(scoreIdx) {
		log(avals[scoreIdx]);
		if ( avals[scoreIdx] > 0 ) {
			scored.push( avals[scoreIdx] );
		}
	});
	var scoredDesc = scored.sort().reverse();
	scoredDesc.forEach(logArrayElements);
	var score = 0;
	if (scoredDesc.length > 0) {
		score = scoredDesc[0];
	}
	log( score );

	// setup
	//
	// score psych
	scorePsychQuestions();
	// score general
	//
	// assert psych
	// assert general
}

// scoring store:
// 	qid, score, tally / reviewOnly
// list of questions for review ( score > 0 ) (filter category and score, order by score)
function scorePsychQuestions() {
	log('scorePsychQuestions');
	var responses = Ext.getStore('Responses');
	var totalPsychScore = 0;
	var scoredPsychQuestions = Array();
	getScoredForReviewPsychQuestionIds().forEach(function(qId) {
		var score = scoreQuestion(responses, qId);
		scoredPsychQuestions[qId] = score;
		//q.save (score)
	});
	getScoredAndTalliedPsychQuestionIds().forEach(function(qId) {
		var score = scoreQuestion(responses, qId);
		scoredPsychQuestions[qId] = score;
		//q.save (score)
		totalPsychScore += score;
	});
	scoredPsychQuestions.forEach(logArrayElements);
	log('totalPsychScore='+totalPsychScore);
	return totalPsychScore;
}

function scoreQuestion(responses, qId) {
	var r = responses.findResponseRecord(qId);
	if ( r != null ) {
		return parseInt(r.get('options'), 10);
	}
	return 0;
}

function getScoredAndTalliedPsychQuestionIds() {
	return [
		// 10/117 How do you feel about your diabetes at the moment?  Score on Q117
		117,
		// 11/19 How active are you? Score on 19
		19,
		// 20/28 Which statement best describes you?  Score on 28
		28,
		// 29/48 How healthy do you think your diet is?  Score on 48
		48,
		// 49/55 Do you think you test your blood glucose...  Score on 55
		55,
		// 56/77 How do you feel about your blood glucose control in general?  Score on 77
		77,
		// 78/90 How do you feel about injecting or using your insulin pump Score on 90
		//fixme 90 category and make same as 78 in sheet
		90,
		// 91/113 How does diabetes affect your life?  Score on 113
		113,
	]; 
}
function getScoredForReviewPsychQuestionIds() {
	return [
		// 10/117 How do you feel about your diabetes at the moment?  Score on Q117
		10,
		// 11/19 How active are you? Score on 19
		11,
		// 20/28 Which statement best describes you?  Score on 28
		20,
		// 29/48 How healthy do you think your diet is?  Score on 48
		29,
		// 49/55 Do you think you test your blood glucose...  Score on 55
		49,
		// 56/77 How do you feel about your blood glucose control in general?  Score on 77
		56,
		// 78/90 How do you feel about injecting or using your insulin pump Score on 90
		//fixme 90 category and make same as 78 in sheet
		78,
		// 91/113 How does diabetes affect your life?  Score on 113
		91,
	]; 
}

function scoreGeneralQuestions() {
	log('scoreGeneralQuestions');
}

