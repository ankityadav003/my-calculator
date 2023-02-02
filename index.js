let screenValue = "";
let buttons = document.querySelectorAll("button");
// console.log(buttons);
screen = document.getElementById("screen");
// console.log(screen);
// console.log(a);
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    // console.log(buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "%") {
      screenValue = screen.value / 100;
      screen.value = screenValue;
      // consol.log(screenValue)
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      if ((screen.value = eval(screenValue))) {
        screenValue = "";
      }
    } else if (buttonText == "B") {
      screenValue=screenValue.slice(0, (screenValue.length-1));
      screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
