
/*jslint browser: true*/
/*global $, jQuery*/

function LOVSearch(){
	"use strict";

	var baseURL = "http://lov.okfn.org/dataset/lov/api/v2/";

	this.doGet = function(typeOfSearch, searchString, type, successHandler){
		var url = baseURL + "term/" + typeOfSearch + "?q=" + searchString + "&type=" + type;

		 $.ajax({
      		type:'GET',
      		url: url,
      		dataType:'json',
      		success: successHandler,
      		error: function(){
      			//TODO: Implement error handling...
      			alert("error");
      		}
    	});

	};
}