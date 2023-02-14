let featuredData = "";
let featuredContainer = document.querySelector(".featured-container");

async function GetFeaturedPosts() {
  const response = await fetch(
    "https://emdevelopment.no/Project-exam-1/wp-json/wp/v2/posts?_embed"
  );
  const results = await response.json();
  const data = await results;

  return data;
}

const AddFeaturedPosts = (data) => {
  for (let i = 0; i < 6; i++) {
    console.log(data[i]);
    featuredData += `       <a href="post-details" class="featured-block">
                              <div>
                               <img src="${data[i]._embedded["wp:featuredmedia"][0].source_url}" class="featured-images">
                               <h2 class="featured-title">${data[i].title.rendered}</h2>
                               <p class="featured-text">${data[i].excerpt.rendered}</p>
                              </div>
                            </a>
                             `;
    featuredContainer.innerHTML = featuredData;
  }
};

const OnMounted = async () => {
  const data = await GetFeaturedPosts();
  AddFeaturedPosts(data);
};
OnMounted();
