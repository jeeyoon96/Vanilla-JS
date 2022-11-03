const hello = document.querySelector(".hello h1"); 
const hellos = document.querySelectorAll(".hello h1");
console.log(hellos);
hello.innerText = "Click Me!";

//
const title = document.querySelector('.hello h1');
function handleMouseEnter(){
    title.innerText = 'mouse is here';
}
function handleMouseLeave(){
    title.innerText = 'mouse is gone';
}
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);


//
function handleWindowResize(){
    document.body.style.backgroundColor = 'tomato';
}
function handleWindowCopy(){
    alert('copier!');
}
function handleWindowOffline(){
    alert("No WIFI");
}
function handleWindowOnline(){
    alert("ALL GOOOD");
}

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);

/* 
document.body, document.head, document.title : 가능
document.div 같은거는 안됨. 나머지 element 들은 querySelector 등으로 찾아와야 한다.
*/


//
const h1 = document.querySelector('.hello h1');
function handleTitleClick(){
    h1.classList.toggle("active");

    /*
    const clickedClass = "active"
    if (h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else{
        h1.classList.add(clickedClass);
    }
    */

    /* 
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor == 'blue'){
        newColor = 'tomato';
    } else{
        newColor = 'blue';
    }
    h1.style.color = newColor;
    */
}
h1.addEventListener("click", handleTitleClick);

