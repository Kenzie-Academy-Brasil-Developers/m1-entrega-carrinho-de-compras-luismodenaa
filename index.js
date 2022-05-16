const querySelec = (element) => document.querySelector(element)
const create = (element) => document.createElement(element)

// Selecionando body
const body = querySelec('body')

// Tag main
const main = create('main')
body.appendChild(main)

// Variavel de itens
const productsCart = [{
        id: 1,
        name: "test",
        price: 5.00,
    },
    {
        id: 2,
        name: "test2",
        price: 20.00,
    },
]

// Tag ul, listar produtos
const ulList = create('ul')
ulList.id = "ProductList"
main.appendChild(ulList)

// Tag li, dentro da ul (produtos)
const liList = create('li')
liList.id = 'ProductItem'
ulList.appendChild(liList)
ulList.innerText = 'Produtos'

// Tag ul, listar preços
const ulPrice = create('ul')
ulPrice.id = 'ProductDetai'
main.appendChild(ulPrice)

// Tag li, dentro da ul (precos)
const liPrice = create('li')
liPrice.id = 'ProductSoma'
liPrice.innerText = 'Preço'
ulPrice.appendChild(liPrice)

// Preco total
const section = create('section')
const totalPrice = create('number')
section.id = 'ProductDetails'
section.innerText = 'Total'
main.appendChild(section)
section.appendChild(totalPrice)

// Tag Button finalizar
const button = create('button')
button.id = 'botao'
button.innerText = 'Finalizar'
section.appendChild(button)

// Function para listar produtos
const listProd = document.querySelector('#ProductList')

function listasProdutos(geral) {
    for (let i = 0; i < geral.length; i++) {
        const produtos = geral[i]
        const linhaProduto = createLinha(produtos)
        listProd.appendChild(linhaProduto)
    }
}
console.log(listasProdutos(productsCart))

// Organizar
function createLinha(produtos) {

    const nome = produtos.name

    const tagLi = document.createElement('li')
    const tagName = document.createElement('p')

    tagName.innerText = `${nome}`
    tagLi.appendChild(tagName)

    return tagLi
}
console.log(createLinha(productsCart))

// Function para somar precos 
function somaValor(x) {
    let soma = 0
    for (let i = 0; i < x.length; i++) {
        soma += x[i].price
    }
    return soma
}
const somaTotal = somaValor(productsCart)

totalPrice.innerText = somaTotal

//Function para mostrar os preços 
const listPreco = document.querySelector('#ProductDetai')

function listarPrecos(value) {
    for (let i = 0; i < value.length; i++) {
        const valores = value[i]
        const linhaPreco = createLinhapre(valores)
        listPreco.appendChild(linhaPreco)
    }
}
console.log(listarPrecos(productsCart))


function createLinhapre(valores) {

    const precos = valores.price

    const tagLII = document.createElement('li')
    const tagNamepre = document.createElement('p')

    tagNamepre.innerText = `${precos},00`
    tagLII.appendChild(tagNamepre)

    return tagLII
}
console.log(createLinhapre(productsCart))