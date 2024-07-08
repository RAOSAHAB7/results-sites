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
