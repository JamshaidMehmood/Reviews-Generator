let myReviews = [
    {
        image: "picture1.jpg",
        authorName: "JONES SMITH",
        profession: "Architectural Design",
        biography: "Wikipedia's articles provide links designed to guide the user to related pages with additional information Wikipedia is written collaboratively by largely anonymous volunteers."

    },
    {
        image: "picture2.jpg",
        authorName: "JOFER JANES",
        profession: "Software Designer",
        biography: "Anyone with Internet access can write and make changes to Wikipedia articles, except in limited cases where editing is restricted to prevent further disruption or vandalism.Since its creation on January 15, 2001, Wikipedia has grown into the world's largest reference website, attracting 1.7 billion unique-device visitors monthly as of November 2021. "

    },
    {
        image: "picture4.jpg",
        authorName: "JAMSHAID MEHOOD",
        profession: "Analysis Expert",
        biography: " It currently has more than fifty-eight million articles in more than 300 languages, including 6,454,415 articles in English with 133,078 active contributors in the past month. The fundamental principles by which Wikipedia operates are summarized in the five pillars. The Wikipedia community has developed many policies and guidelines to improve the"
    }
    
]

let ima = document.getElementById("person-image");
let nam = document.getElementById("author-name");
let prof = document.getElementById("profession");
let cont = document.getElementById("biography");

let prevButton = document.querySelector(".backward-button");
let nextButton = document.querySelector(".forward-button");
let randomButton = document.querySelector(".surprise-button");

let currentIndex = 0;
window.addEventListener("DOMContentLoaded", function () {

    //  ima.src = myReviews[currentIndex].image;
    //  nam.innerHTML = myReviews[currentIndex].authorName;
    //  prof.innerHTML = myReviews[currentIndex].profession;
    //  cont.innerHTML = myReviews[currentIndex].biography;
    presentPerson(currentIndex);
    //console.log("hlo");
});

function presentPerson(index) {

    //let myItem=myReviews[currentIndex];
    ima.src = myReviews[index].image;
    nam.innerHTML = myReviews[index].authorName;
    prof.innerHTML = myReviews[index].profession;
    cont.innerHTML = myReviews[index].biography;
}

prevButton.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) 
    {
        currentIndex = myReviews.length - 1;
    }
    presentPerson(currentIndex);
});

nextButton.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >(myReviews.length-1)) 
    {
        currentIndex = 0;
    }
    presentPerson(currentIndex);
});

randomButton.addEventListener("click", function () {
    currentIndex=Math.floor(Math.random()*myReviews.length);
    presentPerson(currentIndex);
});
