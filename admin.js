document.getElementById('resultForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const newResult = document.getElementById('newResult').value;
  addResult(newResult);
});

function addResult(result) {
  let results = JSON.parse(localStorage.getItem('results')) || [];
  results.push(result);
  localStorage.setItem('results', JSON.stringify(results));
  alert('Result added successfully');
}
