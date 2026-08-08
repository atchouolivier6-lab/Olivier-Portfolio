function changerPhoto() {
  document.getElementById("inputPhoto").click();
}

function afficherPhoto(event) {
  let fichier = event.target.files[0];
  if (fichier) {
    let lecteur = new FileReader();
    lecteur.onload = function(e) {
      let img = document.getElementById("avatar-img");
      let texte = document.getElementById("avatar-texte");
      img.src = e.target.result;
      img.style.display = "block";
      texte.style.display = "none";
      localStorage.setItem("photoProfile", e.target.result);
    };
    lecteur.readAsDataURL(fichier);
  }
}

function chargerPhoto() {
  let photo = localStorage.getItem("photoProfile");
  if (photo) {
    let img = document.getElementById("avatar-img");
    let texte = document.getElementById("avatar-texte");
    if (img && texte) {
      img.src = photo;
      img.style.display = "block";
      texte.style.display = "none";
    }
  }
}

chargerPhoto();
