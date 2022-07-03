const containerElement = document.getElementById("slider");

fetch ("./photos.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {

        let listImg = document.createElement("img");
        console.log(json);

        json
        .map(function(visIMGs) {
            console.log(visIMGs.url);
            listImg = document.createElement("img");
            listImg.setAttribute("src", visIMGs.url); 
            containerElement.appendChild(listImg);
        })
    });
