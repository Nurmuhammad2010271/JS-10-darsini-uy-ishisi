let ism = prompt("Ism kiriting");
let newname = document.createElement("h1");
newname.textContent = ism;
newname.style.color = "yellow";
document.body.style.fontSize = "3.5rem";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "blue";
document.body.appendChild(newname);