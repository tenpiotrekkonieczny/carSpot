new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 50,
  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
    }
  
    
  });

  function toggleText() {
    let text = document.getElementById("words");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }


  function toggleText1() {
    let text1 = document.getElementById("words1");
    if (text1.style.display === "none") {
      text1.style.display = "block";
    } else {
      text1.style.display = "none";
    }
  }

  