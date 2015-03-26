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

	suggestedText = json.suggestion.text;
	suggestionScore = json.suggestion.score;
	frequency = json.suggestion.freq;

	this.getSuggestedText = function(){
		return suggestedText;
	};

	this.getSuggestionScore = function(){
		return suggestionScore;
	};

	this.getFrequency = function(){
		return frequency;
	};
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

	this.getPrefixedName = function(){
		return prefixedName;
	};

	this.getURI = function(){
		return uri; 
	};
}