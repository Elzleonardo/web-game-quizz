window.onload = function() {
  const user = localStorage.getItem('currentUser');
  if (!user) {
    window.location.href = 'index.html';
  } else {
    document.getElementById('userWelcome').innerText = 'Halo, ' + user;
  }
};