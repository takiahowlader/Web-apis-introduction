function postsData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}
postsData();


const displayPosts = (data) =>{
    const gridPost = document.getElementById("posts");

    data.forEach((post) => {
        const div = document.createElement("div")
        div.classList.add("class-name")
        div.innerHTML = `
           

            <div class="card g-4 shadow-lg p-3 mb-5 bg-body rounded border border-warning " style="width: 20rem;">
                <img src="image/1000031125.jpg" class="card-img-top" alt="...">
                     <div class="card-body">
                         <h5 class="card-title">Card title</h5>
                         <p class="card-text text-info">${post.title}</p>
    
                        <p>${post.body}</p>

                        <a href="#" class="btn btn-warning">Go somewhere</a>
                    </div>
            </div>
        
        `;

        gridPost.appendChild(div);
    })


}