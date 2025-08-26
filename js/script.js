
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-items');

const enterprise = document.getElementById('enterprise');
const responsible = document.getElementById('responsible');
const contact = document.getElementById('contact');
const description = document.getElementById('description');

const but = document.getElementById('button');

but.addEventListener('click', async (even) => {
  even.preventDefault();

  if (!enterprise.value || !responsible.value || !contact.value || !description.value) return alert('Fields required *')

  const data = {
    enterprise: enterprise.value,
    responsible: responsible.value,
    contact: validPhone(contact.value),
    description: description.value,
  }

  await requestPost('/create/called', 'POST', data);

})

const requestPost = async (route = '', method = '', data = '') => {
  const request = await fetch(`http://localhost:4000${route}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  return alert('Tudo certo: Solicitação enviada!')
}

menuBtn.addEventListener('click', (e) => {
  e.preventDefault()
  menuBtn.classList.toggle('active');
  menu.classList.toggle('show');
});

function validPhone(fone) {
  // Remove tudo que não for número
  const onlyNumbers = fone.replace(/\D/g, "");

  // Verifica se tem exatamente 11 dígitos
  if (onlyNumbers.length !== 11) {
    return alert("Telefone inválido: precisa ter 11 dígitos");
  }

  const ddd = parseInt(onlyNumbers.substring(0, 2), 10);

  // Valida se DDD está entre 11 e 98
  if (ddd < 11 || ddd > 98) {
    return alert("Telefone inválido: DDD fora da faixa 11-98");
  }

  // Formata para +55 (00) 00000-0000
  return onlyNumbers.replace(
    /^(\d{2})(\d{5})(\d{4})$/, "+55 ($1) $2-$3"
  );
}
