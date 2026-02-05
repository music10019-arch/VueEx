<script setup>

</script>

<template>
    <div class="product-card">
        <h3 class="product-name">"商品"</h3>
        <p class="product-price">"$價格"</p>
        <button class="add-btn">
            加入購物車
        </button>
    </div>
</template>


<style scoped>
.product-card {
    width: 220px;
    padding: 16px;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

.product-name {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
}

.product-price {
    font-size: 16px;
    color: #e53935;
    margin-bottom: 16px;
}

.add-btn {
    width: 100%;
    padding: 10px 0;
    border: none;
    border-radius: 8px;
    background-color: #42b883;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.add-btn:hover {
    background-color: #369f6e;
}
</style>