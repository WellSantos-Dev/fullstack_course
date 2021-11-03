const pessoa = {
    nome : 'Wellington',
    idade : 19,
    endereco: {
      rua: 'São Lucas',
      numero : 777
    }
  }
  
  const {nome: n, idade: i} = pessoa;
  
  const {endereco: { rua, numero }} = pessoa;
  console.log(rua)