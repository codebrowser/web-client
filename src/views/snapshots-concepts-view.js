codebrowser.view.SnapshotsConceptsView = Backbone.View.extend({

    id: 'snapshots-concepts-container',

    isActive: Utils._getLocalStorageValue('showConcepts', false) === 'true',

    initialize: function() {

        _.bindAll(this, 'render');

        this.paper = new Raphael(this.el, '100%', 200);
    },

    /* Render */

    render: function () {

        if (this.collection) {

            this.collection.sort();

            this.paper.clear();
            this._renderBarChart();
        }
    },

    toggle: function() {

        this.isActive = !this.isActive;

        // Store state
        localStorage.setItem('showTimeline', this.isActive);

        this.$el.slideToggle();

    },

    update: function (snapshot) {

        var options = {

            studentId : snapshot.get('studentId'),
            courseId : snapshot.get('courseId'),
            exerciseId : snapshot.get('exerciseId'),
            snapshotId : snapshot.get('id')

        };

        this.collection = new codebrowser.collection.ConceptCollection([], options);

        this.collection.fetch({

            success: this.render

        });
    },

    _renderBarChart: function () {

        var canvasHeight = this.paper.canvas.offsetHeight;

        var rowHeight = Math.min( Math.floor(canvasHeight / (this.collection.size() * 1.5)), 120);

        for (var i = 0; i < this.collection.size(); i++) {

            var concept = this.collection.at(i);

            var x = 0;
            var y = i * 1.5 * rowHeight;
            var w = this._scaleToCanvasWidth( concept.get('size') );
            var h = rowHeight;

            this._drawBar(concept, x, y, w, h);
        }
    },

    _drawBar: function (concept, x, y, w, h) {

        var bar = this.paper.rect(x, y, 0, h);
        $(bar.node).attr('class', 'concept-bar');

        bar.animate({

            width: w
        }, 250);

        var textCssClass = 'concept-bar-text';

        var labelText = concept.get('name');
        var label = this.paper.text(x + (this._getTextWidth(labelText, textCssClass) / 2), y + ( h / 2), labelText);
        $(label.node).attr('class', textCssClass);

        var sizeText = concept.get('size');
        var size = this.paper.text(x + w + (this._getTextWidth(sizeText, textCssClass) / 2), y + (h / 2), sizeText);
        $(size.node).attr('class', textCssClass);
    },

    _getTextWidth: function(text, cssClass) {

        var textTemp = this.paper.text(0, 0, text);
        $(textTemp.node).attr('class', cssClass);

        var textWidth = textTemp.getBBox().width;

        textTemp.remove();

        return textWidth;
    },

    _scaleToCanvasWidth : function(x) {

        var widthMax = this.paper.canvas.offsetWidth - 25;
        var widthMin = 100;

        var sizeMax = this.collection.getMaxSize();
        var sizeMin = 0;

        return ( ((widthMax - widthMin) * (x - sizeMin)) / (sizeMax - sizeMin) ) + widthMin;
    }
});
