let featuredData = "";
let featuredContainer = document.querySelector(".slider");
const carousel = document.querySelector(".carousel-container");
const nextButton = document.querySelector(".right-handle");
const previousButton = document.querySelector(".left-handle");
let cards = document.querySelectorAll(".featured-block");

async function GetFeaturedPosts() {
  const response = await fetch(
    "https://emdevelopment.no/Project-exam-1/wp-json/wp/v2/posts?_embed"
  );
  const results = await response.json();
  const data = await results;

  return data;
}

const AddFeaturedPosts = (data) => {
  for (let i = 0; i < 8; i++) {
    console.log(data[i]);
    featuredData += `       <a href="spesific-post.html?id=" class="featured-block">
                              <div>
                               <img src="${data[i]._embedded["wp:featuredmedia"][0].source_url}" class="featured-images">
                               <h2 class="featured-title">${data[i].title.rendered}</h2>
                               <p class="featured-text">${data[i].excerpt.rendered}</p>
                              </div>
                            </a>
                             `;
  }
  featuredContainer.innerHTML = featuredData;
  cards = document.querySelectorAll(".featured-block");
};

function Carousel() {
  const cardWidth = cards[0].offsetWidth;
  let slideIndex = 0;

  function displayCards() {
    featuredContainer.style.transform = `translateX(-${
      slideIndex * cardWidth
    }px)`;
  }

  nextButton.addEventListener("click", () => {
    slideIndex = (slideIndex + 4) % cards.length;
    displayCards();
  });

  previousButton.addEventListener("click", () => {
    slideIndex = (slideIndex - 4 + cards.length) % cards.length;
    displayCards();
  });

  window.addEventListener("resize", displayCards);
}

const OnMounted = async () => {
  const data = await GetFeaturedPosts();
  AddFeaturedPosts(data);
  Carousel();
};

OnMounted();

// OLD code without

/*function Carousel() {
  const cardWidth = cards[0].offsetWidth;
  let slideIndex = 0;

  function displayCards() {
    featuredContainer.style.transform = `translateX(-${
      slideIndex * cardWidth
    }px)`;
  }

  nextButton.addEventListener("click", () => {
    slideIndex += 4;
    if (slideIndex > cards.length - 4) {
      slideIndex = 0;
      console.log(slideIndex);
    }
    displayCards();
  });

  previousButton.addEventListener("click", () => {
    slideIndex -= 4;
    if (slideIndex < 0) {
      slideIndex = cards.length - 4;
    }
    displayCards();
  });

  window.addEventListener("resize", (cardWidth) => {
    displayCards();
  });
}*/
