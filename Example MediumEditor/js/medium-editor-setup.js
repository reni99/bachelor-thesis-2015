        function MetaEditorExtension() {
          this.parent = true;
          this.button = document.createElement('button');
          this.button.className = 'medium-editor-action';
          this.button.innerText = 'Meta data';
          this.button.onclick = this.onClick.bind(this);
        }

        MetaEditorExtension.prototype.getButton = function() {
          return this.button;
        };

        var view = new MetaEditorView();
        
        MetaEditorExtension.prototype.onClick = function() {
          view.toggle();
          var presenter = new MetaEditorPresenter(view);
        };

        var editor = new MediumEditor('.editable', {
        	buttons: ['extension'],
        	extensions: {
        		extension: new MetaEditorExtension()
        	}
        });