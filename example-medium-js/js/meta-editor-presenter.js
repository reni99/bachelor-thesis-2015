/*jslint browser: true*/
/*global $, jQuery, LOVSearch, SearchResultFactory, alert, ResultView*/

function MetaEditorPresenter(viewDelegate){
	"use strict";

	var view, KEY_ENTER;

	KEY_ENTER = 13;

	function init(){
		view = viewDelegate;


		view.addSaveTripleHandler(function(){
			alert("Saved!");
		});

		view.addPredicateInputHandler(function(e){
			var vocabularySearch = new LOVSearch(),
			factory = new SearchResultFactory(),
			jsonString,
			jsonObject,
			resultView;

			//TODO create Parser object --> separation of concern
			if(e.keyCode === KEY_ENTER){
				$('.editable p:first').text("Enter was pressed!");
				vocabularySearch.doGet("search", e.target.value, "property", function(result){
					var search;

					//parse and create search result
					jsonString = JSON.stringify(result);
					jsonObject = jQuery.parseJSON(jsonString);
					search = factory.createSearchResult(jsonObject, "search");

					$('.editable p:first').text("Searched for: " + search.getPrefixedName() + " with URI " + search.getURI());
				});

			} else if(e.target.value){
				vocabularySearch.doGet("autocomplete", e.target.value, "property", function(result){
					var autocomplete;

					//parse
					jsonString = JSON.stringify(result);
					jsonObject = jQuery.parseJSON(jsonString);

					//create resultview
					if(jsonObject){
						autocomplete = factory.createSearchResult(jsonObject, "autocomplete");

						if(autocomplete.getNumberOfResults() > 0){
							resultView = new ResultView(e.target);
							resultView.toggleSearchResult();
							resultView.addSearchResult();
							$('.editable p:first').text("Autocompletion: " + autocomplete.getPrefixedName() + ", " + autocomplete.getURI());
						}

						if(autocomplete.getNumberOfResults() <= 0){
							vocabularySearch.doGet("suggest", e.target.value, "property", function(result){
								var suggestion;

								//parse
								jsonString = JSON.stringify(result);
								jsonObject = jQuery.parseJSON(jsonString);

								suggestion = factory.createSearchResult(jsonObject, "suggestion");
								$('.editable p:first').text("Suggestion: " + suggestion.getSuggestedText());
							});
						}

					}
				});
			}
		});
	}

	init();
}