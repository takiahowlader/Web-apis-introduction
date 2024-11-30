function albumsData(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => displayPosts(data))
}
albumsData();


const displayPosts = (data) =>{
    const gridPost = document.getElementById("albums");

    data.forEach((albums) => {
        const div = document.createElement("div")
        div.classList.add("class-name")
        div.innerHTML = `
           

            <div class="card g-4 shadow-lg p-3 mb-5 bg-body rounded border border-warning " style="width: 15rem;">
                <img src="image/1000025994.jpg" class="card-img-top" alt="...">
                     <div class="card-body p-3 mb-2 bg-dark-subtle text-info-emphasis">
                         <h5 class="card-title"></h5>
                         <p class="card-text text-primary">${albums.title}</p>
    
                       

                        <a href="#" class="btn btn-info">Go somewhere</a>
                    </div>
            </div>
        
        `;

        gridPost.appendChild(div);
    })


}