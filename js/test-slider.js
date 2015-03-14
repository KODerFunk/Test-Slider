var slider = {
  slides: ['image/img-1.png', 'image/img-2.png', 'image/img-1.png', 'image/img-2.png', 'image/img-1.png', 'image/img-2.png'],
  frame: 0,
  set: function(image) {
    document.getElementById('src').style.backgroundImage = 'url('+image+')';
  },
  init: function() {
      this.set(this.slides[this.frame]);
  },
  left: function() {
    this.frame--;
    if(this.frame < 0) this.frame = this.slides.length-1;
    this.set(this.slides[this.frame]);
  },
  right: function() {
    this.frame++;
    if(this.frame == this.slides.length) this.frame = 0;
    this.set(this.slides[this.frame]);
  }
};
window.onload = function() {
  slider.init();
};