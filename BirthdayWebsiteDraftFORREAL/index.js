// Hi Rydawg! Are you some random snooper?? Nonetheless, Rydawg I hope u like this present!!!!

const passwordForm = document.getElementById("myForm");
const iceBearGif = document.getElementById("iceBearGif");
const falsePassword1 = "rydawgIsSuperCool";
const falsePassword2 = "austinIsSoLame"; 
const falsePassword3 = "rydawg21"; 
const realPassword = "bdaygirl!"; 
var clickCounter = 0;

passwordForm.addEventListener("submit", passwordAuthentication);
function passwordAuthentication(){
    
    clickCounter = clickCounter + 1;
    console.log("clickCounter: " + clickCounter);
    event.preventDefault();
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;
    var errorMessageElement = document.getElementById("error-message");
    
    var text = "";
    var hint = "";
    var previousHint = "";

    // Display error message
    switch(clickCounter) {
        case 1:
            console.log("log: falsePassword1");
            text = "Wow rydawg!! Very humble password of you!!! But it's your birthday so I'll let it slide!";
            hint = "Here, just type how you really feel about me.\n Password: " + falsePassword2;
            iceBearGif.src = "images/iceBearGif1.gif";
            previousHint = "hey";
            break;
        case 2:
            console.log("log: falsePassword2");
            text = "...okay i was kidding now that's just mean. Alas, it is your bday so i'll let it slide...";
            hint = "Did you forget your password? Here, try your nickname then how old your turning.\n Ex. " + falsePassword3;
            iceBearGif.src = "images/iceBearGif2.gif";
            break;
        case 3:
            console.log("log: falsePassword3");
            text = "TWENTY ONE?!?!? You're clearly getting OLD...because it seems you forgot your password!";
            hint = "Try this one: " + realPassword;       
            iceBearGif.src = "images/iceBearGif3.gif";
            break;
        case 4:
            console.log("log: realPassword");
            // Load next HTML page
            window.location.replace("bday.html");
            break;
        default:
            console.log("log: default");
            if (!previousHint){
                console.log("log: default-if ");
                errorMessageElement.textContent = "Incorrect Password";
            }else{
                console.log("log: default-else");
                errorMessageElement.textContent = "Previous Hint: \n " + text + " " + hint;
            }
        }
    
    console.log("outside case statements");
    errorMessageElement.textContent = text + " " + hint;
}