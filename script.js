//Selecting Elements
var nameinput=document.getElementById("nameinput")
var ageinput=document.getElementById("ageinput")
var genderinput=document.querySelectorAll('input[name="Gender"]')
var courseinput=document.getElementById("courseinput")
var mailinput=document.getElementById("mailinput")
var btn=document.getElementById("btn")
var result=document.getElementById("result")
var table = document.getElementById("studentTable")
//Error-messages
var nameerror=document.getElementById("name-error")
var ageerror=document.getElementById("age-error")
var genderError = document.getElementById("gender-error")
var courseerror=document.getElementById("course-error")
var emailerror=document.getElementById("email-error")

//Validation Form
btn.addEventListener("click",function(){
    let isValid=true
    //Name Validation
    if(nameinput.value.trim() === ""){
        nameerror.textContent="Name shouldn't be empty"
       
    }
    else{
        nameerror.textContent=""
    }
    
    //Age-Validation
    if(ageinput.value.trim()===""){
        ageerror.textContent="Age shouldn't be empty"
       
    }
    else if(ageinput.value<=10){
        ageerror.textContent="Age should be greater than 10"
       
    }
    else{
        ageerror.textContent=""
    }
     // Gender
    let genderSelected = false
    genderinput.forEach(radio => {
        if (radio.checked) genderSelected = true
    })

    if (!genderSelected) {
        genderError.textContent = "Please select gender"
        
    } else {
        genderError.textContent = ""
    }
    // Course
    if(courseinput.value.trim()===""){
        courseerror.textContent="Please Select course"
       
    }
    else{
        courseerror.textContent=""
    }
    //Email-validation
    if(mailinput.value.trim() ===""){
        emailerror.textContent="Email shouldn't be empty"
       
    }
    else if(!mailinput.value.includes("@")){
        emailerror.textContent = "Email must contain @ symbol"
        

    }
    else if(mailinput.value!==mailinput.value.toLowerCase()){
        emailerror.textContent="Email should be in lowercase"
        
    }
    else
     {
        emailerror.textContent = ""
    }

    if (
    nameerror.textContent === "" &&
    ageerror.textContent === "" &&
    genderError.textContent === "" &&
    courseerror.textContent === "" &&
    emailerror.textContent === ""
){
    var row = document.createElement("tr")

    row.innerHTML = `
        <td>${nameinput.value}</td>
        <td>${ageinput.value}</td>
        <td>${getGender()}</td>
        <td>${courseinput.value}</td>
        <td>${mailinput.value}</td>
        <td>
            <button onclick="deleteRow(this)">Delete</button>
        </td>
    `

    table.appendChild(row)  
    alert("Added successfully")
    }}
)
function getGender() {
    let g = ""
    genderinput.forEach(radio => {
        if (radio.checked) {
            g = radio.nextSibling.textContent.trim()
        }
    })
    return g
}
function deleteRow(button) {
    button.closest("tr").remove()
}





