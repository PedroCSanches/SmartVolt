let carrinho = {};
let quantidadeTotal = 0;
let valorTotal = 0;

function adicionarCarrinho(item, price) {
    if (carrinho[item]) {
        carrinho[item].quantity++;
    } else {
        carrinho[item] = { quantity: 1, price: price };
    }
    atualizaCarrinho();
}

function atualizaCarrinho() {
    const carrinhoElement = document.getElementById('carrinho');
    carrinhoElement.innerHTML = '';
    quantidadeTotal = 0;
    valorTotal = 0;

    for (const item in carrinho) {
        const carrinhoItem = document.createElement('div');
        carrinhoItem.className = 'carrinho-item';
        carrinhoItem.innerHTML = `
            <div>${item}</div>
            <div class="quantity">${carrinho[item].quantity}</div>
            <button class="add" onclick="MudaQuantidade('${item}', 1)">+</button>
            <button class="remove" onclick="MudaQuantidade('${item}', -1)">-</button>
        `;
        carrinhoElement.appendChild(carrinhoItem);
        quantidadeTotal += carrinho[item].quantity;
        valorTotal += carrinho[item].quantity * carrinho[item].price;
    }

    document.getElementById('quantidadeTotal').innerText = quantidadeTotal;
    document.getElementById('valorTotal').innerText = valorTotal;
}

function MudaQuantidade(item, change) {
    carrinho[item].quantity += change;
    if (carrinho[item].quantity <= 0) {
        delete carrinho[item];
    }
    atualizaCarrinho();
}
