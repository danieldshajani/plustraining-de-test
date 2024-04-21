/* global modules, items, exercisePoints */

"use strict";

var transitionSpeed = 400;
var totalSteps;
var currentStep;
var firstModule;
var ajaxComplete = false;
var nextComplete = true;
var totalPointsPerLevel;
var maxPointsPerLevel;
var exerciseFilledIn = true;
var trace = [];
var startTime;
var timer;
var submitted = false;
var percentForPass = 70.0;

$(document).ready(function() {	
	//set up initial variables
	firstModule = modules.Start1;
	currentStep = 0;
	totalSteps = 69;
	ajaxComplete = false;
	totalPointsPerLevel = {
		A1: 0.0,
		A2: 0.0,
		B1: 0.0,
		B2: 0.0,
		C1: 0.0,
	};
	maxPointsPerLevel = {
		A1: 0.0,
		A2: 0.0,
		B1: 0.0,
		B2: 0.0,
		C1: 0.0,
	};
		
	//reset form
	document.forms["placement-test"].reset();
	$("#modules").empty();
	
	//initialise progress bar
	$("#progressbar").progressbar({
      value: 1
    });
	
	//prepare timer
	$("#timer").css("display", "inline-block").hide();
	
	//prepare buttons
	$(".next-button").css("display", "block").hide();
	$("#begin-button").show();
	$("#next-button").text("Bitte beantworten Sie die Frage(n)");
	
	//prepare ajax completion handler
	$(document).ajaxComplete(function() {ajaxComplete = true;});
	
	//set up welcome panel validators
	$("#welcome input").keyup(validateWelcomePanel);
	$("#welcome input").change(validateWelcomePanel);
	
	//set up warning for leaving test
	$(window).bind("beforeunload", function (e) {
		if (!submitted) { //check submitted flag
			var confirmationMessage = "Your test result has not been submitted yet. If you leave before submitting, Plus Training OG will not see your test result.";

			(e || window.event).returnValue = confirmationMessage;
			return confirmationMessage;
		}
	});
	
	//set up ‘begin’ button
	$("#begin-button").click(function() {
		var d = new Date();
		
		startTime = d;
		
		//diagnostics
		trace.push("start: " + d.getHours() + ":" + d.getMinutes());
		
		loadModule(firstModule, true);
	});	
	
	//set up ‘next’ button
	$("#next-button").click(function() {
		//cancel event handler if the next button should be disabled
		if ($(this).hasClass("disabled")) {
			return false;
		}
		
		//get current exercise
		var currentFieldset = $("[id^=module_]:visible fieldset:visible");
		
		//diagnostics
		trace.push("current exercise: " + currentFieldset.data("exercise"));
		
		if (nextComplete) {
			//disable ‘next’ button to prevent double clicks
			nextComplete = false;
			setTimeout(function() { nextComplete = true; }, transitionSpeed);

			displayNextExercise();
		}
		return false;
	});
	
	//set up ‘submit’ button
	$("#complete a").click(function() {
		submit();
		return false;
	});
});

function validateWelcomePanel() {
	var isFilled = true;
	
	if (!$("#confidentiality-checkbox").is(":checked")) {
		isFilled = false;
	}
	
	if (!$("#Name").val()) {
		isFilled = false;
	}
	
	
	if (isFilled) {
		$("#begin-button").removeClass("disabled");
		$("#begin-button").html("<span>Test starten</span> | <span>Begin test</span>");
	} else {
		$("#begin-button").addClass("disabled");
		$("#begin-button").html("<span>Bitte füllen Sie alle erforderlichen Felder aus</span> | <span>Please fill in all required fields</span>");
	}
}

function displayNextExercise() {
	//get currently displayed exercise
	var currentFieldset = $("[id^=module_]:visible fieldset:visible");
	
	//reset tab indices of current exercise
	currentFieldset.find("input, select").attr("tabindex", 0);

	//if this is the last exercise in the current module, evaluate the module – otherwise, simply display next exercise
	if (currentFieldset.is(":last-child")) { 
		evaluateModule($("[id^=module_]").filter(":visible")[0]);
	} else {
		$("#content").fadeOut(transitionSpeed).fadeIn(transitionSpeed);
		currentFieldset.fadeOut(transitionSpeed);

		setTimeout(function() {
			displayExercise(currentFieldset.next());
		}, transitionSpeed);
	}

	//increase currentStep by points assigned to current exercise and refresh progress bar
	currentStep += currentFieldset.data("points");
	refreshProgressbar();
}

