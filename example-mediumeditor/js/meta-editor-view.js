
/*jslint browser: true*/
/*global $, jQuery*/

function MetaEditorView(){
	"use strict";

	var toggleState = false ;

	this.getToggleState = function(){
		return toggleState;
	};

	this.setToggleState = function(newToggleState){
		if(typeof newToggleState === 'boolean'){
			toggleState = newToggleState;
			return true;
		}
		return false;
	};

	this.toggle = function(){
		if(!this.getToggleState()){
			$('body').append('<aside class="metaEditor"><h3>Meta Editor</h3><input type="text" placeholder="Subject"/><input type="text" id="predicateInput" placeholder="Predicate"/><button>i</button><input type="text" placeholder="Object"/><button id="saveTripleButton" type="button">Save</button></aside>');
			this.setToggleState(true);
		}else{
			$('.metaEditor').detach();
			this.setToggleState(false);
		}
		return;
	};

	//Handlers for presenter
	this.addPredicateInputHandler = function(handler){
		$('#predicateInput').keyup(handler);
	};

	this.addSaveTripleHandler = function(handler){
		$('#saveTripleButton').click(handler);
	};

	this.addSubjectInputHandler = function(handler){
		//TODO: Implement
	};
}