import { Dropdown } from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { data } from "browserslist";

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
  console.log("add", paramCount);
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
                        <button class="btn btn-primary col-sm-1 deleteParam">-</button>
                    </div>
                </div>`;
  let newElement = getElementByString(string);
  let param = document.getElementById("newParam");
  param.appendChild(newElement);

  let deleteParam = document.getElementsByClassName("deleteParam");
  let item;
  for (item of deleteParam) {
    item.addEventListener("click", (e) => {
      // console.log(e.target.parentElement);
      e.target.parentElement.remove();
    });
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  let url = document.getElementById("url").value;
  let requestType = document.querySelector("#requestType").value;
  let contentType = document.querySelector(
    "input[name='contentType']:checked"
  ).value;

  let data;
  if (contentType == "customParameters") {
    const dataRes = {};
    for (let i = 1; i <= paramCount; i++) {
      if (document.getElementById("parameterKey" + i) != undefined) {
        let key = document.getElementById("parameterKey" + i).value;
        let value = document.getElementById("parameterValue" + i).value;
        dataRes[key] = value;
      }
    }
    data = dataRes;
  } else {
    const dataRes = document.getElementById("requestJsonText").value;
    data = dataRes;
  }

  if (requestType == "GET") {
    fetch(url, { method: "GET" })
      .then((response) => response.text())
      .then((text) => {
        document.getElementById("responseJsonText").value = text;
      });
  } else {
    console.log(data);
    fetch(url, {
      method: "POST",
      data: JSON.stringify(data),
      // headers: {
      //   "Content-type": "application/json; charset=UTF-8",
      // },
    })
      .then((response) => response.text())
      .then((text) => {
        document.getElementById("responseJsonText").value = text;
      });
  }
});
