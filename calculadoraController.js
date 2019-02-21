//clase es el molde
class opcion{
constructor(_numero1,_numero2){
    this.numero1=_numero1;
    this.numero2=_numero2;
} Sumar(){
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
}
//este export es para llamar al
exports.Sumar= function(req,res){
    console.log(req);
    let clasinstanciada= new opcion(req.body.numero1,req.body.numero2);
    res.json(clasinstanciada.Sumar());
}
exports.restar= function(req,res){
    let clasinstanciada= new opcion(req.body.numero1,req.body.numero2);
    res.json(clasinstanciada.restar());
}

exports.multiplicar= function(req,res){
    let clasinstanciada= new opcion(req.body.numero1,req.body.numero2);
    res.json(clasinstanciada.multiplicar());
}
exports.dividir= function(req,res){
    let clasinstanciada= new opcion(req.body.numero1,req.body.numero2);
    res.json(clasinstanciada.dividir());
}