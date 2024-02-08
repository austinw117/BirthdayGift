// const bday = document.documentElement;

setTimeout(function() {
    var question = document.createElement("h1");
    question.textContent = "One question before you go...";
    question.className = "line-1 anim-typewriter-question";
    document.body.appendChild(question);
    setTimeout(function() {
        showButton();
    }, 5000); // 5 seconds
}, 5000); // 5 seconds

function showButton(){
    console.log("showButton");
    var buttonHTML = document.createElement("button");
    var buttonText = document.createTextNode("Click here for the question. WARNING: YOU WILL BE TIMED");
    buttonHTML.className = "acknowledgeButton";
    buttonHTML.id = "submit";
    buttonHTML.appendChild(buttonText);
    document.body.appendChild(buttonHTML);

    buttonHTML.addEventListener("click", function() {
        changePage();
    })
}

function changePage(){
    console.log("changePage");
    window.location.replace("question.html");
}
