// const btn = document.querySelector('button')
// const inputs = documents.querySelector('form')
// btn.addEventListener('click', ()=>{
//     Email.send({
//         // Host:"smtp.mailtrap.io",
//         // Username:"2a3fe5128e5bbf",
//         // Password:"71d011a2fe867c",
//         SecureToken:"ed66ee04-358e-4451-9a4b-08319c8d6cc1",
//         To:"xyz@gm.com",
//         From:inputs.elements["email"].value,
//         Subject:"Contact Us Query By the Customer",
//         Body:inputs.elements["message"].value +"<br> " + inputs.elements["name"].value + inputs.elements["phone"].value
//     }).then(msg=>alert("The email successfully sent"))
// })
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
        Username:"9e4c688fefca4e",
        Password:"a173798875bd3c",
        SecureToken:"413a0eb5-6c83-46f6-8bd8-a2d2aaccbddf",
        To: "shaikmohammad9097@gmail.com",
        From: email,
        Subject: "Contact Us Query By the Customer",
        Body:"Name: "+ name + "<br>" +"Phone: "+ phone + "<br>" +"Message: "+ msg 
    }).then(msg => alert("The email successfully sent"))
})