function displayExercise(fieldset) {
	//show exercise
	fieldset.fadeIn(transitionSpeed);
	
	//set tab indices
	var tabIndex = 1;
	
	fieldset.find("input, select").each(function() {
		$(this).attr("tabindex", tabIndex);
		
		tabIndex++;
	});
	
	$("#next-button").attr("tabindex", tabIndex);
	$("#next-button").blur();
	//fieldset.find("input, select").first().focus();
	
	//reset timer
	clearInterval(timer);
	setTimer(fieldset.data("time"));
	
	//enable/disable 'next’ button
	//setTimeout(function() {
		exerciseFilledIn = false;
		$("#next-button").addClass("disabled");
		$("#next-button").text("Bitte beantworten Sie die Frage(n)");

		if (fieldset.find("input[type=text]").length > 0) {
			exerciseFilledIn = true;
			$("#next-button").removeClass("disabled");
			$("#next-button").text("Weiter");
		}
	//}, transitionSpeed);
}

//set the timer for an exercise
function setTimer(timeForExercise) {
	timeForExercise = timeForExercise ? timeForExercise : 30;
	
	//timeForExercise = 2;
	
	//add 2 seconds for transitions and such
	timeForExercise += 2;
	
	//calculate when the timer will run out
	var endTime = new Date().getTime() + (timeForExercise * 1000);
	
	timer = setInterval(function() {
		//get current time
		var now = new Date().getTime();
		
		//find the distance between now an the count down date
  		var distance = endTime - now;
		
		//calculate minutes and seconds for display
		var minutes =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
		//if the timer has run out, display next exercise; otherwise update timer display
		if (distance <= 0) {
			$("#timeLeft").html("0:00");
			displayNextExercise();
		} else {
			$("#timeLeft").html(minutes + ":" + getFormattedTimeString(seconds));
		}
	}, 1000);
}

//refresh the progress bar
function refreshProgressbar() {
	if ((currentStep * 100) / totalSteps > 100) {
		$("#progressbar .ui-progressbar-value").animate({width: "100%"}, transitionSpeed);
		trace.push("progress bar error");
	} else {
		$("#progressbar .ui-progressbar-value").animate({width: (((currentStep * 100) / totalSteps)) + "%"}, transitionSpeed);
	}
	
	//diagnostics
	trace.push("step " + currentStep + " of " + totalSteps);
}

//load a module
function loadModule(module, isFirst) {
	ajaxComplete = false;
	
	//update maxPointsPerLevel: go through exercises and add their points to the appropriate levels
	$(module.exercises).each(function() {
		maxPointsPerLevel[this.substr(0,2)] += exercisePoints[this];
	});
		
	//diagnostics
	trace.push("maxPointsPerLevel: " + getFormattedPointsString(maxPointsPerLevel));
	
	//fade out content
	$("#content").fadeOut(transitionSpeed);
	$("[id^=module_]").fadeOut(transitionSpeed);
	if (isFirst) {
		$("#welcome").fadeOut(transitionSpeed);
	}
	
	//shuffle exercises
	var newExercises = shuffle(module.exercises);
	
	//initialise new module div
	var newModule = $("<div>", {
		id: "module_" + module.id,
		style: "display: none"
	});
	
	//add exercises to module div
	$(newExercises).each(function() {
		var exerciseId = this;
		
		$.get("exercises/" + exerciseId + ".txt", function(data) {
			var newFieldset = $(data);
			
			//add exercise id to fieldset
			newFieldset.data("exercise", exerciseId);
			
			//add labels to radios
			newFieldset.find("input[type=radio]").after(function() {
				return $("<label>", {
					for: this.id,
					text: this.value
				});
			});
			
			//add classes to radios
			newFieldset.find("input[type=radio]").addClass("element-invisible element-focusable-hidden");
			
			//add validators
			addValidators(newFieldset);
			
			//append exercise to module
			newModule.append(newFieldset);
			
			//once all exercises have been loaded via ajax, add the new module and display it
			if (ajaxComplete) {
				$(newModule).fadeIn(transitionSpeed);
				
				displayExercise($(newModule).children("fieldset:first-child"));
				
				$("#content").fadeIn(transitionSpeed + 200);

				if (isFirst) {
					$("#modules").fadeIn(transitionSpeed);
					$("#next-button").delay(transitionSpeed).fadeIn(transitionSpeed);
					$("#timer").fadeIn(transitionSpeed);
				}
			}
		}, "html");
	});
	
	//append new module div to container
	$("#modules").append(newModule);
}

