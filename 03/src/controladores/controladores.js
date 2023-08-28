const moveis = require('../../bancodedados')



const home = (req,res)=>{


    res.send(moveis)
};


const movelFiltrado = (req,res)=>{

    const movelEncontrado = moveis.find((movel)=>{
        return movel.id === Number(req.params.id)
       });


       res.send(movelEncontrado)
    
};

module.exports = {
    home,
    movelFiltrado
}