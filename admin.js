const ADMIN_PASSWORD = 'your_secure_password'; // Replace with your actual password

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const password = document.getElementById('adminPassword').value;
  if (password === ADMIN_PASSWORD) {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('adminContainer').style.display = 'block';
  } else {
    alert('Incorrect password. Access denied.');
  }
});

document.getElementById('resultForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const resultName = document.getElementById('resultName').value;
  const resultTime = document.getElementById('resultTime').value;
  const newResult = document.getElementById('newResult').value;
  addResult(resultName, resultTime, newResult);
});

function addResult(name, time, result) {
  let results = JSON.parse(localStorage.getItem('results')) || [];
  results.push({ name, time, result });
  localStorage.setItem('results', JSON.stringify(results));
  alert('Result added successfully');
}
 

document.getElementById('resultForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const resultName = document.getElementById('resultName').value;
  const resultTime = document.getElementById('resultTime').value;
  const newResult = document.getElementById('newResult').value;
  addResult(resultName, resultTime, newResult);
});

function addResult(name, time, result) {
  let results = JSON.parse(localStorage.getItem('results')) || [];
  results.push({ name, time, result });
  localStorage.setItem('results', JSON.stringify(results));
  alert('Result added successfully');
}
