let number = 0
let sentence = 0

document.getElementById('calculate').addEventListener
('click', calculate)

function calculate () {
  number = document.getElementById('input').value

  number = parseInt(number)

  number = number * number


  alert(number)
}