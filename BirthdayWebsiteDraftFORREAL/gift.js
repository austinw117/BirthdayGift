// const bday = document.documentElement;

setTimeout(function() {
    var response = document.createElement("h1");
    response.textContent = "(tears of joy)";
    response.className = "line-2 anim-typewriter-question";
    var question = document.createElement("h1");
    question.textContent = "One more gift before you go.";
    question.className = "line-2 anim-typewriter-question";
    document.body.appendChild(response);
    document.body.appendChild(question);
    setTimeout(function() {
        showButton();
    }, 5000); // 5 seconds
}, 5000); // 5 seconds

function showButton(){
    console.log("showButton");
    var buttonHTML = document.createElement("button");
    var buttonText = document.createTextNode("HAPPY BIRTHDAY!!!!");
    buttonHTML.className = "acknowledgeButton";
    buttonHTML.id = "submit";
    buttonHTML.appendChild(buttonText);
    document.body.appendChild(buttonHTML);

    buttonHTML.addEventListener("click", function() {
        changePage();
    })
}

function changePage(){
    console.log("loadPage");
    window.open("https://music.apple.com/us/playlist/pl.u-yZyVE3rtYEBkZa1");
}
