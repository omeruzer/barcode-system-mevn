<template>
    <div class="container">
        <h3>Product List</h3>
        <table v-if="products.length > 0" >
            <tr>
                <th>#</th>
                <th>Location</th>
                <th>Name</th>
                <th>Barcode</th>
                <th>Amount</th>
                <th>SKU</th>
            </tr>
            <tr v-for="product,i in products" :key="i">
                <td>{{i+1}}</td>
                <td>{{product.location}}</td>
                <td>{{product.name}}</td>
                <td>{{product.barcode}}</td>
                <td>{{product.amount}}</td>
                <td>{{product.sku}}</td>
            </tr>
        </table>
        <div v-else>
            <span>there are no products...</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                products:[]
            }
        },
        created() {
            axios.get('http://localhost:3000/api/product/getall')
                .then((result) => {
                    this.products=result.data
                }).catch((err) => {
                    console.log(err);
                });
        },
        
    }
</script>

<style scoped>
table{
    width: 100%;
}
td{
    border:1px solid #000;
    padding: 30px;
}
tr{
    border:1px solid #000;
    
}
th{
    border:1px solid #000
}
</style>