function copyText() {
  // Obtém o texto a ser copiado
  var texto = document.getElementById("textoParaCopiar").textContent;

  // Cria uma área de transferência (textarea)
  var areaDeTransferencia = document.createElement("textarea");

  // Coloca o texto na área de transferência
  areaDeTransferencia.value = texto;

  // Adiciona a área de transferência ao documento
  document.body.appendChild(areaDeTransferencia);

  // Seleciona o texto na área de transferência
  areaDeTransferencia.select();

  // Copia o texto na área de transferência
  document.execCommand("copy");

  // Remove a área de transferência do documento
  document.body.removeChild(areaDeTransferencia);

  // Alerta o usuário que o texto foi copiado
  alert("CHAVE PIX COPIADA COM SUCESSO!");
}
