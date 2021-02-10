const inputName = document.getElementById('name');
const textArea = document.getElementById('text');
const button = document.getElementById('btn');
const contain = document.getElementById('container')

function commentary(nombre, texto) {
    function newComment(nombre, texto) {
        this.nombre = nombre;
        this.texto = texto;        
    }
    var nombre = inputName.value; 
    var texto = textArea.value;

    newComm = new newComment(nombre, texto);
    showComment();
}

allCommentary = [];


function showComment() {
    allCommentary.push(newComm);
    contain.innerHTML += `
    
        <h2>Name: ${newComm.nombre}</h2>
        <p>Comentario: ${newComm.texto}</p>
    `
}