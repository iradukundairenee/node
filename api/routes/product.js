const express=require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message:'get request'
    });
});

router.post('/', (req,res,next) =>{
    const product = {
        name: req.body.name,
        price: req.body.price,

    }
    res.status(201).json({
        message:'post request',
        createdProduct:product
    });
    });

    router.get('/:productId',(req,res,next) => {

        const id=req.params.productId;
        if(id==='special'){
       
            res.status(200).json({
                message:"you discovered special Id"
                
            });
        }
        else{
            res.status(200).json({
                message:"you passed an Id"
            });

        }
    })

router.patch('/:productId', (req,res,next) =>{
    res.status(200).json({
           message:'update request'
        });
        });
    
        router.delete('/:productId', (req,res,next) =>{
           res.status(200).json({
                message:'delete request'
            });
});

module.exports = router;