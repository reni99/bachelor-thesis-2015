/*jslint browser: true*/
/*global $, jQuery, MetaEditorView, MetaEditorPresenter, MediumEditor*/

  function MetaEditorExtension() {
    "use strict";
    var view = new MetaEditorView();

    this.parent = true;
    this.button = document.createElement('button');
    this.button.className = 'medium-editor-action';
    this.button.innerText = 'Meta data';
    this.button.onclick = this.onClick.bind(this);
    
    this.getView = function(){
      return view;
    };

  }

  MetaEditorExtension.prototype.getButton = function() {
    "use strict";
    return this.button;
  };
  
  MetaEditorExtension.prototype.onClick = function() {
    "use strict";
    var view = this.getView(),
    presenter;
    view.toggle();
    presenter = new MetaEditorPresenter(view);
  };

  var editor = new MediumEditor('.editable', {
  	buttons: ['extension'],
  	extensions: {
  		extension: new MetaEditorExtension()
  	}
  });