//set up validators for exercises
function addValidators(newFieldset) {
	//validate radios
	newFieldset.find("input:radio").change(function() {
		var groups = [];

		newFieldset.find("input:radio").each(function() {
			if (groups.indexOf(this.name) == -1) {
				groups.push(this.name);
			}
		});

		if (newFieldset.find("input:radio:checked").length < groups.length) {
			exerciseFilledIn = false;
		} else {
			exerciseFilledIn = true;
		}

		if (exerciseFilledIn) {
			$("#next-button").removeClass("disabled");
			$("#next-button").text("Weiter");
		} else {
			$("#next-button").addClass("disabled");
			$("#next-button").text("Bitte beantworten Sie die Frage(n)");
		}
	});

	//validate selects
	newFieldset.find("select").change(function() {
		exerciseFilledIn = true;

		newFieldset.find("select").each(function() {
			if (this.selectedIndex == 0) {
				exerciseFilledIn = false;
			}
		});

		if (exerciseFilledIn) {
			$("#next-button").removeClass("disabled");
			$("#next-button").text("Weiter");
		} else {
			$("#next-button").addClass("disabled");
			$("#next-button").text("Bitte beantworten Sie die Frage(n)");
		}
	});
}

//evaluate a module after it has been finished
function evaluateModule(module) {	
	var modulePoints = 0;
	var moduleName = module.id.replace("module_", "");
	
	//set answers to exercises in code so they can be displayed on the results page generated after form submission
	$(module).find("input[type=radio]:checked").attr("checked", "checked");
	$(module).find("input[type=text]").each(function() {
		$(this).attr("value", this.value);
	});
	$(module).find("select").each(function() {
		$(this.options[this.selectedIndex]).attr("selected", "selected");
	});
	
	//evaluate radio buttons
	$(module).find("input[type=radio]:checked").each(function() {		
		if (items[this.id]) {
			modulePoints += items[this.id].points;
			totalPointsPerLevel[items[this.id].level] += items[this.id].points;
			
			$(this).addClass("correct");
		}
	});
	
	//evaluate text inputs
	$(module).find("input[type=text]").each(function() {
		if (items[this.id] && $.inArray(this.value.trim().toLowerCase(), items[this.id].correctAnswer) != -1) {
			modulePoints += items[this.id].points;
			totalPointsPerLevel[items[this.id].level] += items[this.id].points;
			
			$(this).addClass("correct");
		}
	});
	
	//evaluate selects
	$(module).find("select").each(function() {
		if (items[this.id] && this.options[this.selectedIndex].value == items[this.id].correctAnswer) {
			modulePoints += items[this.id].points;
			totalPointsPerLevel[items[this.id].level] += items[this.id].points;
			
			$(this).addClass("correct");
		}
	});

	//round points
	modulePoints = Math.round(modulePoints);
	totalPointsPerLevel.A1 = Math.round(totalPointsPerLevel.A1 * 100) / 100;
	totalPointsPerLevel.A2 = Math.round(totalPointsPerLevel.A2 * 100) / 100;
	totalPointsPerLevel.B1 = Math.round(totalPointsPerLevel.B1 * 100) / 100;
	totalPointsPerLevel.B2 = Math.round(totalPointsPerLevel.B2 * 100) / 100;
	totalPointsPerLevel.C1 = Math.round(totalPointsPerLevel.C1 * 100) / 100;
	
	//diagnostics
	trace.push(module.id + ": " + modulePoints);
	trace.push("total points: " + getFormattedPointsString(totalPointsPerLevel));
	
	//switch to target module
	if (modules[moduleName].ranges) { //if this is not the last module
		//go through ranges to see which module to switch to
		$(modules[moduleName].ranges).each(function() {
			if (modulePoints >= this.from && modulePoints <= this.to) {
				//diagnostics
				trace.push("new module: " + this.target);
				var d = new Date();
				trace.push("time now: " + d.getHours() + ":" + d.getMinutes());
				
				//if the module has a property ‘itemCount’, add (or subtract) points from totalSteps
				if (this.itemCount) {
					totalSteps += this.itemCount;
				}
				
				//load the next module
				loadModule(modules[this.target]);
			}
		});
	} else if(modules[moduleName].results) { //if this is the last module
		//diagnostics
		var d = new Date();
		trace.push("finished: " + d.getHours() + ":" + d.getMinutes());

		//stop timer
		clearInterval(timer);
		$("#timer").fadeOut(transitionSpeed);
		
		//set up variables for final evaluation
		var levels = ["C1", "B2", "B1", "A2", "A1"];
		var pointsSoFar = 0.0;
		var result = "Basis";
		
		//calculate results per level
		$(levels).each(function () {
			pointsSoFar += totalPointsPerLevel[this];
			
			//diagnostics
			trace.push("checking level " + this);
			trace.push("points so far: " + pointsSoFar);
			
			if (maxPointsPerLevel[this] > 10 && pointsSoFar/maxPointsPerLevel[this] > percentForPass / 100) {
				result = this;
				return false; //break out of loop
			}
		});
		
		//display result
		$("#result").val(result);
		$("#resultDisplay").html("<span id=\"result-level-label\">Ihr Ergebnis:</span> <span id=\"result-level\">" + result + "</span>");
		
		//show completed panel
		$("#content").fadeOut(transitionSpeed);
		$("[id^=module_]").fadeOut(transitionSpeed);
		$("#next-button").fadeOut(transitionSpeed);
		
		$("#complete").delay(transitionSpeed + 100).fadeIn(transitionSpeed);
		$("#content").delay(transitionSpeed + 100).fadeIn(transitionSpeed);
		$("#complete a").show();
	}
}

