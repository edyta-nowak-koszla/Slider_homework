const containerElement = document.getElementById("slider");

fetch ("./photos.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {

        let listImg = "";//document.createElement("img");
        let authorImg = "";//document.createElement("p");
        let descriptionImg = "";// document.createElement("p");
        console.log(json);

        json
        .map(function(visIMGs) {
            console.log(visIMGs.url);
            listImg = document.createElement("img");
            listImg.setAttribute("src", visIMGs.url); 
            containerElement.appendChild(listImg);

            authorImg = document.createElement("p");
            authorImg.innerHTML = visIMGs.author;
            containerElement.appendChild(authorImg);

            descriptionImg = document.createElement("p");
            descriptionImg.innerHTML = visIMGs.caption;
            containerElement.appendChild(descriptionImg);
        })
    });
