import React from "react";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { toastr } from "react-redux-toastr";
import Header from "../common/Header";
import EspecieModal from "../common/EspecieModal";
import ArvoreModal from "../common/ArvoreModal";
import GrupoModal from "../common/GrupoModal";
import ColheitaModal from "../common/ColheitaModal";
import * as fetchData from "../../actions/fetchData";
import * as saveData from "../../actions/saveData";

function Home() {
  const dispatch = useDispatch();

  const especies = useSelector(
    (state) => state.especieState.especies,
    shallowEqual
  );
  const [especieModal, setEspecieModal] = React.useState({ visible: false });
  const openEspecieModal = () =>
    setEspecieModal((data) => ({ ...data, visible: true }));
  const closeEspecie = () =>
    setEspecieModal((data) => ({ ...data, visible: false }));
  const validateEspecie = (obj) =>
    especies.findIndex((especie) => especie.descricao === obj.descricao) !== -1
      ? toastr.error(`A espécie '${obj.descricao}' já existe!`) && false
      : true;
  const saveEspecie = (values) =>
    validateEspecie(values) &&
    dispatch(saveData.saveEspecie(values)) &&
    setEspecieModal((data) => ({ ...data, visible: false }));

  const arvores = useSelector(
    (state) => state.arvoreState.arvores,
    shallowEqual
  );
  const [arvoreModal, setArvoreModal] = React.useState({ visible: false });
  const openArvoreModal = () =>
    setArvoreModal((data) => ({ ...data, visible: true }));
  const closeArvore = () =>
    setArvoreModal((data) => ({ ...data, visible: false }));
  const validateArvore = (obj) =>
    arvores.findIndex((arvore) => arvore.descricao === obj.descricao) !== -1
      ? toastr.error(`A árvore '${obj.descricao}' já existe!`) && false
      : true;
  const saveArvore = (values) =>
    validateArvore(values) &&
    dispatch(saveData.saveArvore(values)) &&
    setArvoreModal((data) => ({ ...data, visible: false }));

  const grupos = useSelector((state) => state.grupoState.grupos, shallowEqual);
  const [grupoModal, setGrupoModal] = React.useState({ visible: false });
  const openGrupoModal = () =>
    setGrupoModal((data) => ({ ...data, visible: true }));
  const closeGrupoModal = () =>
    setGrupoModal((data) => ({ ...data, visible: false }));
  const validateGrupo = (obj) =>
    grupos.findIndex((grupo) => grupo.nome === obj.nome) !== -1
      ? toastr.error(`A árvore '${obj.descricao}' já existe!`) && false
      : true;
  const saveGrupo = (values) =>
    validateGrupo(values) &&
    dispatch(saveData.saveGrupo(values)) &&
    setGrupoModal((data) => ({ ...data, visible: false }));

  const colheitas = useSelector(
    (state) => state.colheitaState.colheitas,
    shallowEqual
  );
  const [colheitaModal, setColheitaModal] = React.useState({ visible: false });
  const openColheitaModal = () =>
    setColheitaModal((data) => ({ ...data, visible: true }));
  const closeColheitaModal = () =>
    setColheitaModal((data) => ({ ...data, visible: false }));
  const saveColheita = (values) =>
    dispatch(saveData.saveColheita(values)) &&
    setColheitaModal((data) => ({ ...data, visible: false }));

  // load data from db
  React.useEffect(() => {
    dispatch(fetchData.fetchEspecies());
    dispatch(fetchData.fetchArvores());
    dispatch(fetchData.fetchGrupos());
    dispatch(fetchData.fetchColheitas());
  }, [dispatch]);

  return (
    <>
      <EspecieModal
        visible={especieModal.visible}
        onCreate={saveEspecie}
        onCancel={closeEspecie}
      />
      <ArvoreModal
        visible={arvoreModal.visible}
        onCreate={saveArvore}
        onCancel={closeArvore}
      />
      <GrupoModal
        visible={grupoModal.visible}
        onCreate={saveGrupo}
        onCancel={closeGrupoModal}
      />
      <ColheitaModal
        visible={colheitaModal.visible}
        onCreate={saveColheita}
        onCancel={closeColheitaModal}
      />
      <div className="page">
        <Header />
        <div className="body breakable-row">
          <div className="quarter">
            <Card
              title="Espécies"
              extra={<PlusOutlined onClick={openEspecieModal} />}
            >
              <div className="content">
                {especies.map((especie) => (
                  <Card key={`especie ${especie._id}`}>
                    {especie.descricao}
                  </Card>
                ))}
              </div>
            </Card>
          </div>
          <div className="quarter">
            <Card
              title="Árvores"
              extra={<PlusOutlined onClick={openArvoreModal} />}
            >
              <div className="content">
                {arvores.map((arvore) => (
                  <Card key={`arvore ${arvore._id}`}>
                    {`${arvore.descricao} - ${arvore.idade} - ${
                      especies.find((especie) => especie._id === arvore.especie)
                        .descricao
                    }`}
                  </Card>
                ))}
              </div>
            </Card>
          </div>
          <div className="quarter">
            <Card
              title="Grupos"
              extra={<PlusOutlined onClick={openGrupoModal} />}
            >
              <div className="content">
                {grupos.map((grupo) => (
                  <Card key={`arvore ${grupo._id}`}>
                    {`${grupo.nome} - ${grupo.descricao} - ${arvores
                      .filter((arvore) => grupo.arvores.includes(arvore._id))
                      .map((arvore) => arvore.descricao)
                      .join(" - ")}`}
                  </Card>
                ))}
              </div>
            </Card>
          </div>
          <div className="quarter">
            <Card
              title="Colheitas"
              extra={<PlusOutlined onClick={openColheitaModal} />}
            >
              <div className="content">
                {colheitas.map((colheita) => (
                  <Card key={`colheita ${colheita._id}`}>
                    {`${colheita.informacoes} - ${colheita.data} - ${
                      colheita.pesoBruto
                    } - ${colheita.isGroup ? "grupo" : "árvore"} - ${
                      colheita.isGroup
                        ? grupos.find((grupo) => grupo._id === colheita.ref)
                            .nome
                        : arvores.find((arvore) => arvore._id === colheita.ref)
                            .descricao
                    }`}
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
