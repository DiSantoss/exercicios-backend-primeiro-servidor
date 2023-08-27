
const controladorSoma = (req,res) =>{

    const { num1,num2 } = req.query;

    const resultado = parseFloat(num1) + parseFloat(num2);

    res.send(resultado.toString())


};  

const controladorSub = (req,res) =>{

    const { num1,num2 } = req.query;

    const resultado = parseFloat(num1) - parseFloat(num2);

    res.send(resultado.toString())
};

const controladorMulti = (req,res) =>{
    
    const { num1,num2 } = req.query;

    const resultado = parseFloat(num1) * parseFloat(num2);

    res.send(resultado.toString())
};

const controladorDiv = (req,res) =>{

    const { num1,num2 } = req.query;

    const resultado = parseFloat(num1) / parseFloat(num2);

    res.send(resultado.toString())
};


module.exports = {
    controladorSoma,
    controladorSub,
    controladorMulti,
    controladorDiv
}