//submit the results to LOQUI
function submit() {
	//calculate and format time taken for completing the test
	var timeDifference = new Date() - startTime;
	
	var msec = timeDifference;
	var hh = Math.floor(msec / 1000 / 60 / 60);
	msec -= hh * 1000 * 60 * 60;
	var mm = Math.floor(msec / 1000 / 60);
	msec -= mm * 1000 * 60;
	var ss = Math.floor(msec / 1000);
	msec -= ss * 1000;
	
	var timeDifferenceString = hh + ":" + getFormattedTimeString(mm) + ":" + getFormattedTimeString(ss);

	//insert name and result for results page
	$("#displayName").text($("#Name").val());
	$("#displayResult").text($("#result").val());
	$("#displayTime").text(timeDifferenceString);

	//rearrange exercises (sort by difficulty inside each module) & add module name for display on results page
	$("[id^=module_]").each(function() {
		var fieldsets = $(this).find("fieldset");
		fieldsets.detach();
		
		fieldsets.sort(function(a, b) {
			var exA = $(a).data("exercise");
			var exB = $(b).data("exercise");
			var result = 0;
			
			result = exA.substr(0,2).localeCompare(exB.substr(0,2));
			
			if (result == 0) {
				result = exA.substr(2).localeCompare(exB.substr(2));
			}
			
			return result;
		});
		
		$(this).append("<h3 class=\"moduleName\">Module " + this.id.substr(7) + "</h3>");
		$(this).append(fieldsets);
	});
	
	//disable form for result page
	$("input").attr("tabindex", "-1");
	$("select").attr("tabindex", "-1");
	$("label").attr("tabindex", "-1");
	
	//set up data for POST
	var data = {
		name: $("#Name").val(),
		html: $("body").html(),
		result: $("#result").val(),
		maxPoints: getFormattedPointsString(maxPointsPerLevel),
		totalPoints: getFormattedPointsString(totalPointsPerLevel),
		totalTime: timeDifferenceString,
		trace: JSON.stringify(trace).replace(",\n", "<br />").replace(",", "<br />")
	};

	$("#complete a.button").addClass("disabled");

	$("#complete a.button").text("Bitte warten | Please wait");
	
	//submit data
	$.post("submit.php", data, function() {
		$("#complete a.button").text("Ihre Ergebnisse wurden an die Plus Training OG übermittelt | Your results have been submitted to Plus Training OG");
		submitted = true;
	}, "html");
}

function getFormattedPointsString(pointsArray) {
	var result = "";
	
	result += "A1: " + pointsArray.A1 + " | ";
	result += "A2: " + pointsArray.A2 + " | ";
	result += "B1: " + pointsArray.B1 + " | ";
	result += "B2: " + pointsArray.B2 + " | ";
	result += "C1: " + pointsArray.C1;
	
	return result;
}

//shuffle an array (used for shuffling exercises)
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  //while there are still elements to shuffle …
  while (0 !== currentIndex) {

    //pick a remaining element …
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    //and swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//get a two-character string for minutes/seconds: 1 -> "01"; 10 -> "10"
function getFormattedTimeString(number) {
	return number < 10 ? "0" + number : number;
}