function Button(text, background) {
   this.text = text;
    this.background = background;
}

const blueButton = new Button('comprar', 'blue')
Button.prototype.height = () => {
    const createButton = document.createElement('button');
    createButton.style.background = this.background;
    createButton.innerText = this.text
    return createButton;
}

 console.log(blueButton.height())

class Carro {
    constructor(cor, modelo, rodas) {
        this.cor = cor;
        this.modelo = modelo;
        this.rodas = rodas;
    }

    ligarCarro() {
        console.log(`${this.modelo} está ligando.`)
    }
}

const ford = new Carro('Vermelho', 'Ford Ka', 4)

console.log(ford.ligarCarro())