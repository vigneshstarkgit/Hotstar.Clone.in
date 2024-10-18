let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        " Evans said a potential Captain America return “doesn't quite feel right” at the moment. However, Evans did admit that telling more Captain America stories is appealing to him, so never say never.",
      image: "Images/slider 2.PNG"
    },
    {
      name: "loki",
      des:
        "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers",
  
      image: "Images/slider 1.PNG"
    },
    {
      name: "wanda vision",
      des:
        "It follows Wanda Maximoff and Vision as they live an idyllic suburban life in the town of Westview, New Jersey, until their reality starts moving through different decades of sitcom homages and television tropes.",
      image: "Images/slider 3.PNG"
    },
    {
      name: "raya and the last dragon",
      des:
        "Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people.",
      image: "Images/slider 4.PNG"
    },
    {
      name: "luca",
      des:
        "Luca, a sea monster, befriends Alberto, another one of his kind who takes him on a land adventure. He experiences an exciting summer while keeping his parents in the dark",
      image: "Images/slider 5.PNG"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  let slideIndex = 0;
  const createslide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
    //create a DOM Elements
    let slide = document.createElement('div');
  
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
  
    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    //setting elements classnames
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${ 100 * (sliders.length - 2)}% - ${ 30 * (sliders.length - 2)}px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createslide();
  }
  
  setInterval(() => {
    createslide();
  }, 3000);
  
  //video cards

  const videocards = [...document.querySelectorAll(".video-card")];
  videocards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave",() => {
        let video = item.children[1];
        video.pause();
    });
  });


// card sliders
let cardcontainer = [...document.querySelectorAll('.card-container')];
let prebtns = [...document.querySelectorAll('.pre-btn')];
let nxtbtns = [...document.querySelectorAll('.nxt-btn')];

cardcontainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtbtns[i].addEventListener('click',() => {
    item.scrollLeft += containerWidth - 200;
  })
  prebtns[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth + 200;
  })
})
