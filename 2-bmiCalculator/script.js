const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const heightInput = document.getElementById('height').value.trim();
  const weightInput = document.getElementById('weight').value.trim();
  const results = document.getElementById('results');

  const height = parseInt(heightInput);
  const weight = parseInt(weightInput);

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category = '';

    if (bmi < 18.6) category = 'Underweight';
    else if (bmi < 24.9) category = 'Normal weight';
    else if (bmi < 29.9) category = 'Overweight';
    else category = 'Obese';

    results.innerHTML = `<span>Your BMI is ${bmi} (${category})</span>`;
  }
});
