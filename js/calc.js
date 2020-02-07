function fun1() {
  var calcRange = document.getElementById('range');
  var calcMoney = document.getElementById('calcMoney');
  var calcMonth = document.getElementById('calcMonth');

  calcMoney.textContent = (calcRange.value * (16 + (calcRange.value/100))) * 30;
  calcMonth.textContent = ( 2000000 / calcMoney.textContent ).toFixed(1);
}
