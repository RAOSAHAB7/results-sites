document.getElementById('resultForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const time = document.getElementById('time').value;
  const result = document.getElementById('result').value;

  const token = localStorage.getItem('token');
  
  const response = await fetch('http://localhost:3000/results', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ name, time, result })
  });

  if (response.ok) {
    alert('Result uploaded successfully');
  } else {
    alert('Failed to upload result');
  }
});
