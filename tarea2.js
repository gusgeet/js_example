function suma(x, y) {
    x=3
    y=4
    console.log(x+y);
  }
suma();
function resta(x, y) {
    x=5;
    y=6;
    console.log(x-y);
  }
resta();
function multiplica(x, y){
    x=4;
    y=5;
    console.log(x*y);
}
multiplica();
function divide(x, y){
    x=21;
    y=7;
    console.log(x/y);
}
divide();
function obtenerResto(x, y){
    x=9;
    y=5;
    console.log(x%y);
}
obtenerResto();
function elevarAlCuadrado(x, y){
    x=4;
    console.log(Math.pow(x, 2));
}
elevarAlCuadrado();
function sonIguales(x, y){
    x=5;
    y=56;
    if(x===y){
        console.log('verdadero')
    }
    else{
        console.log('false')
    }
}
sonIguales();
function tienenMismaLongitud(str1, str2){
    str1='Hola Mundo';
    str2='Hola Mundo de nuevo!';
    if(str1.length===str2.length){
        console.log('verdadero');
    }
    else{
        console.log('falso')
    }
}
tienenMismaLongitud();
function menosQueNoventa(num){
    num=91;
    if(num>90){
        console.log('true')
    }
    else{
        console.log('false')
    }
}
menosQueNoventa();
function mayorQueCincuenta(num){
    num=52;
    if(num>50){
        console.log('true')
    }
    else{
        console.log('false')
    }
}
mayorQueCincuenta();
function esPar(num){
    num=42;
    if(num%2===0){
        console.log('Es par')
    }
    else {
        console.log('No es par')
    }
}
esPar();
function esImpar(num){
    num=12;
    if(num%2!==0){
        console.log('Es par')
    }
    else {
        console.log('No es par')
    }
}
esImpar();
function comparacion() {
    const val1=1;
    const val2=1;
    if (val1 && val2) {
      console.log("Entramos en la declaración if");
    }
  }
comparacion();
function flujoCondicional() {
    valor1=0;
    valor2=1; 
    if (valor1) {
        console.log("primer if");
      }
    if (valor2 && !valor1) {
        console.log("segundo if");
      } else if (valor2 <= 12) {
        console.log("entrada al else if");
      } else {
        console.log("else final");
      }
    valor1=1;
    valor2=15;
    if (valor1) {
        console.log("primer if");
      }
    if (valor2 && !valor1) {
        console.log("segundo if");
      } else if (valor2 <= 12) {
        console.log("entrada al else if");
      } else {
        console.log("else final");
      }
      valor1=1;
      valor2=11;
      if (valor1) {
          console.log("primer if");
        }
      if (valor2 && !valor1) {
          console.log("segundo if");
        } else if (valor2 <= 12) {
          console.log("entrada al else if");
        } else {
          console.log("else final");
        }
        valor1=undefined;
        valor2=undefined;
        if (valor1) {
            console.log("primer if");
          }
        if (valor2 && !valor1) {
            console.log("segundo if");
          } else if (valor2 <= 12) {
            console.log("entrada al else if");
          } else {
            console.log("else final");
          }
  }
flujoCondicional();
