// Dữ liệu sản phẩm
const products = [
    { id: 1,image: "https://via.placeholder.com/150", description: "Mô tả sản phẩm 1" },
    { id: 2,image: "https://via.placeholder.com/150", description: "Mô tả sản phẩm 2" },
    { id: 3, image: "https://via.placeholder.com/150", description: "Mô tả sản phẩm 3" },
    { id: 4, image: "https://via.placeholder.com/150", description: "Mô tả sản phẩm 4" },
];



// Hiển thị sản phẩm
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <a href="" onclick="${product.id}">${product.description}</a>
        `;
        productList.appendChild(productCard);
    });
}

// Hiển thị sản phẩm khi tải trang
displayProducts();
