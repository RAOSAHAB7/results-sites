document.getElementById('resultForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const time = document.getElementById('time').value;
  const result = document.getElementById('result').value;

  const results = JSON.parse(localStorage.getItem('results')) || [];
  results.push({ name, time, result });
  localStorage.setItem('results', JSON.stringify(results));

  alert('Result saved successfully!');
});
