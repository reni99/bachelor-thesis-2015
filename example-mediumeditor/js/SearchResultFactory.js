 /*jslint browser: true*/
/*global $, jQuery, LOVSearch, SearchResultFactory, alert, ResultView, Search, Suggestion, Autocompletion*/

 function SearchResultFactory(){
	"use strict";

	this.createSearchResult = function (json, typeOfSearch){
		var searchResult;

		if(typeOfSearch === "search"){
			searchResult = new Search(json);
		} else if(typeOfSearch === "suggestion"){
			searchResult = new Suggestion(json);
		} else if(typeOfSearch === "autocomplete"){
			searchResult = new Autocompletion(json);
		}
		searchResult.type = typeOfSearch;
		return searchResult;
	};


}

/*
Models
**/
function Search (json){
	"use strict";
	var j = json,
	prefixedName,
	uri;

	this.init = function(){
		if(json.results.length > 0){
			prefixedName = j.results[0].prefixedName[0];
			uri = j.results[0].uri[0];
		} else {
			prefixedName = null;
			uri = null;
		}
	};
	
	this.getPrefixedName = function(){
		return prefixedName;
	};

	this.getURI = function(){
		return uri;
	};

	this.init();
}


function Suggestion (json){
	"use strict";
	var suggestedText, suggestionScore, frequency;

	this.init = function(){
		if(json.suggestions.length > 0){
			suggestedText = json.suggestions[0].text;
			suggestionScore = json.suggestions[0].score;
			frequency = json.suggestions[0].freq;	
		}else{
			suggestionScore = null;
			suggestedText = null;
			frequency = null; 
		}
	};

	this.getSuggestedText = function(){
		return suggestedText;
	};

	this.getSuggestionScore = function(){
		return suggestionScore;
	};

	this.getFrequency = function(){
		return frequency;
	};

	this.init();
}

function Autocompletion (json){
	"use strict";
	var j = json,
	prefixedName,
	uri;

	this.init = function(){
		if(json.results.length > 0){
			prefixedName = j.results[0].prefixedName[0];
			uri = j.results[0].uri[0];
		} else {
			prefixedName = null;
			uri = null;
		}
	};

	this.getNumberOfResults = function(){
 		return j.results.length;
	};

	this.getPrefixedName = function(){
		return prefixedName;
	};

	this.getURI = function(){
		return uri; 
	};

	this.init();
}