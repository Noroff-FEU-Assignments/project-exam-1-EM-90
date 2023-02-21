const querystring = document.location.search;
const parameters = new URLSearchParams(querystring);
const id = parameters.get("id");
console.log(id);

const specificPostUrl = `https://emdevelopment.no/Project-exam-1/wp-json/wp/v2/posts/${id}?_embed`;
const specificPostContainer = document.querySelector(".specific-post");

async function GetSpecificPost() {
  const response = await fetch(specificPostUrl);

  const result = await response.json();

  const data = result;

  AddSpecificPost(data);
}

function AddSpecificPost(data) {
  specificPostContainer.innerHTML = "";
  specificPostContainer.innerHTML += `<div class="post-wraper">
                           <img src="${data._embedded["wp:featuredmedia"][0].source_url}" class="specific-image">
                           <p>${data.content.rendered}</p>
                         </div>`;
}

GetSpecificPost();
