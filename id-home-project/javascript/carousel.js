const apiUrl = "https://emdevelopment.no/Project-exam-1/wp-json/wp/v2/posts";
const container = document.querySelector(".blog-post-container");
let blogPostList = "";

async function fetchApi() {
  const response = await fetch(apiUrl);
  const result = response.json();
  const data = await result;

  console.log(data);

  for (let i = 0; i < array.length; i++) {
    blogPostList += `
                    <div class="post-block">
                     <h2 class="post-title">${post.title.rendered}</h2>
                     <p class="post-text">${post.excerpt.rendered}</p>
                    </div>
                   `;

    container.innerHTML = blogPostList;
  }
}

fetchApi();
