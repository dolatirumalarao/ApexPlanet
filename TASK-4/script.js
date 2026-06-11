function addTask() {

    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if(task === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button class="delete-btn" onclick="this.parentElement.remove()">
            Delete
        </button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

const products = [
    {
        name:"Laptop",
        category:"electronics",
        price:900
    },
    {
        name:"Smartphone",
        category:"electronics",
        price:500
    },
    {
        name:"JS Guide",
        category:"books",
        price:25
    },
    {
        name:"HTML Handbook",
        category:"books",
        price:15
    }
];

function displayProducts() {

    let filtered = [...products];

    const category =
    document.getElementById("categoryFilter").value;

    const sort =
    document.getElementById("sortPrice").value;

    if(category !== "all"){
        filtered =
        filtered.filter(p => p.category === category);
    }

    if(sort === "low"){
        filtered.sort((a,b)=>a.price-b.price);
    }

    if(sort === "high"){
        filtered.sort((a,b)=>b.price-a.price);
    }

    const container =
    document.getElementById("productContainer");

    container.innerHTML = "";

    filtered.forEach(product=>{

        container.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: ₹${product.price}</p>
            </div>
        `;
    });
}

displayProducts();