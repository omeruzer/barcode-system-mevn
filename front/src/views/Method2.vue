<template>
  <div>
    <div class="container p-5">
      <h3>Method 2</h3>
    <form @submit="productAdd">
    <div class="mb-3">
        <label class="form-label">Location</label>
        <input type="text" v-model="location" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" v-model="name" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label">Barcode</label>
        <input type="text" v-model="barcode" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label">Amount</label>
        <input type="text" v-model="amount" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label">Sku</label>
        <input type="text" v-model="sku" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
      <List/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import List from '../components/List.vue'
    export default {
      components:{
        List
      },
        data() {
            return {
                name:'',
                location:'',
                barcode:'',
                amount:null,
                sku:''
            }
        },
        methods: {
            async productAdd(){
                const product={
                    name: this.name,
                    location:this.location,
                    barcode:this.barcode,
                    amount:this.amount,
                    sku:this.sku
                }
                await axios.post('http://localhost:3000/api/product/method2',product)
                    .then(() => {
                        this.name=''
                        this.location=''
                        this.barcode=''
                        this.amount=null
                        this.sku=''
                    }).catch((err) => {
                        console.log(err)
                    });

            }
        },
        
    }

</script>

<style lang="scss" scoped>

</style>