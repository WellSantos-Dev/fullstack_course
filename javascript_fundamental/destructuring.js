const cliente = {
    nome: 'Wellington',
    email: 'well@gmail.com',
    compras: {
      digitais: {
        livros: ['Livro 1', 'Livro 2'],
        videos: ['Video JS', 'Video HTML']
      },
      fisicas: {
        cadernos: ['Caderno 1']
      }
    }
  }

  const {livros: livrosHistoria, videos} = cliente.compras.digitais;
  const {email = 'teste@teste'} = cliente

  console.log(email)

  console.log(livrosHistoria, videos)



  const frutas = ['banana', 'maçã', 'Uva', 'Morango']
  const [primeira, , segunda, terceira] = frutas

  console.log(segunda)
