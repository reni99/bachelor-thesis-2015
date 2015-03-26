/*jslint browser: true*/
/*global $, jQuery, MetaEditorView, MetaEditorPresenter, MediumEditor*/

  function MetaEditorExtension() {
    "use strict";
    var view = new MetaEditorView(),
    presenter = new MetaEditorPresenter(view);

    this.parent = true;
    this.button = document.createElement('button');
    this.button.className = 'medium-editor-action';
    this.button.innerText = 'Meta data';
    this.button.onclick = this.onClick.bind(this);
    
    this.getView = function(){
      return view;
    };

    this.getPresenter = function(){
      return presenter;
    };

  }

  MetaEditorExtension.prototype.getButton = function() {
    "use strict";
    return this.button;
  };
  
  MetaEditorExtension.prototype.onClick = function() {
    "use strict";
    this.getView().toggle();
  };

  var editor = new MediumEditor('.editable', {
  	buttons: ['extension'],
  	extensions: {
  		extension: new MetaEditorExtension()
  	}
  });