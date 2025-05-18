const editButton = document.getElementById("editButton");
const saveButton = document.getElementById("saveButton");

const nameSpan = document.getElementById("name");
const emailSpan = document.getElementById("email");
const phoneSpan = document.getElementById("phone");
const addressSpan = document.getElementById("address");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const addressInput = document.getElementById("addressInput");

editButton.addEventListener("click",function(){
    nameSpan.style.display="none";
    emailSpan.style.display="none";
    phoneSpan.style.display="none";
    addressSpan.style.display="none";

    nameInput.style.display="block";
    emailInput.style.display="block";
    phoneInput.style.display="block";
    addressInput.style.display="block";

    nameInput.value=nameSpan.innerText;
    emailInput.value=emailSpan.innerText;
    phoneInput.value=phoneSpan.innerText;
    addressInput.value=addressSpan.innerText;
    
    editButton.style.display = "none";
    saveButton.style.display = "block";
});

saveButton.addEventListener("click",function(){
    nameSpan.innerText=nameInput.value;
    emailSpan.innerText=emailInput.value;
    phoneSpan.innerText=phoneInput.value;
    addressSpan.innerText=addressInput.value;

    nameSpan.style.display="block";
    emailSpan.style.display="block";
    phoneSpan.style.display="block";
    addressSpan.style.display="block";

    nameInput.style.display="none";
    emailInput.style.display="none";
    phoneInput.style.display="none";
    addressInput.style.display="none";
    
    editButton.style.display = "block";
    saveButton.style.display = "none";
});
