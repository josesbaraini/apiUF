import colecaoUf from "../dados/dados.js";

export const buscarUfs = () =>{
    return colecaoUf;
}

export const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));

};

export const buscarUfPorID = (id) =>{
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
}