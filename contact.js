function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
}

function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var questions = document.getElementById("questions").value;
    var error_message = document.getElementById("error_message");
    var text;
    
    error_message.style.padding = "10px";

    if(name.length <= 1){
        text = "please enter valid name";
        error_message.innerHTML = text;
        return false;
    }
    if(questions.length < 3){
        text = "please enter valid questions";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1|| email.length < 6){
        text = "please enter valid email";
        error_message.innerHTML = text;
        return false;
    }
    if(name.length > 1 && questions.length >= 3 && email.indexOf("@") != -1 && email.length >= 6){
        alert("You sent an email to us!");
        
    }

    return true;
}

