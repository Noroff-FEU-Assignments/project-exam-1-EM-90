const apiUrl =
  "https://emdevelopment.no/Project-exam-1/wp-json/wp/v2/posts?_embed";
const container = document.querySelector(".blog-post-container");
const postButton = document.querySelector(".post-button");
let amountOfPosts = 10;
let blogPostList = "";
let fetchedPostIds = [];

async function GetBlogPosts(amountOfPosts) {
  const response = await fetch(`${apiUrl}&per_page=${amountOfPosts}`);
  const result = await response.json();
  const data = await result;
  return data;
}

const AddBlogPostToHtml = (data) => {
  // filter method to get only new post to show
  const newPosts = data.filter((post) => !fetchedPostIds.includes(post.id));
  newPosts.forEach((post) => {
    fetchedPostIds.push(post.id);
    blogPostList += `
                   <a href="spesific-post.html?id=${post.id}" class="post-block">
                     <div>
                       <img src="${post._embedded["wp:featuredmedia"][0].source_url}" class="post-images">
                       <h2 class="post-title">${post.title.rendered}</h2>
                       <p class="post-text">${post.excerpt.rendered}</p>
                     </div>
                    </a>
                   `;
    container.innerHTML = blogPostList;
    console.log(post);
  });
};

const OnMounted = async () => {
  const data = await GetBlogPosts(amountOfPosts);
  AddBlogPostToHtml(data);
};

// initialise
OnMounted();

postButton.addEventListener("click", async () => {
  // return if amountOfPages of 20 allready has been fetched.
  if (amountOfPosts >= 20) return;

  amountOfPosts = 20;
  const data = await GetBlogPosts(amountOfPosts);
  AddBlogPostToHtml(data);
});

const carousel = document.querySelector(".carousel-container");
const nextButton = document.querySelector(".right-handel");
const previousButton = document.querySelector(".left-handel");
const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".featured-block");
console.log(cards);

let slideIndex = 0;

nextButton.addEventListener("click", () => {
  console.log("next button clicked");
  slideIndex += 4;
  displayCards();
});

previousButton.addEventListener("click", () => {
  console.log("previous button clicked");
  slideIndex -= 4;
  displayCards();
});

function displayCards() {
  if (slideIndex >= cards.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = Math.max(0, cards.length - 4);
  }

  cards.forEach((card) => {
    card.style.display = "none";
  });

  for (let i = slideIndex; i < slideIndex + 4 && i < cards.length; i++) {
    cards[i].style.display = "block";
  }
}
