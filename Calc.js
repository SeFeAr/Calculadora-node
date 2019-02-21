


   
let nums="";
let display=document.getElementById("n1");
function num(n){
    nums=nums+n;
    document.getElementById("n1").innerHTML = nums;
}
    function lec(e){
        _numero1=Number(nums);
    signo=e;
        vaciar();
}
function vaciar (){
    nums="";
	document.getElementById("n1").innerHTML=nums;
}
/*/ este es un modo simple para que se gewnere de una vez
sumar(){
        return this.numero1+this.numero2;
    }
    restar(){
        return this.numero1-this.numero2;
    }
    multiplicar(){
        return this.numero1*this.numero2;
    }
    dividir(){
        return this.numero1/this.numero2;
    }
} */