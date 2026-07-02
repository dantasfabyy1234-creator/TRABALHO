// estoque pode conter:
// nome produto
// id produto
// quantidade
// material

// cliente:
// nome cliente
// telefone
// cpf
// nome loja (se vender o produto em lojas)
// quatidade produto
// id produto





class Cliente{
    nome:string
    contato:number
    cpf:number

    constructor(nome:string, contato:number, cpf:number){
        this.nome = nome
        this.contato = contato
        this.cpf = cpf
    }
}
class Produto{
    nomeProduto: string
    material: string
    idProduto: number

    constructor(nomeProduto: string, material: string, idProduto: number){
        this.nomeProduto = nomeProduto
        this.material = material
        this.idProduto = idProduto
    }

}