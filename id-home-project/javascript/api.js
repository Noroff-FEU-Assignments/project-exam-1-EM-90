const apiUrl =
  "https://emdevelopment.no/Project-exam-1/wp-json/wp/v2/posts?_embed";
const container = document.querySelector(".blog-post-container");
const postButton = document.querySelector(".post-button");
let amountOfPages = 10;
let blogPostList = "";

async function GetBlogPosts(amountOfPages) {
  const response = await fetch(`${apiUrl}&per_page=${amountOfPages}`);
  const result = await response.json();
  const data = await result;
  return data;
}

const AddBlogPostToHtml = (data) => {
  data.forEach((post) => {
    blogPostList += `
                    <div class="post-block">
                    <img src="${post._embedded["wp:featuredmedia"][0].source_url}" class="featured-images">
                     <h2 class="post-title">${post.title.rendered}</h2>
                     <p class="post-text">${post.excerpt.rendered}</p>
                    </div>
                   `;
    container.innerHTML = blogPostList;
    console.log(post);
  });
};

const OnMounted = async () => {
  const data = await GetBlogPosts(amountOfPages);
  AddBlogPostToHtml(data);
};

// initialise
OnMounted();

postButton.addEventListener("click", async () => {
  // return if amountOfPages of 20 allready has been fetched.
  if (amountOfPages >= 20) return;

  amountOfPages = 20;
  const data = await GetBlogPosts(amountOfPages);
  AddBlogPostToHtml(data);
});
