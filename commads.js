
// leitura de fromulario 
var nome           = document.querySelector('#exampleInputName');
var gender         = document.querySelectorAll('#form-user-create [name=gender]:checked');
var nascimento     = document.querySelector('#exampleInputBirth')
var pais           = document.querySelector('#exampleInputCountry');
var email          = document.querySelector('#exampleInputEmail');
var senha          = document.querySelector('#exampleInputPassword');
var foto           = document.querySelector('#exampleInputFile');
var admin          = document.querySelector('#exampleInputAdmin');


var fields = document.querySelectorAll('#form-user-create [name]');

fields.forEach(function(field, index){
   console.log(field.name); 
});