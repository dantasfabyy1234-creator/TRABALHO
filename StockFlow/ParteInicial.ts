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
    private nome:string
    private contato:number
    private cpf:number
    private tipoCliente:string//PF ou CNPJ 
    private endereco: string


    constructor(nome:string, contato:number, cpf:number, tipoCliente:string, endereco:string){
        this.nome = nome
        this.contato = contato
        this.cpf = cpf
        this.tipoCliente = tipoCliente
        this.endereco = endereco
    }
}

class Estoque{
    nomeProduto: string
    material: string
    idProduto: number
    quantidade: number
    preco: number

    constructor(nomeProduto: string, material: string, idProduto: number, quantidade: number, preco: number){
        this.nomeProduto = nomeProduto
        this.material = material
        this.idProduto = idProduto
        this.quantidade = quantidade
        this.preco = preco 

    }
     
    venda(quantidade, idProduto): 
}

let vetor[]:Estoque 

class Venda{
    constructor(nome:string){
        super(nome)
    }

}
