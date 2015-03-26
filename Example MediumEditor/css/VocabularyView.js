/*jslint browser: true*/
/*global $, jQuery, VocabularySearch*/

function ResultView(targetView){
	"use strict";
	var html, target, toggle;

	function init(targetView){
		target = targetView;
		html = '<div id="search-result"><ul></ul></div>';
		toggle = false;
	}

	this.addSearchResult = function(name, url){
		$('#search-result ul').append('<li><div class="search-result-name">' + name + '</div><div class="search-result-url">' + url + '</div></li>');
	};

	this.removeSearchResult = function(){
		$('#search-result ul').remove();
	};

	this.toggleSearchResult = function(){
		if(!toggle){
			$(target).append(html);
			toggle = true;
		} else {
			$(target).detach(html);
			toggle = false; 
		}
	};

	init(targetView);
}