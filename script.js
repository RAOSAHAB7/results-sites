document.addEventListener('DOMContentLoaded', function() {
  const results = JSON.parse(localStorage.getItem('results')) || [];
  const resultsDiv = document.getElementById('results');

  results.forEach(result => {
    const resultElement = document.createElement('div');
    resultElement.className = 'result-item';
    resultElement.innerHTML = `<h3>${result.name} (${result.time})</h3><p>Result: ${result.result}</p>`;
    resultsDiv.appendChild(resultElement);
  });
});
