const protudo = [
    {
        id: 1,
        name: 'iPhone 4',
        price: 10,
        quantidade: 1,
        dualSim: false,
        capacidade: '64GB',
        imagem: 'https://s2-techtudo.glbimg.com/AE-SIcuBBsLCUGhpHwHutMiFr8w=/400x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2013/08/13/iphone-4-blackpreto-16gb-desbloqueado_mlb-f-3990992434_032013_2.jpg',
        descricao: 'Um smartphone clássico com excelente desempenho.',
    },
    {
        id: 2,
        name: 'Galaxy Samsung A13',
        price: 20,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'https://m.media-amazon.com/images/I/81wl7GtAWDL._AC_SX679_.jpg',
        descricao: 'Um smartphone acessível com recursos impressionantes.',
    },
    {
        id: 3,
        name: 'Galaxy M54 5G',
        price: 999.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '256GB',
        imagem: 'https://m.media-amazon.com/images/I/51M3d9SXNxL._AC_SX425_.jpg',
        descricao: 'Um smartphone 5G com ótimo desempenho e tela de alta resolução.',
    },
    {
        id: 4,
        name: 'Redmi Note 12',
        price: 2099.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'https://m.media-amazon.com/images/I/61p79A67kPL.__AC_SX300_SY300_QL70_ML2_.jpg',
        descricao: 'Um smartphone da Xiaomi com uma ótima relação custo-benefício.',
    },
    {
        id: 5,
        name: 'Asus ROG Phone 6D Ultimate',
        price: 3769.97,
        quantidade: 1,
        dualSim: false,
        capacidade: '512GB',
        imagem: 'https://m.media-amazon.com/images/I/51EDCxCNIVL.__AC_SX300_SY300_QL70_ML2_.jpg',
        descricao: 'O smartphone definitivo para jogos, com desempenho excepcional.',
    },
    {
        id: 6,
        name: 'Google Pixel 6',
        price: 799.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'https://m.media-amazon.com/images/I/813utNM+QbS._AC_SY300_SX300_.jpg',
        descricao: 'O Google Pixel 6 oferece uma experiência Android pura e ótimas câmeras.',
    },
    {
        id: 7,
        name: 'Samsung Galaxy S22',
        price: 1299.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '256GB',
        imagem: 'https://m.media-amazon.com/images/I/71vxQuUlq+L._AC_SX679_.jpg',
        descricao: 'O carro-chefe da Samsung com um design elegante e recursos avançados.',
    },
    {
        id: 8,
        name: 'OnePlus 9T',
        price: 699.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'https://m.media-amazon.com/images/I/71zfvvMDTOS.__AC_SX300_SY300_QL70_ML2_.jpg',
        descricao: 'O OnePlus 9T é conhecido por sua experiência de software limpa e eficiente.',
    },
    {
        id: 9,
        name: 'Xiaomi Mi 11',
        price: 599.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'https://m.media-amazon.com/images/I/51ypH7jScZL.__AC_SX300_SY300_QL70_ML2_.jpg',
        descricao: 'Um dispositivo da Xiaomi com ótimo desempenho e câmeras impressionantes.',
    },
    {
        id: 10,
        name: 'Huawei P50 Pro',
        price: 899.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '256GB',
        imagem: 'https://m.media-amazon.com/images/I/51M0gplIVFL.__AC_SX300_SY300_QL70_ML2_.jpg',
        descricao: 'O Huawei P50 Pro é conhecido por sua qualidade de câmera e recursos de hardware de ponta.',
    },
    {
        id: 11,
        name: 'Sony Xperia 5 III',
        price: 849.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem11.jpg',
        descricao: 'Um smartphone da Sony com um foco especial em multimídia e entretenimento.',
    },
    {
        id: 12,
        name: 'LG Velvet 2 Pro',
        price: 749.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem12.jpg',
        descricao: 'O LG Velvet 2 Pro combina estilo e desempenho em um único pacote.',
    },
    {
        id: 13,
        name: 'Motorola Edge 30',
        price: 479.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '64GB',
        imagem: 'caminho/para/imagem13.jpg',
        descricao: 'Um smartphone acessível da Motorola com uma tela grande e recursos úteis.',
    },
    {
        id: 14,
        name: 'Nokia 9.3 PureView',
        price: 599.99,
        quantidade: 1,
        dualSim: false,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem14.jpg',
        descricao: 'O Nokia 9.3 PureView se destaca pela qualidade de suas câmeras e design sólido.',
    },
    {
        id: 15,
        name: 'Oppo Find X4 Pro',
        price: 899.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '256GB',
        imagem: 'caminho/para/imagem15.jpg',
        descricao: 'O Oppo Find X4 Pro é um dispositivo premium com um design deslumbrante.',
    },
    {
        id: 16,
        name: 'Vivo V23 Pro',
        price: 669.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem16.jpg',
        descricao: 'O Vivo V23 Pro oferece uma experiência de câmera inovadora e desempenho sólido.',
    },
    {
        id: 17,
        name: 'Realme GT Master',
        price: 389.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem17.jpg',
        descricao: 'Um dispositivo Realme com desempenho eficiente e design atraente.',
    },
    {
        id: 18,
        name: 'BlackBerry Key3',
        price: 599.00,
        quantidade: 1,
        dualSim: false,
        capacidade: '64GB',
        imagem: 'caminho/para/imagem18.jpg',
        descricao: 'O BlackBerry Key3 mantém o teclado físico icônico e foco na produtividade.',
    },
    {
        id: 19,
        name: 'HTC U21 5G',
        price: 799.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem19.jpg',
        descricao: 'O HTC U21 5G é um dispositivo 5G com um foco na qualidade de áudio e multimídia.',
    },
    {
        id: 20,
        name: 'ZTE Axon 40 Pro',
        price: 699.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem20.jpg',
        descricao: 'O ZTE Axon 40 Pro é conhecido por sua qualidade de tela e design moderno.',
    },
    {
        id: 21,
        name: 'Google Pixel 7',
        price: 899.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem21.jpg',
        descricao: 'O Google Pixel 7 continua a tradição da Google de oferecer uma experiência Android pura e ótimas câmeras.',
    },
    {
        id: 22,
        name: 'Sony Xperia 6',
        price: 849.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem22.jpg',
        descricao: 'O Sony Xperia 6 oferece desempenho sólido e um design elegante.',
    },
    {
        id: 23,
        name: 'Samsung Galaxy S23',
        price: 1399.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '256GB',
        imagem: 'caminho/para/imagem23.jpg',
        descricao: 'O Samsung Galaxy S23 é um carro-chefe da Samsung com recursos avançados e uma tela impressionante.',
    },
    {
        id: 24,
        name: 'OnePlus 10',
        price: 799.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem24.jpg',
        descricao: 'O OnePlus 10 oferece uma experiência de software limpa e desempenho de ponta.',
    },
    {
        id: 25,
        name: 'Xiaomi Mi 12',
        price: 699.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem25.jpg',
        descricao: 'Um dispositivo Xiaomi com desempenho sólido e ótimas câmeras.',
    },
    {
        id: 26,
        name: 'Asus Zenfone 9',
        price: 599.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem26.jpg',
        descricao: 'O Asus Zenfone 9 combina desempenho eficiente com recursos inovadores.',
    },
    {
        id: 27,
        name: 'Huawei P60 Pro',
        price: 999.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '256GB',
        imagem: 'caminho/para/imagem27.jpg',
        descricao: 'O Huawei P60 Pro se destaca pela qualidade de suas câmeras e recursos de IA.',
    },
    {
        id: 28,
        name: 'LG V40 ThinQ',
        price: 499.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem28.jpg',
        descricao: 'O LG V40 ThinQ oferece recursos de áudio premium e um design atraente.',
    },
    {
        id: 29,
        name: 'Motorola Moto G8',
        price: 249.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '64GB',
        imagem: 'caminho/para/imagem29.jpg',
        descricao: 'Um smartphone acessível da Motorola com desempenho sólido para o uso diário.',
    },
    {
        id: 30,
        name: 'Nokia 10',
        price: 599.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem30.jpg',
        descricao: 'O Nokia 10 é conhecido por sua durabilidade e experiência Android pura.',
    },
    {
        id: 31,
        name: 'Oppo Reno 8',
        price: 799.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem31.jpg',
        descricao: 'O Oppo Reno 8 é conhecido por sua qualidade de câmera e design elegante.',
      },
      {
        id: 32,
        name: 'Vivo V24 Pro',
        price: 699.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem32.jpg',
        descricao: 'O Vivo V24 Pro oferece desempenho eficiente e recursos inovadores de câmera.',
      },
      {
        id: 33,
        name: 'Realme GT Pro 2',
        price: 459.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem33.jpg',
        descricao: 'O Realme GT Pro 2 é um dispositivo acessível com desempenho sólido e design atraente.',
      },
      {
        id: 34,
        name: 'BlackBerry Key4',
        price: 629.00,
        quantidade: 1,
        dualSim: false,
        capacidade: '64GB',
        imagem: 'caminho/para/imagem34.jpg',
        descricao: 'O BlackBerry Key4 mantém o icônico teclado físico e foco na produtividade.',
      },
      {
        id: 35,
        name: 'HTC U22 5G',
        price: 699.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem35.jpg',
        descricao: 'O HTC U22 5G é um smartphone 5G com foco em qualidade de áudio e entretenimento.',
      },
      {
        id: 36,
        name: 'ZTE Axon 50 Pro',
        price: 599.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem36.jpg',
        descricao: 'O ZTE Axon 50 Pro se destaca pela qualidade de sua tela e design moderno.',
      },
      {
        id: 37,
        name: 'Google Pixel 8',
        price: 999.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem37.jpg',
        descricao: 'O Google Pixel 8 continua a tradição da Google de oferecer uma experiência Android pura e ótimas câmeras.',
      },
      {
        id: 38,
        name: 'Sony Xperia 7',
        price: 899.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem38.jpg',
        descricao: 'O Sony Xperia 7 oferece desempenho sólido e design elegante.',
      },
      {
        id: 39,
        name: 'Samsung Galaxy S24',
        price: 1499.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '256GB',
        imagem: 'caminho/para/imagem39.jpg',
        descricao: 'O Samsung Galaxy S24 é um carro-chefe da Samsung com recursos avançados e uma tela impressionante.',
      },
      {
        id: 40,
        name: 'OnePlus 11',
        price: 899.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem40.jpg',
        descricao: 'O OnePlus 11 oferece uma experiência de software limpa e desempenho de ponta.',
      },
      {
        id: 41,
        name: 'Xiaomi Mi 13',
        price: 799.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem41.jpg',
        descricao: 'Um dispositivo Xiaomi com desempenho sólido e ótimas câmeras.',
      },
      {
        id: 42,
        name: 'Asus Zenfone 10',
        price: 699.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem42.jpg',
        descricao: 'O Asus Zenfone 10 combina desempenho eficiente com recursos inovadores.',
      },
      {
        id: 43,
        name: 'Huawei P70 Pro',
        price: 1199.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '256GB',
        imagem: 'caminho/para/imagem43.jpg',
        descricao: 'O Huawei P70 Pro se destaca pela qualidade de suas câmeras e recursos de IA.',
      },
      {
        id: 44,
        name: 'LG V50 ThinQ',
        price: 599.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem44.jpg',
        descricao: 'O LG V50 ThinQ oferece recursos de áudio premium e um design atraente.',
      },
      {
        id: 45,
        name: 'Motorola Moto G10',
        price: 299.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '64GB',
        imagem: 'caminho/para/imagem45.jpg',
        descricao: 'Um smartphone acessível da Motorola com desempenho sólido para o uso diário.',
      },
      {
        id: 46,
        name: 'Nokia 12',
        price: 699.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem46.jpg',
        descricao: 'O Nokia 12 é conhecido por sua durabilidade e experiência Android pura.',
      },
      {
        id: 47,
        name: 'Oppo Reno 9',
        price: 899.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem47.jpg',
        descricao: 'O Oppo Reno 9 é conhecido por sua qualidade de câmera e design elegante.',
      },
      {
        id: 48,
        name: 'Vivo V25 Pro',
        price: 799.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem48.jpg',
        descricao: 'O Vivo V25 Pro oferece desempenho eficiente e recursos inovadores de câmera.',
      },
      {
        id: 49,
        name: 'Realme GT Pro 3',
        price: 499.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem49.jpg',
        descricao: 'O Realme GT Pro 3 é um dispositivo acessível com desempenho sólido e design atraente.',
      },
      {
        id: 50,
        name: 'BlackBerry Key5',
        price: 699.00,
        quantidade: 1,
        dualSim: false,
        capacidade: '64GB',
        imagem: 'caminho/para/imagem50.jpg',
        descricao: 'O BlackBerry Key5 mantém o icônico teclado físico e foco na produtividade.',
      },
      {
        id: 51,
        name: 'HTC U23 5G',
        price: 799.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem51.jpg',
        descricao: 'O HTC U23 5G é um smartphone 5G com foco em qualidade de áudio e entretenimento.',
      },
      {
        id: 52,
        name: 'ZTE Axon 60 Pro',
        price: 699.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem52.jpg',
        descricao: 'O ZTE Axon 60 Pro se destaca pela qualidade de sua tela e design moderno.',
      },
      {
        id: 53,
        name: 'Google Pixel 9',
        price: 1099.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem53.jpg',
        descricao: 'O Google Pixel 9 continua a tradição da Google de oferecer uma experiência Android pura e ótimas câmeras.',
      },
      {
        id: 54,
        name: 'Sony Xperia 8',
        price: 999.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem54.jpg',
        descricao: 'O Sony Xperia 8 oferece desempenho sólido e design elegante.',
      },
      {
        id: 55,
        name: 'Samsung Galaxy S25',
        price: 1699.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '256GB',
        imagem: 'caminho/para/imagem55.jpg',
        descricao: 'O Samsung Galaxy S25 é um carro-chefe da Samsung com recursos avançados e uma tela impressionante.',
      },
      {
        id: 56,
        name: 'OnePlus 12',
        price: 999.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem56.jpg',
        descricao: 'O OnePlus 12 oferece uma experiência de software limpa e desempenho de ponta.',
      },
      {
        id: 57,
        name: 'Xiaomi Mi 14',
        price: 899.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem57.jpg',
        descricao: 'Um dispositivo Xiaomi com desempenho sólido e ótimas câmeras.',
      },
      {
        id: 58,
        name: 'Asus Zenfone 11',
        price: 799.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem58.jpg',
        descricao: 'O Asus Zenfone 11 combina desempenho eficiente com recursos inovadores.',
      },
      {
        id: 59,
        name: 'Huawei P80 Pro',
        price: 1299.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '256GB',
        imagem: 'caminho/para/imagem59.jpg',
        descricao: 'O Huawei P80 Pro se destaca pela qualidade de suas câmeras e recursos de IA.',
      },
      {
        id: 60,
        name: 'LG V60 ThinQ',
        price: 699.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem60.jpg',
        descricao: 'O LG V60 ThinQ oferece recursos de áudio premium e um design atraente.',
      },
      {
        id: 61,
        name: 'Motorola Moto G12',
        price: 349.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '64GB',
        imagem: 'caminho/para/imagem61.jpg',
        descricao: 'Um smartphone acessível da Motorola com desempenho sólido para o uso diário.',
      },
      {
        id: 62,
        name: 'Nokia 14',
        price: 799.99,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem62.jpg',
        descricao: 'O Nokia 14 é conhecido por sua durabilidade e experiência Android pura.',
      },
      {
        id: 63,
        name: 'Oppo Reno 10',
        price: 999.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem63.jpg',
        descricao: 'O Oppo Reno 10 é conhecido por sua qualidade de câmera e design elegante.',
      },
      {
        id: 64,
        name: 'Vivo V26 Pro',
        price: 899.00,
        quantidade: 1,
        dualSim: true,
        capacidade: '128GB',
        imagem: 'caminho/para/imagem64.jpg',
        descricao: 'O Vivo V26 Pro oferece desempenho eficiente e recursos inovadores de câmera.',
      },
];
const isShow = document.querySelector(
    '.eyes'
)
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
        <div id="${item.id}" class='protudo'>                
            <span>${item.id}</span>
            <span>${item.name}</span>
            <span>$ ${item.price}</span>
            <span><button id="${item.id}" class='see'>Ver</button></span>
            <span><span id="${item.id}" class="return">-</span>${item.quantidade}<span id="${item.id}" class="buy vida">+</span></span>
        </div>`
    )
}
function details(items) {
    return (
        `
            <div class="title">
                <span>${items.name}</span>
                <span class="close">Voltar</span>
            </div>
            <div class="card">
                <img src="${items.imagem}" alt="">
                <div class="more">
                    <div class="span">Dual Sim: ${items.dualSim}</div>
                    <div class="span">Capacidade: ${items.capacidade}</div>
                    <div class="span">
                    ${items.descricao}
                    </div>
                </div>
            </div>
        
        `
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
        }) : document.querySelector('.total').innerHTML = "$ 0";
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
    if (event.target.classList.contains('see')) {
        const productId = event.srcElement.id;
        show_details(Number(productId));
    }
    if (event.target.classList.contains('close')) {
        close()
    }
});
const checked = () => {
    document.addEventListener('click', (e) => {
        sacolaVirtual.forEach(item => {
            const chechk = document.getElementById(`${item.id}`)
            chechk.classList.add('checked')

        })
    })
}
function close() {
    isShow.style.display = 'none'
}
const show_details = (id) => {
    const items = protudo.find(item => item.id === id);
    isShow.style.display = 'flex'
    isShow.innerHTML = details(items)
}
checked()
general()