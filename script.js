async function fetchResults() {
  try {
    const results = JSON.parse(localStorage.getItem('results')) || [];
    displayResults(results);
  } catch (error) {
    console.error('Error fetching results:', error);
  }
}

function displayResults(data) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Clear existing results
  data.forEach(result => {
    const resultElement = document.createElement('div');
    resultElement.className = 'result-item';
    resultElement.innerHTML = `<h3>${result.name} (${result.time})</h3><p>Result: ${result.result}</p>`;
    resultsDiv.appendChild(resultElement);
  });
}

fetchResults();
