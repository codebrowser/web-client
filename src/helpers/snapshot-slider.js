codebrowser.helper.SnapshotSlider = function(currentIndex, snapshotCount, onChangeCallback) {

    var sliderSettings = {
        'min' : 1,
        'max' : snapshotCount,
        'value' : currentIndex + 1,
        'step' : 1,
        'orientation' : 'horizontal',
        'tooltip' : 'show'
    };

    this.$html = $('<div class="row">');
    this.$sliderEl = $('<input class="span12" type="text" />');
    this.$html.append(this.$sliderEl);

    this.rendered = function() {

        this.$sliderEl.slider(sliderSettings).on('slideStop', function(e) {

            onChangeCallback(e.value - 1);
        });

        // force slider to full width
        this.$html.find('.slider').css('width', '100%');
    };
};