class Controller {
  constructor() {
    this._nav = $('section > nav');
    this._gallery = $('#gallery');
    this._logo = $('#logo-img');
    this._buttons = $('.nav-img');
    this._wheels = $('#vh');
    console.log('Controller -> OK');
  }

  loadImages(dir, prefix) {
    this._nav.hide(1000);
    this._gallery.show(1000);
    // ->
    this._gallery.html(`
        <img id="back" src="assets/icons/arrow_left.ico" alt="..." 
        title="Повернення до панелі навігації"> 
         <br>`)
    // ->
    for (let i = 1; i <= 5; i++) {
      $('<img>', {
        src: `assets/img/${dir}/${prefix}${i}.jpeg`,
        class: 'mini'
      }).appendTo(this._gallery);
    }
  }

  dispatch(logoUrl) {
    if (logoUrl === 'assets/logo/car.jpeg') {
      this.loadImages('cars', 'c');
    } else if (logoUrl === 'assets/logo/moto.png') {
      this.loadImages('motorcycles', 'm');
    } else if (logoUrl === 'assets/logo/yacht.png') {
      this.loadImages('yachts', 'y');
    }
  }

  activateNav() {
    console.log('activateNav -> Ok');
    this._buttons.click((event) => {
      let url = $(event.target).attr('src');
      console.log(`logoUrl -> ${url}`);
      this.dispatch(url);
    });

  }
  activateBack() {
    $('#gallery').on('click', '#back', () => {
      console.log('back -> click');
      this._gallery.hide(1000);
      this._nav.show(1000);
      //*
      this._logo.animate({ 'width': '0%' }, 1);
      this._logo.attr('src', 'assets/logo/default.jpeg');
      this._logo.animate({ 'width': '700px' }, 500);
    });
  }

  activateFolding() {
    $('#gallery').on('click', '.mini', (event) => {
      console.log('fold -> click');
      let foldUrl = $(event.target).attr('src');
      console.log(`foldUrl -> ${foldUrl}`);

      this._logo.animate({ 'width': '0%', 'opacity': 0 }, 500, () => {
        this._logo.attr('src', foldUrl);
        this._logo.animate({ 'width': '100%', 'opacity': 1 }, 1000);
      });
    });
  }



  activateDamping() {
    this._buttons.hover(
      function () {
        $(this).fadeOut(1000);
      },
      function () {
        $(this).fadeIn(1000);
      }
    );
  }

  activateRotate() {
    $('.rotate-img').hover(
      function () {
        $(this).css('transform', 'rotate(360deg)');
      },
      function () {
        $(this).css('transform', 'rotate(0deg)');
      }
    );
  }
  

}

