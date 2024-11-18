let freshInput = true;
export function Telmask(phoneEl) {
  let eventCalllback = function (e) {
    let el = e.target,
      clearVal = el.dataset.phoneClear,
      matrix = "+7__________",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");

    if (clearVal !== "false" && e.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = "";
        return;
      }
    }

    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });

    if (freshInput && i == 2 && e.target.value == "+7 (8") {
      e.target.value = "+7 (";
      freshInput = false;
    }
  };

  const pasteCallback = async function (e) {
    e.preventDefault();
    let pastedText = await navigator.clipboard.readText();
    if (pastedText[0] == "8") {
      e.target.value = "7" + pastedText.substring(1);
      return;
    }
    e.target.value = pastedText;
  };

  phoneEl.addEventListener("paste", pasteCallback);

  for (let ev of ["input", "blur", "focus"]) {
    phoneEl.addEventListener(ev, eventCalllback);
  }
}
