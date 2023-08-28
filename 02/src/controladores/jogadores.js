const jogadores = require('../../bancodedados');


let contador = 0;

const vezDeQuem = (req,res)=>{
    if (contador >= jogadores.length) {
        contador = 0; // Reinicia o contador quando todos os jogadores foram retornados
    }

    const jogadorAtual = jogadores[contador];
    contador++;

    res.send(`É a vez de ${jogadorAtual} jogar!`);
};

const remover = (req,res)=>{
    const { indice } = req.query;

    if (indice !== undefined) {
        const indexToRemove = parseInt(indice);

        if (!isNaN(indexToRemove) && indexToRemove >= 0 && indexToRemove < jogadores.length) {
            const jogadorRemovido = jogadores.splice(indexToRemove, 1)[0]; // Remove e pega o jogador removido
            res.send(jogadores);
        } else {
            res.send("Índice inválido. Nenhum jogador foi removido.");
        }
    } else {
        res.send("Por favor, forneça o parâmetro 'indice' na URL para remover um jogador.");
    }
};

const adicionar = (req,res)=>{
    const { nome, indice } = req.query;

    if (nome !== undefined) {
        const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

        if (indice !== undefined) {
            const indexToInsert = parseInt(indice);

            if (!isNaN(indexToInsert) && indexToInsert >= 0 && indexToInsert <= jogadores.length) {
                jogadores.splice(indexToInsert, 0, nomeFormatado);
                res.send(jogadores);
            } else {
                res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`);
            }
        } else {
            jogadores.push(nomeFormatado);
            res.send(jogadores);
        }
    } else {
        res.send("Por favor, forneça o parâmetro 'nome' na URL para adicionar um jogador.");
    }

}


module.exports = {
    vezDeQuem,
    remover,
    adicionar

}