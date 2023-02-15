// import { generateRandomCard } from "./generateRandomCard";

export function cardBody(hint, numero) {
  document.getElementById("cardDiv").innerHTML = `<div class="container-fluid">
<div class="row">
<div class="col">
<div class="randomCard" id="card">
<div class="card">
<div class="row">
<div class="col" id="up">
<div class="classCard">
<h3 class="hint">${hint}</h3>
</div>
</div>
</div>
<div class="row">
<div class="col">
<div class="bodyCard">
<h1>${numero}</h1>
</div>
</div>
</div>
<div class="row">
<div class="col" id="down">
<div class="divclass">
<h3 class= "hint">${hint}</h3>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`;
  if (hint === `&#9829` || hint === `&#9830`) {
    const h3 = document.querySelectorAll(".hint");
    h3.forEach(elem => {
      elem.style.color = "red";
    });
  }
}
