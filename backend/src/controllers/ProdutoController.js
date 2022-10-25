const ModelProduto = require('../models/produto');

module.exports = 
{
    async List(req,res)
    {
        try {
            const produtos = await ModelProduto.findAll();
            return res.json(produtos)
        } catch (erro) {
            return console.error("Erro na List: ", erro)
        }
    },

    async Create(req,res)
    {
        try {
            const produtos = await ModelProduto.create(
                {
                    id : req.body.id,
                    nome : req.body.nome,
                    funcionario : req.body.funcionario,
                    observacoes : req.body.observacoes,
                    codigo : req.body.codigo,
                    images : req.body.images
                }
            );

            return res.json(produtos)
        } catch (erro) {
            return console.error("Erro na Create: ", erro)
        }
    },

    async Update(req,res)
    {
        try {
            const prod = await ModelProduto.findByPk(req.body.id);
            if(prod){
                prod.nome = req.body.nome;
                prod.funcionario = req.body.funcionario;
                prod.observacoes = req.body.observacoes;
                prod.codigo = req.body.codigo;
                prod.images = req.body.images;

                await prod.save
            }
            return res.json(prod)
        } catch (erro) {
            return console.error("Erro na Update: ", erro)
        }
    },

    async GetOne(req,res)
    {
        try {
            const prod = await ModelProduto.findByPk(req.body.id);
            return res.json(prod)
        } catch (erro) {
            return console.error("Erro na GetOne: ", erro)
        }
    },

    async Delete(req,res)
    {
        try {
            const prod = await ModelProduto.findByPk(req.body.id);
            await prod.destroy();
            return res.json(prod)
        } catch (erro) {
            return console.error("Erro na Delete: ", erro)
        }
    },


}