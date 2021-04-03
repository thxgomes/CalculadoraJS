function operacao(){
    var a = parseFloat(document.getElementById("a").value.replace(",","."));
    
    var operador = document.getElementById("operador").value;
    
    var b = parseFloat(document.getElementById("b").value.replace (",","."));
    
     
    if (operador == "+"){
       resultado = (a+b)
       }
     else if (operador == "-") {
       resultado = (a-b)
       }
     else if (operador == "x"){
       resultado = (a*b)
       }
     else if (operador == "/"){
       resultado = (a/b)
       }
     else {
       resultado = ("Inválido")
          }  
     
    document.getElementById("result").innerHTML = resultado;
     
   }
   
   function pokemon(){
     var poke = document.getElementById("pokemonTipo").value
     if (poke == "Lugia"){
     alert("Parabéns!")
     }else if (poke == "lugia") {
       alert("Parabéns!")
     }else {
       alert("Você errou!")
     }
     pokemonTipo.value = ''
   }
   
   
   