function cambiar() {
    document.getElementById("idReview").classList.toggle("review");
    document.getElementById("idReview").classList.toggle("active");
};

document.getElementById("btn-review").onclick = function(){
    cambiar();
}

