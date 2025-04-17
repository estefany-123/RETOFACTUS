const express = require('express');
const app = express();
const cors = require('cors');
const { PrismaClient } = require('./src/generated/prisma');

const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get('/clientes', async(req, res) => {

    const clientes = await prisma.client.findMany();

    res.json(clientes);
});

app.get('/productos', async(req,res) => {
    
    const productos = await prisma.product.findMany();

    res.json(productos);
})

app.listen(3000,()=>{
    console.log("Server runnning on port 3000");
})