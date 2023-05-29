class Slider {
    constructor(boxId, boxWidth, boxHeight, images, _duration) {
        this._duration = _duration;
        this._box = $(`#${boxId}`);
        this._boxWidth = boxWidth;
        this._height = boxHeight;
        this._images = images;
        this._box.css('width', this._boxWidth);
        this._box.css('height', this._height);
        this._box.show(this._duration);
        this._slideId = 0;
        console.log('Constructor -> OK');
    }

    _loadImage(index, path) {
        $('<img>', {
            id: index + 1,
            src: path,
            class: 'slide',
        }).appendTo(this._box)
          .show(this._duration);
    }

    loadCollection(index, collection) {
        setTimeout(() => {
            if (index > collection.length - 1) {
                $('#left-arrow').fadeIn(this._duration * 2);
                $('#right-arrow').fadeIn(this._duration * 2);
                return;
            } else {
                this._slideId = index + 1;
                this._loadImage(index, collection[index++]);
                $('progress').val(index);
                this._pauseOnSlide(this._slideId);
                this.loadCollection(index, collection);
            }
        }, this._duration);
    }

    _pauseOnSlide(slideId) {
        const slideElement = $(`#${slideId}`);
        slideElement.hover(
            () => {
                this.pauseSlideshow();
            },
            () => {
                this.startSlideshow();
            }
        );
    }

    activateArrowHover() {
        $('.arrow').hover(
            function () {
                $(this).css('transform', 'rotate(360deg)');
            },
            function () {
                $(this).css('transform', 'rotate(0deg)');
            }
        );
    }

    activateLeftArrow() {
        $('#pause-button').on('click', () => {
            console.log('pauseButton -> Click!');
            this.pauseSlideshow();
            $('#pause-button').css('background-color', 'red');
        });
    }

    activateRightArrow() {
        $('#start-button').on('click', () => {
            console.log('startButton -> Click!');
            this.loadCollection(0, this._images);
            $('#start-button').css('background-color', 'green');
        });
    }

    pauseSlideshow() {
        console.log('Slideshow paused');
        clearTimeout(this._timeout);
    }

    startSlideshow() {
        console.log('Slideshow started');
        this.loadCollection(this._slideId, this._images);
    }
}
