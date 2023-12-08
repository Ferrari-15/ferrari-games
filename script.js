function cadastrar() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  var dados = `Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}`;
  alert(`Cadastro realizado com sucesso:\n\n${dados}`);

  // Redirecionar para /assets/pagamento/pgto.html
  window.location.href = "/assets/pagamento/pgto.html";
}

function toggleAudio() {
  var audio = document.getElementById("audio");
  var audioToggle = document.getElementById("audioToggle");

  if (audio.paused) {
    audio.play();
    audioToggle.innerHTML = '<img src="" alt="Ícone de Áudio">';
  } else {
    audio.pause();
    audioToggle.innerHTML = '<img src="" alt="Ícone de Áudio">';
  }
}

function registrarAcesso() {
  var informacoesUsuario = {
    navegador: navigator.userAgent,
    resolucaoTela: `${window.screen.width}x${window.screen.height}`,
    dataAcesso: new Date().toISOString(),
  };

  fetch("/registrar-acesso", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(informacoesUsuario),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Acesso registrado com sucesso.");
      } else {
        console.error("Erro ao registrar acesso:", response.statusText);
      }
    })
    .catch((error) => console.error("Erro ao registrar acesso:", error));
}
