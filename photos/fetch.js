function photosData(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => displayPosts(data))
}
photosData();


const displayPosts = (data) =>{
    const gridPost = document.getElementById("photos");

    data.forEach((photos) => {
        const div = document.createElement("div")
        div.classList.add("class-name")
        div.innerHTML = `
           

            <div class="card g-4 shadow-lg p-3 mb-5 bg-body rounded border border-warning " style="width: 20rem;">
                <img src="image/1000032786.jpg" class="card-img-top" alt="...">
                     <div class="card-body p-3 mb-2 bg-danger-subtle text-info-emphasis">
                         <h5 class="card-title"></h5>
                         <p class="card-text text-primary">${photos.title}</p>
    
                        <p>${photos.url}</p>

                        <a href="#" class="btn btn-dark">Go somewhere</a>
                    </div>
            </div>
        
        `;

        gridPost.appendChild(div);
    })


}