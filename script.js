async function fetchResults() {
  try {
    const response = await fetch('https://api.example.com/results'); // Replace with the actual URL
    const data = await response.json();
    displayResults(data);
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
    resultElement.textContent = `Result: ${result}`;
    resultsDiv.appendChild(resultElement);
  });
}

fetchResults();
