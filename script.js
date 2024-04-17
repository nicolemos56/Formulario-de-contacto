const form = document.getElementById('form')
const nomeusuario = document.getElementById('nome')
const assunto = document.getElementById('assunto')
const email = document.getElementById('email')
const sms = document.getElementById('sms')
const btnenviar = document.getElementById("submit")

form.addEventListener('submit', function a(event){
        const valueemail = email.value;
    if(!isValidEmail(valueemail)){
    alert("Por favor insira um email valido!")
    event.preventDefault();
    verificainputs();
 }
});
function isValidEmail(valueemail) {
    const emailvalided= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailvalided.test(valueemail)
}
function verificainputs() {
    const nomeUser = nomeusuario.value;
    const assuntoTem = assunto.value;
    const emailEndereco = email.value;
    
    if(nomeUser == ''){
      msgError(nomeusuario, 'campo vazio, por favor preencha o campo!')
      
    }else if(emailEndereco == ''){
        msgError(nomeusuario, 'campo vazio, por favor preencha o campo!')
      
    }else if(assuntoTem == ''){
        msgError(assuntoTem, 'campo vazio, por favor preencha o campo!')
      
    }
}
function msgError(input, message){
const pegaPaiInput = input.parentElement;
const small = pegaPaiInput.querySelectorAll('small');

const novoelemento = document.createElement("p");
novoelemento.textContent=message;
const elementaoPai=document.getElementById("smalll");
elementaoPai.appendChild(novoelemento).innerText;
   
}
