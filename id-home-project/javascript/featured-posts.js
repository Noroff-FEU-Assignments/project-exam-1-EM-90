async function GetFeaturedPosts(){
    const response = await fetch("https://emdevelopment.no/Project-exam-1/wp-json/wp/v2/posts?");
    const results = await response.json();
    const data = await results; 

    console.log (data);

    for (let i = 0; i < data.length; i++){
        if (data.length <= 6) return;
        console.log (data[i]);
    }

   
}

GetFeaturedPosts();

