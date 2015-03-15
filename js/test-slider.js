var slider = {
  slides: [/*'image/img-1.jpg', 'image/img-2.jpg', 'image/img-3.jpg', 'image/img-4.jpg', 'image/img-5.jpg', 'image/img-6.jpg'*/
    {
      image: 'image/img-1.jpg',
      color: '40,112,196,1',
      paginationNumber: '0'
    },
    {
      image: 'image/img-2.jpg',
      color: '75,201,229,1',
      paginationNumber: '1'
    },
    {
      image: 'image/img-3.jpg',
      color: '71,182,22,1',
      paginationNumber: '2'
    },
    {
      image: 'image/img-4.jpg',
      color: '255,125,0,1',
      paginationNumber: '3'
    },
    {
      image: 'image/img-5.jpg',
      color: '227,48,166,1',
      paginationNumber: '4'
    },
    {
      image: 'image/img-6.jpg',
      color: '40,112,196,1',
      paginationNumber: '5'
    }
  ],
  frame: 0,
  set: function(image, color) {
    document.getElementById('src').style.backgroundImage = 'url('+image+')';
    document.getElementById('pag'+this.frame).classList.add('active');
    document.getElementsByClassName('arrow-btn right:before').style.backgroundColor = 'rgba('+color+')';
  },
  init: function() {
    this.set(this.slides[this.frame].image);
    this.set(this.slides[this.frame].color);
  },
  left: function() {
    this.frame--;
    if(this.frame < 0) this.frame = this.slides.length-1;
    this.set(this.slides[this.frame].image);
    this.set(this.slides[this.frame].color);
  },
  right: function() {
    this.frame++;
    if(this.frame == this.slides.length) this.frame = 0;
    this.set(this.slides[this.frame].image);
    this.set(this.slides[this.frame].color);
  }
};
window.onload = function() {
  slider.init();
};