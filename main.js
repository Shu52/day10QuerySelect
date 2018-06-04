// Use JavaScript to obtain a reference to the first article header and change its text with textContent property to "Welcome the {insert your name here} blog"

const artHead = document.querySelector(".article__header").textContent = "Welcome the Shu blog"

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to "article__header important".

const artHeadEl =document.querySelectorAll(".article__header");
for(let i= 0;i< artHeadEl.length;i++){
    artHeadEl[i].classList.add("important");
    console.log(artHeadEl[i].classList);
    
}
