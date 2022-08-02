const nome = "Lucas dos Santos"
let nome2 = ""
let pessoaDefault = {
    nome: "Lucas dos Santos",
    idade: "17",
    trabalho: "estudante"
}

let nomes = ["Lucas Santos", "Isadora Santos", "Maria Santos"]
let pessoas = [
    {
        nome: "Lucas dos Santos",
    idade: "17",
    trabalho: "estudante"
    },
    {
        nome: "Isadora Santos",
    idade: "16",
    trabalho: "Quimica"
    }
]

function alterarNome() {
    nome2 = "Maria Silva"
    console.log("Valor alterado:")
    console.log(name2)
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log ("Nome:")
console.log (pessoa.nome)

console.log ("Idade:")
console.log (pessoa.idade)

console.log ("Trabalho:")
console.log (pessoa.trabalho)
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("-------IMPRIMIR PESSOAS-------")
    pessoas.forEach((item) =>{
        //console.log("Nome:"),
        //console.log(item.nome)

        //console.log ("Idade:")
        //console.log (pessoa.idade)

        //console.log ("Trabalho:")
        //console.log (pessoa.trabalho)
        console.log(item)
        })
}


imprimirPessoas()

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "25",
    trabalho:"porteiro"
})

imprimirPessoas()

//imprimirPessoa(pessoaDefault)
//imprimirPessoa({
//    nome: "Maria Silva",
//    idade: "30",
//    trabalho: "Designer"
//})

//recebeEalteraNome("João Silva Pereira")
//recebeEalteraNome("Maria Silva")

//alterarNome()