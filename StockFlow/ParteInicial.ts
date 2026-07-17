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
    setId(id: number): void {
        this._id = id
    }
    getNome(): string {
        return this._nomeProduto
    }
    setNome(nome: string): void {
        this._nomeProduto = nome
    }
    getQuat(): number {
        return this._quantidade
    }
    setQuantidade(quantidade: number): void {
        this._quantidade = quantidade
    }
    getMaterial(): string {
        return this._material
    }
    setMaterial(material: string): void {
        this._material = material
    }
    setValor(valor: number): void {
        this._valor = valor
    }
    mostrarProduto(): void {
        alert("===== PRODUTO =====" +
        "\n ID: "+ this._id +
        "\n Nome: "+ this._nomeProduto +
        "\n Quantidade: "+ this._quantidade +
        "\n Material: "+ this._material +
        "\n Valor: "+ this._valor +
        "\n ===================")
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
        return this._nome
    }
    setNome(nome: string): void {
        this._nome = nome
    }
    getTelefone(): number {
        return this._telefone
    }
    setTelefone(telefone: number): void {
        this._telefone = telefone
    }
    getCpf(): number {
        return this._cpf
    }
    setCpf(cpf: number): void {
        this._cpf = cpf
    }
    getEndereco(): string {
        return this._endereco
    }
    setEndereco(endereco: string): void {
        this._endereco = endereco
    }
    getCnpj(): string {
        return this._cnpj
    }
    setCnpj(cnpj: string): void {
        this._cnpj = cnpj
    }
        

    mostrarCliente(): void {
        alert("===== CLIENTE ===== \n"+
        "Nome: " + this._nome +
        "\n Telefone: " + this._telefone +
        "\n CPF: " + this._cpf +
        "\n Endereço: " + this._endereco +
        "\n CNPJ: " + this._cnpj +
        "\n===================")
        
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
        alert("===== VENDA =====" +
        "\n Cliente: " + this.cliente.getNome() +
        "\n Produto: " + this.produto.getNome() +
        "\n Quantidade: " + this.quantidade +
        "\n Loja: " + this.loja +
        "\n =================")
}
    

}
let nomeCliente = "",endereco = "", op = "", cnpj = ""
let telefone = 0,cpf = 0

let cliente:Cliente = new Cliente(nomeCliente,telefone,cpf,endereco)

let id = 0, quantidade = 0, valor = 0
let nome = "", material = ""

let produto: Produto = new Produto(id, nome, quantidade, material, valor)
        

let cadastro:number = Number(prompt("==== Digite ==== \n" +
    "1-Cadastrar Cliente \n" + 
    "2-Exibir cliente \n" + 
    "3-Cadastrar Produto \n" +
    "4-Exibir Produto \n" +
    "5-compra \n" +
    "6-alterar produto \n" +
    "7-alterar dados do cliente \n" +
    "8-sair"))

while(cadastro !== 8){
    
    if(cadastro == 1){
    console.log("Cadastrar Cliente")

        nomeCliente = String(prompt("Nome:"))
        telefone = Number(prompt("Telefone:"))
        cpf = Number(prompt("CPF:"))
        endereco = String(prompt("Endereço:"))

        cliente = new Cliente(nomeCliente, telefone, cpf, endereco)

        op = String(prompt("Caso possua CNPJ, digita: S-Sim e N-não | exemplo: 00.000.000/0001-00 ")).toUpperCase()
            if(op == "S") {
                cnpj = String(prompt("Informe seu CNPJ: "))
            }
        
        alert("Cliente cadastrado com Susesso!!")
        cliente.setCnpj(cnpj)


    }else if(cadastro ==2 ){
       cliente.mostrarCliente()
    
    } else if (cadastro == 3) {
        console.log("Cadastrar Produto")

        id = Number(prompt("ID:"))
        nome = String(prompt("Nome do produto:"))
        quantidade = Number(prompt("Quantidade:"))
        material = String(prompt("Material:"))
        valor = Number(prompt("Valor:"))

        produto = new Produto(id, nome, quantidade, material, valor)
        alert("Produto cadastrado com Susesso!!")

    }else if(cadastro == 4){
        produto.mostrarProduto()

    } else if (cadastro == 5) {
        console.log("Compra")

    } else if (cadastro == 6) {
        console.log("Alterar Produto")

    } else if (cadastro == 7) {
        console.log("Alterar dados do cliente") 

    } else {
        alert("Opção inválida!")
    }
    cadastro = Number(prompt("==== Digite ==== \n" +
    "1-Cadastrar Cliente \n" + 
    "2-Exibir cliente \n" + 
    "3-Cadastrar Produto \n" +
    "4-Exibir Produto \n" +
    "5-compra \n" +
    "6-alterar produto \n" +
    "7-alterar dados do cliente \n" +
    "8-sair"))
}
console.log("Programa encerrado.")