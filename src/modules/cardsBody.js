// import { generateRandomCard } from "./generateRandomCard";

export function cardBody(hint, numero) {
  let hintNumber = "";
  if (numero < 10) {
    for (let i = 0; i < numero; i++) {
      hintNumber += hint;
    }
  }
  numero === 10
    ? (hintNumber = `&#129504`)
    : numero === 11
    ? (hintNumber = `&#129504`)
    : numero === 12
    ? (hintNumber = `&#129504`)
    : numero === 13
    ? (hintNumber = `&#129504`)
    : (document.getElementById("container_bodyCard").innerHTML = `
              <div class="classCard" id="cardDiv">
                <h3 class="hint" id="hint-top">${hint}</h3>
                <div class="row">
                  <div class="col">
                    <div class="bodyCard">
                      <h1 class="hint">${hintNumber}</h1>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="divclass">
                    <h3 class="hint" id="hint-botton">${hint}</h3>
          </div>
        </div>
      </div>
</div>`);
  if (hint === `&#9829` || hint === `&#9830`) {
    const h3 = document.querySelectorAll(".hint");
    h3.forEach(elem => {
      elem.style.color = "red";
    });
  }
}
