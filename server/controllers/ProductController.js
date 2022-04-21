const Product = require('../models/Product')
const fs = require('fs')

const method1 = async (req,res)=>{
    new Product(req.body).save()
        .then(async (result)  => {

            fs.open('./text/method1.txt',()=>{
                fs.appendFileSync('./text/method1.txt',`\n${req.body.location};${req.body.barcode};${req.body.amount}`,(err)=>{
                    fs.close('./text/method1.txt')
                })
            })

            res.json(result)

        }).catch((err) => {
            res.json(err)            
        });
}

const method2 = (req,res)=>{

    new Product(req.body).save()
    .then(async (result)  => {

        fs.open('./text/method2.txt',()=>{
            fs.appendFileSync('./text/method2.txt',`\n${req.body.barcode};${req.body.amount}`,(err)=>{
                fs.close('./text/method2.txt')
            })
        })

        res.json(result)

    }).catch((err) => {
        res.json(err)            
    });

}

const method3 = (req,res)=>{

    new Product(req.body).save()
    .then(async (result)  => {

        fs.open('./text/method3.txt',()=>{
            fs.appendFileSync('./text/method3.txt',`\n${req.body.location};${req.body.barcode};${req.body.amount};${req.body.sku};${req.body.name}`,(err)=>{
                fs.close('./text/method3.txt')
            })
        })

        res.json(result)

    }).catch((err) => {
        res.json(err)            
    });

}

const getAll = (req,res)=>{
    Product.find().sort({ date: -1 })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
            
        });
}

module.exports = {
    method1,
    method2,
    method3,
    getAll,
}