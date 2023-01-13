/*
import data from './jason.json';

console.log(data);*/
/*
document.getElementById("boton").onclick=function(){

    console.log("hiciste click en el boton")
    
    const persona='{"nombre":"Carlos Daniel","apellido":"Villalba","nacionalidad":"Argentino","edad":"25","celular":"1151387649","direccion":"Carlos Alberto Becu 3041","email":"villalbacarlosd97@gmail.com"}';
    const obj=JSON.parse(persona)
    console.log(persona)
    /*
    const x=document.getElementById("container");
    const y=document.getElementById("nombre");
    *//*
    document.getElementById("nombre").innerHTML="Nombre:" + obj.nombre  ;
    document.getElementById("apellido").innerHTML="Apellido:" + obj.apellido;
    document.getElementById("nacionalidad").innerHTML="Nacionalidad:" + obj.nacionalidad;
    document.getElementById("edad").innerHTML="Edad:" + obj.edad;
    document.getElementById("direccion").innerHTML="Direccion:" + obj.direccion;
    document.getElementById("celular").innerHTML="Celular:" + obj.celular;
    document.getElementById("email").innerHTML="Correo Electronico:" + obj.email;
}ss
import {asignatura} from './datosUni.js';*/
import {universidades} from './datosUni2.js';

document.getElementById("boton").onclick=function traerDatos(){
    $.ajax({
        url: 'https://randomuser.me/api/?inc=gender,name,location,email,dob,phone,cell,picture',
        dataType: 'json',
        success:function(data) { 
          for (let item of data.results){
            document.getElementById("nombre").innerHTML="Nombre: "+item.name.first;
            document.getElementById("apellido").innerHTML="Apellido: " + item.name.last;
            document.getElementById("nacionalidad").innerHTML="Nacionalidad :" + item.location.country;
            document.getElementById("edad").innerHTML="Edad: " + item.dob.age;
            document.getElementById("direccion").innerHTML="Direccion: " + item.location.street.name +"<br>"+ item.location.street.number;
            document.getElementById("celular").innerHTML="Celular: " + item.cell +"<br>"+ "telefono: "+ item.phone;
            document.getElementById("email").innerHTML="Correo Electronico: " + item.email;
            document.getElementById("retrato").innerHTML="<img src='"+item.picture.large +"'>"
    
    };
    }
    })
    var i;
    var trabajos2=[];
    console.log(i);
    
    $.ajax({
        url: 'https://api.generadordni.es/v2/profiles/company?results=5&include_fields=nif,name,activity,email,phonenumber',
        dataType: 'json',
        success: function(data2) {
                for (let item of data2){
                     trabajos2.push(item.activity)
                    
                }
                for(i=0;i<=3;i++){
                    console.log(trabajo2);
                    }
                    document.getElementById("trabajo1").innerHTML="Primera experiencia: "+trabajos2[0];
                    document.getElementById("trabajo2").innerHTML="Segunda experiencia: "+trabajos2[1];
                    document.getElementById("trabajo3").innerHTML="Tercera experiencia: "+trabajos2[2];
                    document.getElementById("trabajo4").innerHTML="Cuarta experiencia: "+trabajos2[3];}
               
    
            })
/*
    $.ajax({
        url:'https://datos.unican.es/docencia/54/asignaturas-de-grado-2018-2019.json',
        dataType:'json',
        success:function(data3){
            for (let item of data3){
                document.getElementById("secundaria").innerHTML="secundaria:"+item.asignature
            }
        }
    })
console.log(datos)


console.log(asignatura.length);
console.log(asignatura[1].Centro);
*/
var num=[];
for (i=0;i<=3;i++){
    num.push(Math.floor(Math.random()*(universidades.length)));
}
console.log(num)


document.getElementById("centro").innerHTML="Universidad: "+universidades[num[0]].universidad +"<br> titulo: "+universidades[num[0]].titulo;

document.getElementById("centro2").innerHTML="Universidad: "+universidades[num[1]].universidad +"<br> titulo: "+universidades[num[1]].titulo;
document.getElementById("centro3").innerHTML="Universidad: "+universidades[num[2]].universidad +"<br> titulo: "+universidades[num[2]].titulo;
document.getElementById("centro4").innerHTML="Universidad: "+universidades[num[3]].universidad +"<br> titulo: "+universidades[num[3]].titulo;

}





