function convertTemperature() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    var kelvinInput = document.getElementById('kelvin');
  
    var celsiusValue = parseFloat(celsiusInput.value);
    var fahrenheitValue = parseFloat(fahrenheitInput.value);
    var kelvinValue = parseFloat(kelvinInput.value);
  
    if (!isNaN(celsiusValue)) {
      fahrenheitInput.value = (celsiusValue * 9 / 5) + 32;
      kelvinInput.value = celsiusValue + 273.15;
    } else if (!isNaN(fahrenheitValue)) {
      celsiusInput.value = (fahrenheitValue - 32) * 5 / 9;
      kelvinInput.value = (fahrenheitValue - 32) * 5 / 9 + 273.15;
    } else if (!isNaN(kelvinValue)) {
      celsiusInput.value = kelvinValue - 273.15;
      fahrenheitInput.value = (kelvinValue - 273.15) * 9 / 5 + 32;
    } else {
      alert('Please enter a valid temperature value.');
    }
  }
  