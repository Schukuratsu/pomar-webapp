import React from "react";
import { Card, Tree, Typography, Select, DatePicker, Empty } from "antd";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Moment from "moment";
import Header from "../common/Header";
import getText from "../../helpers/getText";
import * as fetchData from "../../actions/fetchData";

const { Option } = Select;
const { RangePicker } = DatePicker;

function Relatório() {
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

  // ### FILTERS ###
  const especieFilter = (
    <Select
      onChange={setSelectedEspecie}
      allowClear
      placeholder="Filtrar espécie..."
      className="grow"
    >
      {especies.map((especie) => (
        <Option value={especie._id} key={especie._id}>
          {getText.especie(especie)}
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
          {getText.arvore(arvore)}
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
          {getText.grupo(grupo)}
        </Option>
      ))}
    </Select>
  );

  const dataFilter = (
    <RangePicker
      className="data-filter grow"
      onChange={setSelectedData}
      allowClear
      placeholder={["Início", "Fim"]}
      format="DD/MM/YYYY"
    />
  );

  React.useEffect(() => {
    setAutoExpandParent(true);
    setExpandedKeys(
      [
        ...[selectedGrupo]
          .filter((value) => value)
          .flatMap((value) =>
            colheitas
              .filter((colheita) => colheita.ref === value)
              .map((colheita) => `${colheita._id}`)
          ),
        ...[selectedArvore]
          .filter((value) => value)
          .map((value) => [
            grupos
              .filter((grupo) => grupo.arvores.includes(selectedArvore))
              .map((grupo) =>
                colheitas
                  .filter((colheita) => colheita.ref === grupo._id)
                  .map((colheita) => [
                    colheita._id,
                    `${colheita._id} ${grupo._id}`,
                  ])
              ),
            colheitas
              .filter((colheita) => colheita.ref === value)
              .map((colheita) => colheita._id),
          ]),
        ...[selectedEspecie]
          .filter((value) => value)
          .map((value) =>
            arvores
              .filter((arvore) => arvore.especie === value)
              .map((arvore) => [
                grupos
                  .filter((grupo) => grupo.arvores.includes(arvore._id))
                  .map((grupo) =>
                    colheitas
                      .filter((colheita) => colheita.ref === grupo._id)
                      .map((colheita) => [
                        colheita._id,
                        `${colheita._id} ${grupo._id}`,
                        `${colheita._id} ${arvore._id}`,
                      ])
                  ),
                colheitas
                  .filter((colheita) => colheita.ref === arvore._id)
                  .map((colheita) => [
                    colheita._id,
                    `${colheita._id} ${arvore._id}`,
                  ]),
              ])
          ),
      ].flat(10)
    );
  }, [
    selectedEspecie,
    selectedArvore,
    selectedGrupo,
    selectedData,
    colheitas,
    grupos,
    arvores,
  ]);

  // ### TREE FUNCTIONS ###
  const getEspecie = (id) =>
    especies
      .filter((especie) => especie._id === id)
      .map((especie) => ({
        title: getText.especie(especie),
      }));

  const getArvores = (ids, key) =>
    arvores
      .filter((arvore) => ids.includes(arvore._id))
      .map((arvore) => ({
        title: getText.arvore(arvore),
        key: `${key} ${arvore._id}`,
        children: getEspecie(arvore.especie),
      }));

  const getGrupo = (id, key) =>
    grupos
      .filter((grupo) => grupo._id === id)
      .map((grupo) => ({
        title: getText.grupo(grupo),
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
        const title = getText.colheita(colheita);
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
              <div className="row align-center space-horizontal scroll-x-auto">
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
            {!colheitas[0] && (
              <Empty
                description="Sem Dados"
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            )}
          </Card>
        </div>
      </div>
    </>
  );
}

export default Relatório;
