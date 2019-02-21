//clase es el molde
class opcion{
constructor(_numero1,_numero2){
    this.numero1=_numero1;
    this.numero2=_numero2;
} Sumar(){
        var objetoenv = this;
    //return a new promise
    return new Promise(function(resolve,reject){
        try{
            var xhr = new XMLHttpRequest();
            xhr.open('POSt','http://localhost:8080/Asumar');
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.onload = function(){
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject(xhr);
                }
            };
            xhr.send(JSON.stringify(objetoenv));
        }
        catch(err){
            reject(err.message);
        }
    });
    }
    restar(){
        var objetoenv = this;
        return new Promise(function(resolve,reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open('POSt','http://localhost:8080/Arestar');
                xhr.setRequestHeader('Content-Type','application/json');
                xhr.onload = function(){
                    if (xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText));
  
                    }else{
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoenv));
            }
            catch(err){
                reject(err.message);
            }
        });
    }
    multiplicar(){
        var objetoenv = this;
        return new Promise(function(resolve,reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open('POSt','http://localhost:8080/Amultiplicar');
                xhr.setRequestHeader('Content-Type','application/json');
                xhr.onload = function(){
                    if (xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText));
  
                    }else{
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoenv));
            }
            catch(err){
                reject(err.message);
            }
        });
    }
    dividir(){
        var objetoenv = this;
        return new Promise(function(resolve,reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open('POSt','http://localhost:8080/Adividir');
                xhr.setRequestHeader('Content-Type','application/json');
                xhr.onload = function(){
                    if (xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText));
  
                    }else{
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoenv));
            }
            catch(err){
                reject(err.message);
            }
        });
    }
}
