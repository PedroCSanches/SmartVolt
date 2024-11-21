let carrinho = {};
let totalQuantity = 0;
let totalValue = 0;

// Adiciona item ao carrinho
function adicionarCarrinho(item, price) {
    if (carrinho[item]) {
        carrinho[item].quantity++;
    } else {
        carrinho[item] = { quantity: 1, price: price };
    }
    atualizaCarrinho();
}

// Atualiza a exibição do carrinho
function atualizaCarrinho() {
    const carrinhoElement = document.getElementById('carrinho');
    carrinhoElement.innerHTML = '';
    totalQuantity = 0;
    totalValue = 0;

    for (const item in carrinho) {
        const carrinhoItem = document.createElement('div');
        carrinhoItem.className = 'carrinho-item';
        carrinhoItem.innerHTML = `
            <div>${item}</div>
            <div class="quantity">${carrinho[item].quantity}</div>
            <button class="add" onclick="changeQuantity('${item}', 1)">+</button>
            <button class="remove" onclick="changeQuantity('${item}', -1)">-</button>
        `;
        carrinhoElement.appendChild(carrinhoItem);
        totalQuantity += carrinho[item].quantity;
        totalValue += carrinho[item].quantity * carrinho[item].price;
    }

    document.getElementById('totalQuantity').innerText = totalQuantity;
    document.getElementById('totalValue').innerText = totalValue;
}

// Altera a quantidade de um item
function changeQuantity(item, change) {
    carrinho[item].quantity += change;
    if (carrinho[item].quantity <= 0) {
        delete carrinho[item];
    }
    atualizaCarrinho();
}
