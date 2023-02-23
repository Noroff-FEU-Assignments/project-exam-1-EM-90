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
  // i have tried importing the Initialize function from initalize.js. but i cant get it to work
  // This is unfortunate, because it kind of defeats some of the purposse with functions.
  //My plan was to rename the OnMounted function to initialize and pass in the other functions, so they could load in the right order.
  // I get some errors in the consol, and i think it is because of the load order (AddSpecificPost is called inside the GetSpecificPost, before AddSpecificPost has benn loaded)

  //Initialize(GetSpecificPost, AddSpecificPost, data);
  const specificImage = specificPostContainer.querySelector(".specific-image");

  specificImage.addEventListener("click", () => {
    const modalContent = document.createElement("img");
    modalContent.src = specificImage.src;
    console.log(specificImage);

    //Moddal container
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-container");
    modalContainer.appendChild(modalContent);

    // Adding the modal to the page
    document.body.appendChild(modalContainer);

    //Adding eventlistener to make the modal close when clicking on the outside of the modal
    modalContainer.addEventListener("click", (event) => {
      if (!modalContent.contains(event.target)) {
        document.body.removeChild(modalContainer);
      }
    });
  });
}

GetSpecificPost();
