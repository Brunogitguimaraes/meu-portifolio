
const sr = ScrollReveal({ reset: true });

function newAba(){
    window.open(URL, '_blank')
}


// Inicializando o ScrollReveal
ScrollReveal().reveal('#home .sobre', {
    duration: 1000,
    delay: 200,
    origin: 'bottom',
    distance: '50px',
    opacity: 0,
    easing: 'ease-out',
  });
  
  ScrollReveal().reveal('#inicio .cabeçalho', {
    duration: 1000,
    delay: 400,
    origin: 'left',
    distance: '50px',
    opacity: 0,
  });
  
  ScrollReveal().reveal('#projetos .titulo-secao', {
    duration: 1000,
    delay: 200,
    origin: 'top',
    distance: '50px',
    opacity: 0,
  });
  
  ScrollReveal().reveal('.card-projeto', {
    duration: 1000,
    delay: 300,
    origin: 'bottom',
    distance: '50px',
    opacity: 0,
    interval: 200, // Intervalo entre animações de cartões
  });
  
  ScrollReveal().reveal('#sobre', {
    duration: 1000,
    delay: 300,
    origin: 'right',
    distance: '50px',
    opacity: 0,
  });
  
  ScrollReveal().reveal('#contatos .titulo-secao', {
    duration: 1000,
    delay: 300,
    origin: 'top',
    distance: '50px',
    opacity: 0,
  });
  
  ScrollReveal().reveal('.botoes-contatos a', {
    duration: 1000,
    delay: 300,
    origin: 'bottom',
    distance: '50px',
    opacity: 0,
    interval: 200, // Intervalo entre animações de botões de contato
  });
  