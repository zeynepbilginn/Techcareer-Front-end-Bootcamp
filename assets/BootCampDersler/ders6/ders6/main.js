function additionBetweenTwoNumbers() {
  var firstNumber = +document.getElementById("firstNumber").value;
  var secondNumber = +document.getElementById("secondNumber").value;

  var result = 0;

  //girilen 2. sayı 1. sayıdan büyük ise
  if (firstNumber === "" || secondNumber === "") {
    alert("Sayi giriniz");
  } else {
    if (secondNumber > firstNumber) {
      while (firstNumber < secondNumber) {
        result += firstNumber;
        firstNumber += 1;
      }
      document.getElementById("result").innerHTML = result;
    }
  }
}

function additionBetweenNumbers() {
  var numbers = document.getElementsByClassName("numberInput"); //array
  var count = 0;
  var result = 0;
  while (count < numbers.length) {
    result += +numbers[count].value;
    count++;
  }
  alert("Sonucumuz : " + result);
}

function createInput() {
  var inputNumber = +document.getElementById("thirdNumber").value; //girilen sayi
  var count = 0;

  while (count < inputNumber) {
    var input =
      '<input type="number" class="" min="1" max="999999" id="TxtNumber_' +
      count +
      '"><br/>';
    document.getElementById("inputResult").innerHTML += input;

    count++;
  }
}
