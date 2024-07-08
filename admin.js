<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Panel</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="container">
      <h1>Admin Panel</h1>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="admin.html">Admin</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <div class="container" id="loginContainer">
      <h2>Admin Login</h2>
      <form id="loginForm">
        <input type="password" id="adminPassword" required placeholder="Enter Password">
        <button type="submit">Login</button>
      </form>
    </div>
    <div class="container" id="adminContainer" style="display: none;">
      <h2>Add New Results</h2>
      <form id="resultForm">
        <input type="text" id="resultName" placeholder="Enter Name" required>
        <input type="time" id="resultTime" required>
        <input type="number" id="newResult" min="0" max="99" required placeholder="Enter Result (00-99)">
        <button type="submit">Add Result</button>
      </form>
    </div>
  </main>
  <footer>
    <div class="container">
      <p>© 2024 Satta Results</p>
    </div>
  </footer>
  <script src="admin.js"></script>
</body>
</html>
('resultForm').addEventListener('submit', function(event) {
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
