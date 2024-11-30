function commentsData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => displayPosts(data))
}
commentsData();


const displayPosts = (data) =>{
    const gridPost = document.getElementById("comments");

    data.forEach((comments) => {
        const div = document.createElement("div")
        div.classList.add("class-name")
        div.innerHTML = `
           

            <div class="card g-4 shadow-lg p-3 mb-5 bg-body rounded border border-warning " style="width: 20rem;">
                <img src="image/77.jpg" class="card-img-top" alt="...">
                     <div class="card-body p-3 mb-2 bg-info-subtle text-info-emphasis">
                         <h5 class="card-title">Card title</h5>
                         <p class="card-text text-primary">${comments.name}</p>
    
                        <p>${comments.email}</p>

                        <a href="#" class="btn btn-dark">Go somewhere</a>
                    </div>
            </div>
        
        `;

        gridPost.appendChild(div);
    })


}