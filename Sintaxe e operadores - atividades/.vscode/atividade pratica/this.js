function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
};

const pessoa2 = {
    nome: "Carla",
    idade: 26,
};

const animal = {
    nome:"Fiona",
    idade: 5,
    raca: "Pug"
};

// declarando como call (informação da idade separada apenas por uma virgula)
console.log(calculaIdade.call(pessoa1, 30));

// declarando como apply (informação da idade separada por colchetes)
console.log(calculaIdade(animal, [5]));