import Moment from "moment";

export default {
  especie: (especie, showLabel = true) =>
    `${showLabel ? "Espécie: " : ""}${especie.descricao}`,
  arvore: (arvore, showLabel = true) =>
    `${showLabel ? "Árvore: " : ""}${arvore.descricao} - ${arvore.idade} ano${
      arvore.idade !== 1 ? "s" : ""
    }`,
  grupo: (grupo, showLabel = true) =>
    `${showLabel ? "Grupo: " : ""}${grupo.nome} - ${grupo.descricao}`,
  colheita: (colheita, showLabel = true) =>
    `${showLabel ? "Colheita: " : ""}${colheita.informacoes} - ${Moment(
      colheita.data
    ).format("DD/MM/YYYY")} - ${colheita.pesoBruto}Kg`,
};
