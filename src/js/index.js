import "bootstrap/dist/css/bootstrap.css";
console.log("working");
document.getElementById("customParam").style.display = "none";

document.getElementById("JSON").addEventListener("click", () => {
  document.getElementById("customParam").style.display = "none";
  document.getElementById("jsonRequest").style.display = "block";
});

document.getElementById("customParameters").addEventListener("click", () => {
  document.getElementById("customParam").style.display = "block";
  document.getElementById("jsonRequest").style.display = "none";
});
