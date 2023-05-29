var contenido=[
    {
        titulo:"Factura Electronica",
        ref : "guia.html#factura-electronica" 
    },
    {
        titulo:"Reportes",
        ref : "guia.html#reportes" 
    },
    {
        titulo:"Catalogos",
        ref : "guia.html#catalogos" 
    },
    {
        titulo:"Previos",
        ref : "guia.html#previos" 
    },
    {
        titulo:"Acusar compras",
        ref : "guia.html#acusar-compras" 
    },
    {
        titulo:"Acusar ventas",
        ref : "guia.html#acusar-ventas" 
    },
    {
        titulo:"Documento soporte",
        ref : "guia.html#doc-soporte" 
    }
];


$(document).ready(function () {
    
    setData();
    getData(contenido);
});


function getData(contenido){

    var content = [];
    var body =[]

    contenido.forEach(function(content){
        
        var titulos = content.titulo;
        var enlaces = content.ref;
        body += `<tr><td><a href="${enlaces}">${titulos}</a></td></tr>`   

    }) 
  
    document.querySelector('.datos').innerHTML = body;    
}

var tabla = document.querySelector('.datos');
function setData(){
    let search = document.getElementById('search');
    

    search.addEventListener("keyup", e=>{
         console.log(e.target.value);
        tabla.classList.remove('hidden')
        let texto = e.target.value;
    
            document.querySelectorAll('td').forEach(elemento =>{
                elemento.textContent.toLowerCase().includes(texto.toLowerCase()) ? 
                elemento.classList.remove('hidden') : elemento.classList.add('hidden')
    
                if (e.key ==="Escape"){
                    e.target.value = ""
                    tabla.classList.add('hidden');
                }
    
                if (search.value ===''){
                    tabla.classList.add('hidden');
                }
            })      
    })
}
    
document.querySelector('.buscador').addEventListener("mouseleave",e =>{  
    
    tabla.classList.add('hidden')
})