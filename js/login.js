function loginUser() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  const found = users.find(u => u.username === user && u.password === pass);
  if (found) {
    localStorage.setItem('currentUser', user);
    window.location.href = 'dashboard.html';
  } else {
    alert('Login gagal! Periksa username atau password.');
  }
  return false;
}