const querystring = document.location.search;
const parameters = new URLSearchParams(querystring);
const id = parameters.get("id");
console.log(id);

const spesificPostUrl = `https://emdevelopment.no/Project-exam-1/wp-json/wp/v2/posts/${id}?_embed`;
const spesificPostContainer = document.querySelector(".spesific-post");

async function GetSpesificPost() {
  const response = await fetch(spesificPostUrl);

  const result = await response.json();

  const data = result;

  AddSpesificPost(data);
}

GetSpesificPost();

function AddSpesificPost(data) {
  spesificPostContainer.innerHTML += `<div class="post-wraper">
                           <img src="${data._embedded["wp:featuredmedia"][0].source_url}" class="spesific-image">
                           <p>${data.content.rendered}</p>
                         </div>`;
}
