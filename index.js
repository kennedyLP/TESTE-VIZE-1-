document.getElementById('pass-eyes').addEventListener('mousedown', function() {
    document.getElementById('pass').type = 'text';
  });

  document.getElementById('pass-eyes').addEventListener('mouseup', function() {
    document.getElementById('pass').type = 'password';
  });

  // PARA QUE O PASSWORD NÃO FIQUE EXPOSTO APÓS MOVER A IMAGEM
  document.getElementById('pass-eyes').addEventListener('mousemove', function() {
    document.getElementById('pass').type = 'password';
  });