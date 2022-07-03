const containerElement = document.getElementById("slider");

fetch ("./photos.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {

        let listImg = "";
        let imgAuthorCaption = "";

        json
        .map(function(visIMGs) {
            console.log(visIMGs.url);
            let divTag = document.createElement("div");

            listImg = document.createElement("img");
            listImg.setAttribute("src", visIMGs.url); 
            divTag.appendChild(listImg);

            imgAuthorCaption = document.createElement("p");
            imgAuthorCaption.innerHTML = visIMGs.author + " - " + visIMGs.caption;
            divTag.appendChild(imgAuthorCaption);
            divTag.setAttribute("hidden",""); 
            containerElement.appendChild(divTag);
        })
        return containerElement;
    })
    .then(function(containerElement){
        const unhideDiv = containerElement.getElementsByTagName("div")[0];
        unhideDiv.removeAttribute("hidden");

    });

    const bannerDivs = document.querySelectorAll('div');
    const clickButton = document.querySelector('button');


    let slideIndex = 0;

    function hideDivs(n) {
        let i;
        let bannerDivs = document.querySelectorAll('div');

        for (i = 0; i < bannerDivs.length; i++) {
            if(!(bannerDivs[i].hasAttribute("hidden"))){
                slideIndex=i+1;
                bannerDivs[i].setAttribute("hidden","");  
            }
         }
         if (slideIndex >= bannerDivs.length) {slideIndex = 0}
         bannerDivs[slideIndex].removeAttribute("hidden");
      }

    clickButton.addEventListener('click', () => {
        hideDivs(slideIndex);
    });