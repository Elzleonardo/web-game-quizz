function registerUser() {
  const user = document.getElementById('newUsername').value;
  const pass = document.getElementById('newPassword').value;
  let users = JSON.parse(localStorage.getItem('users') || '[]');

  if (users.find(u => u.username === user)) {
    alert('Username sudah terdaftar!');
    return false;
  }

  users.push({ username: user, password: pass });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registrasi berhasil!');
  window.location.href = 'index.html';
  return false;
}