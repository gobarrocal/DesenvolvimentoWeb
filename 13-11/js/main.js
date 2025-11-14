function displayRadioValue() {
  var elemento = document.getElementsByName("gender");
  for (i = 0; i < elemento.length; i++) {
    if (elemento[i].checked)
      document.getElementById("result").innerHTML =
        "Genero: " + elemento[i].value;
  }
}
function getOptions() {
  selectElement = document.querySelector("#select1");
  output = selectElement.value;
  document.querySelector(".output").textContent = output;
}

function getCheckedBox() {
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  var text = "";
  for (i = 0; i < checkboxes.length; i++) {
    if (i == 0) text = checkboxes[i].value;
    else
    text = `${text}, ${checkboxes[i].value}`;
    document.getElementById("pri").innerHTML = text;
  }
}