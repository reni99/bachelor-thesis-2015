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
	
	prefixedName = j.results[0].prefixedName[0];
	uri = j.results[0].uri[0];

	this.getPrefixedName = function(){
		return prefixedName;
	};

	this.getURI = function(){
		return uri;
	};
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
	var name, uri;
	name = json.results[0].prefixedName[0];
	uri = json.results[0].uri[0];

	this.getName = function(){
		return name;
	};

	this.getURI = function(){
		return uri; 
	};
}