var slider = tns({
    container: '.gameSlider__slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    mouseDrag: true,
    edgePadding: 23,
    controls: false,
    controlsContainer: ".gameSlider__btn",
    center: true,
    nav: true,
    navContainer: ".gameSlider__nav",
    autoplayButtonOutput: false,
    prevButton: ".gamePrev",
    nextButton: ".gameNext",
    loop: true,
    responsive: {
      900: {
        controls: true,
        edgePadding: 390,
      }
    }
  });

  slider.events.on('indexChanged', function () {
    const allSlides = document.querySelectorAll('.gameSlider__items');
    const activeIndex = slider.getInfo().index;
    allSlides.forEach((slide, index) => {
      if (index === activeIndex) {
        slide.classList.add('single-active');
      } else {
        slide.classList.remove('single-active');
      }
    });
  });