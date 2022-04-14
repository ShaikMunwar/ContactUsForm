
const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["message"].value.trim())
    const phone = (inputs.elements["phone"].value).trim()
    if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !phone.length > 0) {
        alert("All fields are mandatory")
        return
    }
    Email.send({
         Host: "smtp.mailtrap.io",
        Username:"c1b1b75e05e9b4",
        Password:"08deae8f9e9b07",
        SecureToken:"4b0e96d8-54f0-43d5-b65d-d495a6c4b3f7",
        To: "shaikmohammad9097@gmail.com",
        From: email,
        Subject: "Contact Us Query By the Customer",
        Body:"Name: "+ name + "<br>" +"Phone: "+ phone + "<br>" +"Message: "+ msg 
    }).then(msg => alert("The email successfully sent"))
})
