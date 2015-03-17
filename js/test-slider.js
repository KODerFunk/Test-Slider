var slider = {
  slides: [/*'image/img-1.jpg', 'image/img-2.jpg', 'image/img-3.jpg', 'image/img-4.jpg', 'image/img-5.jpg', 'image/img-6.jpg'*/
    {
      image: 'image/img-1.jpg',
      paginationNumber: '0'
    },
    {
      image: 'image/img-2.jpg',
      paginationNumber: '1'
    },
    {
      image: 'image/img-3.jpg',
      paginationNumber: '2'
    },
    {
      image: 'image/img-4.jpg',
      paginationNumber: '3'
    },
    {
      image: 'image/img-5.jpg',
      paginationNumber: '4'
    },
    {
      image: 'image/img-6.jpg',
      paginationNumber: '5'
    }
  ],
  frame: 0,
  set: function(image) {
    document.getElementById('src').style.backgroundImage = 'url('+image+')';
    document.getElementById('pag'+this.frame).classList.add('active');
  },
  init: function() {
    this.set(this.slides[this.frame].image);
  },
  left: function() {
    this.frame--;
    if(this.frame < 0) this.frame = this.slides.length-1;
    this.set(this.slides[this.frame].image);
  },
  right: function() {
    this.frame++;
    if(this.frame == this.slides.length) this.frame = 0;
    this.set(this.slides[this.frame].image);
  }
};
window.onload = function() {
  slider.init();
};
