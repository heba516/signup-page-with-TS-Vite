import './style.css';

let btns = document.querySelectorAll<HTMLButtonElement>(".btn");
let slider = document.querySelector<HTMLDivElement>(".slider")!;
let userName = document.querySelector<HTMLInputElement>(".user_input")!;
let firstName = document.querySelector<HTMLInputElement>(".first_name")!;
let lastName = document.querySelector<HTMLInputElement>(".last_name")!;
let email = document.querySelector<HTMLInputElement>(".email input")!;
let pass = document.querySelector<HTMLInputElement>(".pass input")!;
let errs = document.querySelectorAll<HTMLParagraphElement>(".err");


let userNameRegEx = new RegExp ('^[a-zA-Z0-9]+$');
let nameRegExp = /^[a-zA-Z]+$/;
let emailRegExp = /^[a-zA-Z0-9_-]+@gmail.com$/;
let passRegExp = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


var width = 0, trans = 0;

btns[0].addEventListener("click", ()=> {
    errs.forEach((err)=> {
        err.style.display = "none";
    });
    if(!namesMatching()) {
        if(userName.value == "") {
            let err = <HTMLParagraphElement>userName.nextElementSibling!;
            err.style.display = "block";
            err.textContent = "This field is required";
        }else if(!userNameRegEx.test(userName.value)) {
            let err = <HTMLParagraphElement>userName.nextElementSibling!;
            err.style.display = "block";
            err.textContent = "Not valid user name";
        }
    
        if(firstName.value == "") {
            let err = <HTMLParagraphElement>firstName.nextElementSibling!;
            err.style.display = "block";
            err.textContent = "This field is required";
        }else if(!nameRegExp.test(firstName.value)) {
            let err = <HTMLParagraphElement>firstName.nextElementSibling!;
            err.style.display = "block";
            err.textContent = "Not valid name";
        }
    
        if(lastName.value == "") {
            let err = <HTMLParagraphElement>lastName.nextElementSibling!;
            err.style.display = "block";
            err.textContent = "This field is required";
        }else if(!nameRegExp.test(lastName.value)) {
            let err = <HTMLParagraphElement>lastName.nextElementSibling!;
            err.style.display = "block";
            err.textContent = "Not valid name";
        }
    }else if(namesMatching() && width == 0) {
        document.querySelector<HTMLElement>(".user_icon i")!.style.backgroundColor = "rgb(12, 148, 12)";
        color();
    }
})

btns[1].addEventListener("click", ()=> {
    errs.forEach((err)=> {
        err.style.display = "none";
    });

    if(email.value == "") {
        let err = <HTMLParagraphElement>email.nextElementSibling!;
        err.style.display = "block";
        err.textContent = "This field is required";
    }else if (!emailRegExp.test(email.value)){
        let err = <HTMLParagraphElement>email.nextElementSibling!;
        err.style.display = "block";
        err.textContent = "Not valid email";
    }else {
        document.querySelector<HTMLElement>(".email_icon i")!.style.backgroundColor = "rgb(12, 148, 12)";                
        color();
    }
})

btns[2].addEventListener("click", ()=> {
    errs.forEach((err)=> {
        err.style.display = "none";
    });

    if(pass.value == "") {        
        let err = <HTMLParagraphElement>pass.nextElementSibling!;
        err.style.display = "block";
        err.textContent = "This field is required";
    }else if (!passRegExp.test(pass.value)) {
        let err = <HTMLParagraphElement>pass.nextElementSibling!;
        err.style.display = "block";
        err.textContent = "Not valid password";
    }else{
        document.querySelector<HTMLElement>(".pass_icon i")!.style.backgroundColor = "rgb(12, 148, 12)";   
        color();
    }
})

btns[3].addEventListener("click", ()=> {
    document.querySelector<HTMLElement>(".compelete_icon i")!.style.backgroundColor = "rgb(12, 148, 12)"; 
    color();

    const userData: IUser = {
        username: userName.value,
        firstname: firstName.value,
        lastname: lastName.value,
        email: email.value,
        pass: pass.value
    }
    
    document.getElementById("user")!.innerHTML = `User Name: ${userData.username} <br>
    Name: ${userData.firstname} ${userData.lastname} <br>
    Email: ${userData.email} <br>
    Password: ${userData.pass}
    `; 
})



function color() {
    width += 25;
    trans -=300;
    document.querySelector<HTMLDivElement>(".steps")!.style.setProperty('--after-width', `${width}%`);
    slider.style.transform = `translateX(${trans}px)`;
}

function namesMatching() {
    return userNameRegEx.test(userName.value) && nameRegExp.test(firstName.value) && nameRegExp.test(lastName.value);
}

interface IUser {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    pass: string;
}