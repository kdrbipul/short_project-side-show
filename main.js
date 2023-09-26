const button = document.querySelector(".button");
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");
console.log(button, toast, closeIcon, progress);



button.addEventListener("click", () =>{
    toast.classList.add("active");
    progress.classList.add("active");

    setTimeout(()=>{
        toast.classList.remove("active");
    },5000) //1s = 1000 millisecond

    setTimeout(()=>{
        progress.classList.remove("active");
    },5300);
});

closeIcon.addEventListener("click",()=>{
    toast.classList.remove("active");


    setTimeout(()=>{
        progress.classList.remove("active");
    },300); //1s = 1000 millisecond
});
