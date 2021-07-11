import "bootstrap/dist/css/bootstrap.css";
console.log("working");
// Utility functions
// Get element from string
function getElementByString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild.firstElementChild;
}
// Show the selected radio button in beginning
if (document.getElementById("JSON").checked) {
  document.getElementById("customParam").style.display = "none";
} else {
  document.getElementById("jsonRequest").style.display = "none";
}
// hide custom parameter and show json when json radio button is clicked
document.getElementById("JSON").addEventListener("click", () => {
  document.getElementById("customParam").style.display = "none";
  document.getElementById("jsonRequest").style.display = "block";
});

// hide the json box and show the custom parameter when custom param radio is clicked
document.getElementById("customParameters").addEventListener("click", () => {
  document.getElementById("customParam").style.display = "block";
  document.getElementById("jsonRequest").style.display = "none";
});

// show extra parameters when plus button clicked
let paramCount = 1;
let addParam = document.getElementById("addParam");
addParam.addEventListener("click", () => {
  paramCount++;
  let string = `<div id="customParam">
                    <div class="form-row row my-4">
                        <label for="parameter1" class="col-sm-2 col-form-label">Parameter ${paramCount}</label>
                        <div class="col-md-4">
                            <input
                            type="text"
                            class="form-control"
                            id="parameterKey${paramCount}"
                            placeholder="Enter parameter key"
                            />
                        </div>
                        <div class="col-md-4">
                            <input
                            type="text"
                            class="form-control"
                            id="parameterValue${paramCount}"
                            placeholder="Enter parameter value"
                            />
                        </div>
                        <button class="btn btn-primary col-sm-1" id="addParam">-</button>
                    </div>
                </div>`;
  let newElement = getElementByString(string);
  document.getElementById("newParam").appendChild(newElement);
});
