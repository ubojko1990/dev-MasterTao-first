const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      enabled: false,
    },
    
    breakpoints: {
      // when window width is >= 992px
      992: {
        navigation: {
          enabled: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      },

      }
         
    },

  });

  const name = "Toyota"
  const lastName = "Aygo"
  const old ="2005"
  
  console.log (name+ ""+ lastName + "" + old);


  const user = {
    name: "Macbook",
    old: "2020", 
    series: {
      Air: {
        model: '13.6',
      },
      Pro: {
        model: '14'
      }

    }
  }
  console.log(user.series.Air.model);


  const typefile = document.querySelectorAll('.custom-file')

  typefile.forEach(item =>{
    item.addEventListener ('change', () =>{
      const fileName = item.closest('.control-box').querySelector('.file-name')
      fileName.innerHTML = item.files[0].name;
    })
  })

