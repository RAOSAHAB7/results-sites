async function fetchResults() {
  try {
    const response = await fetch('https://example.com/results'); // Replace with actual URL
    const data = await response.json(); // Assuming the data is in JSON format
    displayResults(data);
  } catch (error) {
    console.error('Error fetching results:', error);
  }
}

function displayResults(data) {
  const resultsDiv = document.getElementById('results');
  data.forEach(result => {
    const resultElement = document.createElement('div');
    resultElement.textContent = `Result: ${result}`;
    resultsDiv.appendChild(resultElement);
  });
}

fetchResults();
