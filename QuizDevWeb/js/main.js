      function resp1() {
        let selected = document.querySelector("input[name='p1']:checked");
        document.getElementById("resultado1").innerHTML =
          selected ? "Você escolheu: " + selected.value : "Selecione uma opção!";
      }

      function resp2() {
        let v = document.getElementById("select2").value;
        document.getElementById("out2").innerHTML = v;
      }

      function resp3() {
        let respostas = [];
        if (document.getElementById("cb1").checked)
          respostas.push(document.getElementById("cb1").value);
        if (document.getElementById("cb2").checked)
          respostas.push(document.getElementById("cb2").value);
        if (document.getElementById("cb3").checked)
          respostas.push(document.getElementById("cb3").value);

        document.getElementById("out3").innerHTML = respostas.join(", ");
      }

      function resp4() {
        let selected = document.querySelector("input[name='p4']:checked");
        document.getElementById("resultado4").innerHTML =
          selected ? "Você escolheu: " + selected.value : "Selecione uma opção!";
      }

      function resp5() {
        let v = document.getElementById("select5").value;
        document.getElementById("out5").innerHTML = v;
      }