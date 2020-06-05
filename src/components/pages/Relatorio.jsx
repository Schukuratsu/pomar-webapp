import React from "react";
import { Card, Tree, Typography, Select, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { toastr } from "react-redux-toastr";
import Moment from "moment";
import Header from "../common/Header";
import EspecieModal from "../common/EspecieModal";
import ArvoreModal from "../common/ArvoreModal";
import GrupoModal from "../common/GrupoModal";
import ColheitaModal from "../common/ColheitaModal";
import * as fetchData from "../../actions/fetchData";
import * as saveData from "../../actions/saveData";

const { Option } = Select;
const { RangePicker } = DatePicker;

function Home() {
  const dispatch = useDispatch();

  const [expandedKeys, setExpandedKeys] = React.useState([]);
  const [autoExpandParent, setAutoExpandParent] = React.useState(true);

  const [selectedEspecie, setSelectedEspecie] = React.useState(null);
  const [selectedArvore, setSelectedArvore] = React.useState(null);
  const [selectedGrupo, setSelectedGrupo] = React.useState(null);
  const [selectedData, setSelectedData] = React.useState(null);

  const especies = useSelector(
    (state) => state.especieState.especies,
    shallowEqual
  );
  const arvores = useSelector(
    (state) => state.arvoreState.arvores,
    shallowEqual
  );
  const grupos = useSelector((state) => state.grupoState.grupos, shallowEqual);
  const colheitas = useSelector(
    (state) => state.colheitaState.colheitas,
    shallowEqual
  );

  const getEspecieText = (especie) => `Espécie: ${especie.descricao}`;
  const getArvoreText = (arvore) =>
    `Árvore: ${arvore.descricao} - ${arvore.idade} ano${
      arvore.idade !== 1 ? "s" : ""
    }`;
  const getGrupoText = (grupo) => `Grupo: ${grupo.nome} - ${grupo.descricao}`;
  const getColheitaText = (colheita) =>
    `Colheita: ${colheita.informacoes} - ${Moment(colheita.data).format(
      "DD/MM/YYYY"
    )} - ${colheita.pesoBruto}Kg`;

  const especieFilter = (
    <Select
      onChange={setSelectedEspecie}
      allowClear
      placeholder="Filtrar espécie..."
      className="grow"
    >
      {especies.map((especie) => (
        <Option value={especie._id} key={especie._id}>
          {getEspecieText(especie)}
        </Option>
      ))}
    </Select>
  );
  const arvoreFilter = (
    <Select
      onChange={setSelectedArvore}
      allowClear
      placeholder="Filtrar árvore..."
      className="grow"
    >
      {arvores.map((arvore) => (
        <Option value={arvore._id} key={arvore._id}>
          {getArvoreText(arvore)}
        </Option>
      ))}
    </Select>
  );
  const grupoFilter = (
    <Select
      onChange={setSelectedGrupo}
      allowClear
      placeholder="Filtrar grupo..."
      className="grow"
    >
      {grupos.map((grupo) => (
        <Option value={grupo._id} key={grupo._id}>
          {getGrupoText(grupo)}
        </Option>
      ))}
    </Select>
  );
  const dataFilter = (
    <RangePicker onChange={setSelectedData} format="DD/MM/YYYY" />
  );

  const getEspecie = (id, key) =>
    especies
      .filter((especie) => especie._id === id)
      .map((especie) => ({
        title: getEspecieText(especie),
        key: `${key} ${especie._id}`,
      }));

  const getArvores = (ids, key) =>
    arvores
      .filter((arvore) => ids.includes(arvore._id))
      .map((arvore) => ({
        title: getArvoreText(arvore),
        key: `${key} ${arvore._id}`,
        children: getEspecie(arvore.especie, key),
      }));

  const getGrupo = (id, key) =>
    grupos
      .filter((grupo) => grupo._id === id)
      .map((grupo) => ({
        title: getGrupoText(grupo),
        key: `${key} ${grupo._id}`,
        children: getArvores(grupo.arvores, key),
      }));

  const getColheitas = () =>
    colheitas
      .filter(
        (colheita) =>
          (!selectedData ||
            (selectedData[0].isSameOrBefore(Moment(colheita.data), "date") &&
              selectedData[1].isSameOrAfter(Moment(colheita.data), "date"))) &&
          (colheita.isGroup
            ? (!selectedGrupo || colheita.ref === selectedGrupo) &&
              (!selectedArvore ||
                grupos
                  .filter((grupo) => grupo._id === colheita.ref)
                  .flatMap((grupo) => grupo.arvores)
                  .includes(selectedArvore)) &&
              (!selectedEspecie ||
                arvores
                  .filter((arvore) =>
                    grupos
                      .filter((grupo) => grupo._id === colheita.ref)
                      .flatMap((grupo) => grupo.arvores)
                      .includes(arvore._id)
                  )
                  .map((arvore) => arvore.especie)
                  .includes(selectedEspecie))
            : !selectedGrupo &&
              (!selectedArvore || colheita.ref === selectedArvore) &&
              (!selectedEspecie ||
                arvores
                  .filter((arvore) => arvore._id === colheita.ref)
                  .map((arvore) => arvore.especie)
                  .includes(selectedEspecie)))
      )
      .map((colheita) => {
        const title = getColheitaText(colheita);
        const key = colheita._id;
        const children = colheita.isGroup
          ? getGrupo(colheita.ref, key)
          : getArvores([colheita.ref], key);
        return { title, key, children };
      });

  const onExpand = (expandedKeys) => {
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };

  // load data from db
  React.useEffect(() => {
    dispatch(fetchData.fetchEspecies());
    dispatch(fetchData.fetchArvores());
    dispatch(fetchData.fetchGrupos());
    dispatch(fetchData.fetchColheitas());
  }, [dispatch]);

  return (
    <>
      <div className="page">
        <Header />
        <div className="body small-padding space-vertical">
          <Card
            title={
              <div className="row align-center space-horizontal">
                <Typography>Colheitas</Typography>
                {especieFilter}
                {arvoreFilter}
                {grupoFilter}
                {dataFilter}
              </div>
            }
          >
            <Tree
              onExpand={onExpand}
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              treeData={getColheitas()}
            />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
