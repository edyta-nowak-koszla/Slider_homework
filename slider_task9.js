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

    let bannerDivs = document.getElementsByTagName('div');
    
    const clickButtonRight = document.querySelector('#nextbutton');
    const clickButtonLeft = document.querySelector('#beforebutton');

    let visibleNowPictureIndex = 0;
    let toBeVisiblePictureIndex =1;
    clickButtonLeft.setAttribute("disabled",""); 
    
    function hideDivs(leftRight) {
        let i;
        if (visibleNowPictureIndex>=bannerDivs.length){
            visibleNowPictureIndex=0
        }
        for (i = 0; i < bannerDivs.length; i++) {
            if(!(bannerDivs[i].hasAttribute("hidden"))){
                if(leftRight===-1){
                    visibleNowPictureIndex=i-1;
                }else if (leftRight===0){
                    visibleNowPictureIndex=i+1;
                } else {
                    visibleNowPictureIndex=leftRight-1;
                }
                
                bannerDivs[i].setAttribute("hidden",""); 
            }
         }

        bannerDivs[visibleNowPictureIndex].removeAttribute("hidden");

        if (visibleNowPictureIndex<=0) {
              clickButtonLeft.setAttribute("disabled","");  
        } else {
            clickButtonLeft.removeAttribute("disabled");  
        }
        if (visibleNowPictureIndex>= bannerDivs.length-1) {
            clickButtonRight.setAttribute("disabled","");  
        }else{
            clickButtonRight.removeAttribute("disabled");  
        }
    }
    let setIntervalImg = setInterval(setImgs, 3000);
    
    function setImgs() {
        toBeVisiblePictureIndex=toBeVisiblePictureIndex+1;

        if(toBeVisiblePictureIndex>=bannerDivs.length+1){
            toBeVisiblePictureIndex=1;
        };
        hideDivs(toBeVisiblePictureIndex);
    } 

    clickButtonRight.addEventListener('click', (x) => {
        hideDivs(0);
    })
    clickButtonLeft.addEventListener('click', () => {
        hideDivs(-1);
        });

    const imageView1 = document.querySelector('#img1');
    imageView1.addEventListener('click', (x) => {
    hideDivs(x.target.innerText);
    })

    const imageView2 = document.querySelector('#img2');
    imageView2.addEventListener('click', (x) => {
    hideDivs(x.target.innerText);
    })

    const imageView3 = document.querySelector('#img3');
    imageView3.addEventListener('click', (x) => {
    hideDivs(x.target.innerText);
    })

    const imageView4 = document.querySelector('#img4');
    imageView4.addEventListener('click', (x) => {
    hideDivs(x.target.innerText);
    })

    const imageView5 = document.querySelector('#img5');
    imageView5.addEventListener('click', (x) => {
    hideDivs(x.target.innerText);
    })
    