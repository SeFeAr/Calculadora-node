var controlcalc= require('./CalculadoraController.js');
module.exports = function(app){
// el asumar es donde se encuentra la persona para leer el post de la misma
    
    app.post('/Asumar',controlcalc.Sumar);
    app.post('/Arestar',controlcalc.restar);
    app.post('/Amultiplicar',controlcalc.multiplicar);
    app.post('/Adividir',controlcalc.dividir);
}