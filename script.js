function openForm(id) {
    document.getElementById(id).style.display = "block";
    document.body.style.overflow = "hidden";
  }
  
function closeForm(id) {
  document.getElementById(id).style.visibility = "hidden";
  document.body.style.overflow = "scroll";

}
function showThnx(){
  document.getElementById("school-thnks").style.display = "block";
}
function closeThnks(){
  document.getElementById("school-thnks").style.display = "none";
  
}

