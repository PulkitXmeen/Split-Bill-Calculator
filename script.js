function calculateSplit() {
  const bill = parseFloat(document.getElementById('bill').value);
  const tip = parseFloat(document.getElementById('tip').value || 0);
  const people = parseInt(document.getElementById('people').value);

  // Validation check is given below.......
  if (isNaN(bill) || isNaN(people) || bill <= 0 || people <= 0) {
    document.getElementById('result').textContent = "Please enter valid inputs.";
    return;
  }

  // For Calculation...........
  const tipAmount = (tip / 100) * bill;
  const total = bill + tipAmount;
  const perPerson = total / people;

  //Now we just have to Display result 
  document.getElementById('result').textContent = `Each person pays: ₹${perPerson.toFixed(2)}`;
}
