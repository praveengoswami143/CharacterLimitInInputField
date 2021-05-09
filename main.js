let myText = document.getElementById("myText");
let result = document.getElementById("result");
let limit = 70;

result.textContent = 0 + " / " + limit;

myText.addEventListener("input", function(){
    const TextLength = myText.value.length;

    result.textContent = TextLength + " / " + limit;

    if(TextLength > limit){
        myText.style.borderColor = "red";
        result.style.color = "red";
    }
    else{
        myText.style.borderColor = "grey";
        result.style.color = "grey";
    }
})