// estoque pode conter:
// nome produto,
// id produto,
// quantidade,
// material.

// cliente:
// nome cliente,
// telefone,
// cpf,
// nome loja (se vender o produto em lojas),
// quatidade produto,
// id produto.           



// CRIAÇÃO DA CLASSE PRODUTO

class Produto {
    private _id: number
    private _nomeProduto: string
    private _quantidade: number
    private _material: string
    private _valor: number

    constructor(id:number, nome:string, quantidade: number, material: string, valor: number){
        this._id = id
        this._nomeProduto = nome
        this._quantidade = quantidade
        this._material = material
        this._valor = valor
    }

    getId(): number {
        return this._id
    }
    getNome(): string {
        return  this._nomeProduto
    }
    getQuat(): number {
        return this._quantidade
    }
    getMaterial(): string {
        return this._material
    }

    mostrarProduto(): void {
        console.log("===== PRODUTO =====");
        console.log("ID: "+ this._id);
        console.log("Nome: "+ this._nomeProduto);
        console.log("Quantidade:"+ this._quantidade);
        console.log("Material:"+ this._material);
        console.log("===================");
}
}

// CRIAÇÃO DA CLASSE CLIENTE

class Cliente {
    private _nome: string
    private _telefone: number
    private _cpf: number
    private _endereco: string
    private _cnpj: string = ""

    constructor(nome: string, telefone: number, cpf: number, endereco: string){
        this._nome = nome
        this._telefone = telefone
        this._cpf = cpf
        this._endereco = endereco
    }

    getNome(): string {
        return  this._nome
    }

    mostrarCliente(): void {
        console.log("===== CLIENTE =====")
        console.log("Nome: " + this._nome)
        console.log("Telefone: " + this._telefone)
        console.log("CPF: " + this._cpf)
        console.log("Endereço: " + this._endereco)
        console.log("===================")

}
    // compra(): {
    //     let produto:Produto = new Produto ()
    // }

}
class Venda {
    private cliente:Cliente
    private produto:Produto
    quantidade: string
    loja: string

    constructor(cliente:Cliente, produto:Produto, quantidade: string , loja:string){
        this.cliente = cliente
        this.produto = produto
        this.quantidade = quantidade
        this.loja = loja
    }

    mostrarVenda(): void {
        console.log("===== VENDA =====")
        console.log("Cliente: " + this.cliente.getNome())
        console.log("Produto: " + this.produto.getNome())
        console.log("Quantidade: " + this.quantidade)
        console.log("Loja: " + this.loja)
        console.log("=================")
}
    

}
let cadastro:number = Number(prompt("Digite 1-Cadastrar Cliente, 2-Cadastrar Produto, 3-compra, 4-alterar produto 5-alterar cliente, 6-sair"))

    if(cadastro == 1){
        
    }

let cliente:Cliente = new Cliente ("Joao",123, 4577, "rua k")

cliente.mostrarCliente()

let produto:Produto = new Produto(1, "almofada", 10,"plastico", 40 )

produto.mostrarProduto()

