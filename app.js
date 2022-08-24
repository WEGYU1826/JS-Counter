let count = 0;

const btn = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
// console.log(btn);

btn.forEach((item) => {
    // console.log(item);
    item.addEventListener("click" , (e) => {
        // console.log(e.currentTarget.classList);

        const style = e.currentTarget.classList;
        if(style.contains("decrease")){
            count--;
        }else if(style.contains("increase")){
            count++;
        }else if(style.contains("reset")){
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "black";
        }
        value.textContent = count;
    })

})  