let btnNext = document.getElementById("next");   //button next
let btnPrivuse = document.getElementById("privuse"); //button privuse
let image = document.querySelectorAll("img");   //images 
let control = document.querySelector(".control");  //the parent element of circle
let count = 0;    //counter to change value 
let ul = document.createElement("ul");  //create ul list
ul.classList.add("cricles");    //add class to ul list
//for loop to create li elements in ul list 
for (let i = 0; i < image.length; i++) {
    let li = document.createElement(`li`);
    ul.appendChild(li);
}
control.appendChild(ul);   //add ul in parent

let list = document.querySelectorAll("li");   // variable to  get li elements

method();    //call main function to enishlize class to image and remove it again

function method() {
    removeImageActive();
    removeCircleActive();
    image[count].classList.add("active");
    list[count].classList.add("active");
}

//function to remove active class from image
function removeImageActive() {
    image.forEach((e) => {
        e.classList.remove("active");
    });

    //add disabled class to privuse button
    if (count == 0) {
        btnPrivuse.classList.add("disabled");
    } else {
        btnPrivuse.classList.remove("disabled");
    }
    //add disabled class to next button
    if (count == image.length - 1) {
        btnNext.classList.add("disabled");
    } else {
        btnNext.classList.remove("disabled");
    }
}


//function to remove active class from cricle

function removeCircleActive() {
    list.forEach((e) => {
        e.classList.remove("active");
    });
}
// the action of privuse button
btnPrivuse.onclick = () => {
    if (btnPrivuse.classList.contains(`disabled`)) {
    } else {
        count--;
        method();
    }
};
// the action of next button

btnNext.onclick = () => {
    if (btnNext.classList.contains(`disabled`)) {
    } else {
        count++;
        method();
    }
};
//action of cricle if you clicked it 
list.forEach((e, i) => {
    e.onclick = () => {
        removeImageActive();
        removeCircleActive();
        image[i].classList.add("active");
        list[i].classList.add("active");
    };
});


//if you change image by using time
/*
 setInterval(() => {
    count++;
    method();
    if (count == image.length - 1) {
      count = 0;
    }

 }, 10000);

 */
