//console.log(document.querySelector('#titulo').textContent);
    //var titulo = document.querySelector('#titulo');
    
	//	titulo.textContent = 'Oi';
    //	titulo.textContent = 'Tchau';
    //IMC peso- peso/altura *asltua
   
 // console.log (document.querySelector('.paciente: first-child'));
 // console.log (document.querySelector('.paciente:nth-child(3)'));
 // console.log (document.querySelector('.paciente:last-child'));

    /*var paciente = document.querySelectorAll('.paciente')[0];
    var peso = paciente.querySelector('.info-peso').textContent;
    
   
    if(peso <= 0  && peso <1000)
    {
        var altura = paciente.querySelector('.info-altura').textContent;
        if(altura > 0 && <= 3.00 ){

     var imc  = peso /(altura*altura);
        paciente.querySelector('info-imc').textContent = imc;
    }else{
        paciente.querySelector('info-imc').textContent='Altura invalido';
    }
    }
  else {
    paciente.querySelector('info-imc').textContent='Peso invalido';
    
  }*/


var pacientes = document.querySelectorAll('.paciente');

for(var i=0; i<pacientes.length; i++){
    var peso = pacientes[i].querySelector('.info-peso').textContent;
    console.log(peso);
   
    if(peso > 0  && peso <1000)
    {
        var altura = pacientes[i].querySelector('.info-altura').textContent;
        if(altura > 0 && altura <= 3.00 ){

     var imc  = peso /(altura*altura);
        pacientes[i].querySelector('.info-imc').textContent = imc.toFixed(2);
    }else{
        pacientes[i].querySelector('.info-imc').textContent='Altura invalido';
        pacientes[i].classList.add('paciente-invalido');

    }

    }
  else {
    pacientes[i].querySelector('.info-imc').textContent='Peso invalido';
    pacientes[i].classList.add('paciente-invalido');

    
  }

}


    



function getImc(peso,altura){
    return peso/(altura*altura);
}

 function validarPeso(peso){
     return (peso > 0  && peso <1000);



 }
 function validarAltura(altura){
   return(altura > 0 && altura <= 3.00 );
 }



var botao =  document.querySelector('#adicionar-paciente');
botao.addEventListener('click' ,function(event){
    event.preventDefault();
//Formulario pega os valores do que seram digitados no formulario
   var form = document.querySelector('#form-adiciona');
   var nome = form.nome.value;
   var peso = form.peso.value;
   var altura = form.altura.value;
   var gordura = form.gordura.value;


//Tabela , vai adicionando os valores criando novas linhas
   var pacienteLinha = document.createElement('tr'); // linha da tabela
  
   var nomeColuna = document.createElement('td'); // valores das colunas
   var pesoColuna = document.createElement('td');
   var alturaColuna = document.createElement('td');
   var gorduraColuna = document.createElement('td');
   var imcColuna = document.createElement('td');





   // Atribuindo os valores para os elementos criados 
   nomeColuna.textContent = nome;
   pesoColuna.textContent = peso;
   alturaColuna.textContent = altura;
   gorduraColuna.textContent = gordura;
   imcColuna.textContent = getImc(peso,altura).toFixed(2);


   //Inserção na linha
   pacienteLinha.appendChild(nomeColuna);
   pacienteLinha.appendChild(pesoColuna);
   pacienteLinha.appendChild(alturaColuna);
   pacienteLinha.appendChild(gorduraColuna);

   if(validarPeso(peso)){
       if(validarAltura(altura)){
        imcColuna.textContent = getImc(peso,altura).toFixed(2);

       }
       else{
       alert("Altura Invalida");

       }
   }else {
       alert("Peso invalido")
   }


   pacienteLinha.appendChild(imcColuna);


  var tabela = document.querySelector('#tabela-pacientes');
 tabela.appendChild(pacienteLinha);

});




