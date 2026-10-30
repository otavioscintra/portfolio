const fundo = document.getElementById('fundo-certificado');
const imagem = fundo.querySelector('img');
const botaoFechar = fundo.querySelector('.fechar-certificado');
let botaoAberto;

function abrirCertificado(caminho) {
  imagem.src = caminho;
  fundo.hidden = false;
  document.body.style.overflow = 'hidden';
  botaoFechar.focus();
}

function fecharCertificado() {
  fundo.hidden = true;
  imagem.removeAttribute('src');
  document.body.style.overflow = '';
  botaoAberto.focus();
}

document.querySelectorAll('[data-certificado]').forEach(function (botao) {
  botao.addEventListener('click', function () {
    botaoAberto = botao;
    abrirCertificado(botao.getAttribute('data-certificado'));
  });
});

botaoFechar.addEventListener('click', fecharCertificado);

fundo.addEventListener('click', function (evento) {
  if (evento.target === fundo) {
    fecharCertificado();
  }
});

document.addEventListener('keydown', function (evento) {
  if (fundo.hidden) {
    return;
  }
  if (evento.key === 'Escape') {
    fecharCertificado();
  }
  if (evento.key === 'Tab') {
    evento.preventDefault();
    botaoFechar.focus();
  }
});