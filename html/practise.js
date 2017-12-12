function addUp(){
  var value1 = document.getElementById('index1').value;
  var value2 = document.getElementById('index1').value;
  //value1 = parseFloat(value1);
  //value2 = parseFloat(value2);
  var result = parseInt(value1) + parseInt(value2);
  //var result = value1 + value2;
  document.getElementById('result').value = result;
}
