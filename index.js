const protudo = [
    {
        id: 1,
        name: 'iPhone 4',
        price: 10,
        quantidade: 1,
    },
    {
        id: 2,
        name: 'Galaxy Samsung A13',
        price: 20,
        quantidade: 1,
    },
    {
        id: 3,
        name: 'Galaxy M54 5G',
        price: 999.00,
        quantidade: 1,
    },
    {
        id: 4,
        name: 'Redmi Note 12',
        price: 2099.00,
        quantidade: 1,
    },
    {
        id: 5,
        name: 'Asus ROG Phone 6D Ultimate.',
        price: 3769.97,
        quantidade: 1,
    },
]
const list = document.querySelector('.protudos')
const sacolaVirtual = []
const mayTabelaTemp = `
    <div class="tabela">
        <span>Id</span>
        <span>Name</span>
        <span>Price</span>
        <span>Remover</span>
        <span>Comprar</span>
    </div>
`
function general() {
    listarProdutos();
    calcularTotal()
}
const insertItens = (item, index) => {
    return (
        list.innerHTML += `
        <div class='protudo'>                
            <span>${item.id}</span>
            <span>${item.name}</span>
            <span>$ ${item.price}</span>
            <span><button class='remove'>Remover</button></span>
            <span><span id="${item.id}" class="return">-</span>${item.quantidade}<span id="${item.id}" class="buy vida">+</span></span>
        </div>`
    )
}
const listarProdutos = () => {
    protudo.map((item, index) => {
        return (
            insertItens(item, index)
        )
    })
}
const buscarProdutoPorNome = () => {
    list.innerHTML = '';
    const value = document.querySelector('input').value
    const res = protudo.filter(item =>
        item.name.toLocaleLowerCase().includes(
            value.toLocaleLowerCase()
        )
    )
    if (res.length > 0) {
        list.innerHTML += mayTabelaTemp
        res.map((item, index) => {
            return (
                insertItens(item, index)
            )
        })
    }
    list.innerHTML += mayTabelaTemp
    list.innerHTML += `<h1>
        O valor ${value} não foi encontrado na loja.</h1>`

}
const calcularTotal = () => {
    console.log(sacolaVirtual)
    let total = 0;
    sacolaVirtual.length > 0 ?
        sacolaVirtual.forEach(item => {
            let add = 0;
            if (item.quantidade > 1) {
                add = item.price * item.quantidade;
                add -= item.price;
            }
            total += Number(item.price + add)
            document.querySelector('.total').innerHTML =
                (`$ ${total}`)
        }): document.querySelector('.total').innerHTML ="$ 0";
}
function adicionarAoCarrinho(id, e) {
    const items = protudo.find(item => item.id === id);
    let quant = sacolaVirtual.length > 0 && sacolaVirtual.find(item => item.id === items.id)
    if (e === "more") {
        if (quant) {
            quant.quantidade++;
            return calcularTotal();
        }
        sacolaVirtual.push(items);
    }
    calcularTotal()
    if (quant || quant.quantidade > 1) {
        if (quant.quantidade === 1) {
            const index = sacolaVirtual.indexOf(quant);
            sacolaVirtual.splice(index, 1)
        }
        quant.quantidade--;
        calcularTotal()
    }

}
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('buy')) {
        const productId = event.srcElement.id;
        adicionarAoCarrinho(Number(productId), "more");
    }
    if (event.target.classList.contains('return')) {
        const productId = event.srcElement.id;
        adicionarAoCarrinho(Number(productId), "less");
    }
});

general()