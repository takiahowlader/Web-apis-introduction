function usersData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayPosts(data))
}
usersData();


const displayPosts = (data) =>{
    const gridPost = document.getElementById("users");

    data.forEach((users) => {
        const div = document.createElement("div")
        div.classList.add("class-name")
        div.innerHTML = `
           

            <div class="card g-4 shadow-lg p-3 mb-5 bg-body rounded border border-warning " style="width: 20rem;">
                <img src="image/1000050526.jpg" class="card-img-top" alt="...">
                     <div class="card-body p-3 mb-2 bg-danger-subtle text-info-emphasis">
                         
                         <p class="card-text text-primary">${users.username}</p>
    
                        <p>${users.email}</p>
                        

                        <a href="#" class="btn btn-dark">Go somewhere</a>
                    </div>
            </div>
        
        `;

        gridPost.appendChild(div);
    })


}