const express = require('express');
const app = express();

//logging
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service:"calculator-microservice"},
    transports:[
        new winston.transports.Console({
            format: winston.format.simple()
        }),
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'})
    ],
});

if (process.env.NODE_ENV !== 'production'){
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

//Function for add, subtract, multiply, divide
const add = (n1,n2) => {
    return n1+n2
}

const subtract = (n1,n2) => {
    return n1-n2
}

const multiply = (n1,n2) =>{
    return n1*n2
}

const divide = (n1,n2) =>{
    return n1/n2
}

// Utility function to validate input
function validateNumbers(num1, num2) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
  
    if (isNaN(n1)) {
        logger.error('n1 is incorrectly defined');
        throw new Error('n1 is incorrectly defined');
    }
    if (isNaN(n2)) {
        logger.error('n2 is incorrectly defined');
        throw new Error('n2 is incorrectly defined');
    }
    if(n1 == NaN || n2 == NaN) {
        console.log()
        throw new Error('Parsing Error');
    }
    return { n1, n2 };
}

//Additional endpoint
app.get('/add',(req, res) => {
    try{
        const {n1,n2} = validateNumbers(req.query.n1, req.query.n2);
        logger.info('Parameters '+ n1 +' and '+ n2 +' received for addition');
        const result = add(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    }catch(error){
        console.log(error)
        res.status(500).json({statuscode:500, msg:error.toString()});
    }
});

//Subtraction endpoint
app.get('/subtract',(req, res) => {
    try{
        const {n1,n2} = validateNumbers(req.query.n1, req.query.n2);
        logger.info('Parameters '+ n1 +' and '+ n2 +' received for subtraction');
        const result = subtract(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    }catch(error){
        console.log(error)
        res.status(500).json({statuscode:500, msg:error.toString()});
    }
});

//Multiplication endpoint
app.get('/multiply',(req, res) => {
    try{
        const {n1,n2} = validateNumbers(req.query.n1, req.query.n2);
        logger.info('Parameters '+ n1 +' and '+ n2 +' received for multiplication');
        const result = multiply(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    }catch(error){
        console.log(error)
        res.status(500).json({statuscode:500, msg:error.toString()});
    }
});

//Division endpoint
app.get('/divide',(req, res) => {
    try{
        const {n1,n2} = validateNumbers(req.query.n1, req.query.n2);
        logger.info('Parameters '+ n1 +' and '+ n2 +' received for division');
        const result = divide(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    }catch(error){
        console.log(error)
        res.status(500).json({statuscode:500, msg:error.toString()});
    }
});

//Start server
const port = 3040;
app.listen(port,()=>{
    console.log("hello I'm listening to port "+port);
})