let nota = 0
 
 
 function questão1(){
    var options = document.getElementsByName('opcao');
    var mensagem = document.getElementById('mensagem');
    
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        var respostaCorreta = options[i].getAttribute('data-resposta-correta');
        if (options[i].value === respostaCorreta) {
          mensagem.innerText = 'Resposta correta!';
          nota++
          document.getElementById("sk").disabled = false;
          document.getElementById("zero").innerHTML = nota + "/10";
          document.getElementById("meuBotao").disabled = true;
         
        } else {
          mensagem.innerText = 'Resposta incorreta.';
          document.getElementById("zero").innerHTML = nota + "/10";
          document.getElementById("meuBotao").disabled = true;
        }
          
             return;
      }
    }

    mensagem.innerText = 'Nenhuma opção selecionada.';


}


function questão2(){
  var options = document.getElementsByName('opcao');
  var mensagem = document.getElementById('mensagem2');
  
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      var respostaCorreta = options[i].getAttribute('data-resposta-correta');
      if (options[i].value === respostaCorreta) {
        mensagem.innerText = 'Resposta correta!';
        nota++
        document.getElementById("sk").disabled = false;
        document.getElementById("zero").innerHTML = nota + "/10";
        document.getElementById("meuBotao2").disabled = true;
      
      } else {
        mensagem.innerText = 'Resposta incorreta.';
        document.getElementById("zero").innerHTML = nota + "/10";
        document.getElementById("meuBotao2").disabled = true;
      }
     
      return;
    }
  }
  
  
  mensagem2.innerText = 'Nenhuma opção selecionada.';


}