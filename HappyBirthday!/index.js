// Hi Rydawg! Or are you some random snooper?? Nonetheless, Rydawg I hope u like this present!!!!

const passwordForm = document.getElementById("myForm");
const iceBearGif = document.getElementById("iceBearGif");
const falsePassword1 = "rydawgIsTheCoolestEver";
const falsePassword2 = "austinIsSo____"; 
const falsePassword3 = "rydawg__"; 
const realPassword = "uhhhHello?"; 
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
    var options = "";
    var previousHint = "";

    // Display error message
    switch(clickCounter) {
        case 1:
            console.log("log: falsePassword1");
            text = "Wow rydawg!! Very humble password of you!!! But it's your birthday so I'll let it slide!<br>";
            options = "A. Amazing B. Smart C. Awesome D. LAME"
            hint = "Here, complete the password by choosing how you really feel about me.<br> Password: " + falsePassword2 + "<br>" + options;
            iceBearGif.src = "images/iceBearGif1.gif";
            break;
        case 2:
            // passwordForm.innerText("heyyyy");
            console.log("log: falsePassword2");
            text = "...okay i was kidding now that's just mean. Alas, it is your bday so once again i'll let it slide...<br>";
            hint = "Did you forget your password?<br> Maybe it's your nickname then how old your turning?<br> Ex. " + falsePassword3;
            iceBearGif.src = "images/iceBearGif2.gif";
            break;
        case 3:
            console.log("log: falsePassword3");
            text = "TWENTY ONE?!?!? Like you're a whole YEAR into your twenties!!<br>You're clearly getting OLD...because it seems you forgot your password!<br>";
            hint = "No worries, try typing in: " + realPassword;       
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
    errorMessageElement.innerHTML = text + " " + hint;
}