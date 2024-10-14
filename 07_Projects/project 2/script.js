const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === 0 || height < 0 || isNaN(height)) {
    results.innerHTML = `enter a valid height ${height}`;
  } else if (weight === 0 || weight < 0 || isNaN(weight)) {
    results.innerHTML = `enter a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }

  if(bmi < 18.6){
    results.innerHTML = 'you are under Weight';
  }
  else  if (bmi >= 18.6 && bmi <= 24.9){
    results.innerHTML = 'you are fit';
  }
  else{
    results.innerHTML = 'you are over Weight';
  }
});