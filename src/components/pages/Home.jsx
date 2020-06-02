import React from "react";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { toastr } from "react-redux-toastr";
import EspecieModal from "../common/EspecieModal";
import EspecieApi from "../../api/EspecieApi";

function Home() {
  const [especies, setEspecies] = React.useState([]);
  const [especieModal, setEspecieModal] = React.useState({ visible: false });
  const openEspecie = () =>
    setEspecieModal((data) => ({ ...data, visible: true }));
  const closeEspecie = () =>
    setEspecieModal((data) => ({ ...data, visible: false }));
  const validateEspecie = (obj) =>
    especies.findIndex((especie) => especie.descricao === obj.descricao) !== -1
      ? toastr.error(`A espécie '${obj.descricao}' já existe!`) && false
      : true;
  const saveEspecie = (values) =>
    validateEspecie(values) &&
    EspecieApi.save(values).then((response) => {
      setEspecies((data) => [...data, response.data]);
      setEspecieModal((data) => ({ ...data, visible: false }));
    });

  // load data from db
  React.useEffect(() => {
    // EspecieApi.getAll().then(response => console.log(response));
    EspecieApi.getAll().then((response) => setEspecies(response.data.data));
    // ArvoreApi.getAll().then(response => setArvores(response.data.data));
    // GrupoApi.getAll().then(response => setGrupos(response.data.data));
    // ColheitaApi.getAll().then(response => setColheitas(response.data.data));
  }, []);

  return (
    <>
      <EspecieModal
        visible={especieModal.visible}
        onCreate={saveEspecie}
        onCancel={closeEspecie}
      />
      {/* <ArvoreModal />
		<GrupoModal />
		<ColheitaModal /> */}
      <div className="page">
        <div className="quarter">
          <Card title="Espécie" extra={<PlusOutlined onClick={openEspecie} />}>
            <div className="content">
              {especies.map((especie) => (
                <Card key={especie.descricao}>{especie.descricao}</Card>
              ))}
            </div>
          </Card>
        </div>
        <div className="quarter">
          <Card title="Árvore" extra={<PlusOutlined />}>
            <div className="content">
              <Card>something</Card>
            </div>
          </Card>
        </div>
        <div className="quarter">
          <Card title="Grupo" extra={<PlusOutlined />}>
            <div className="content">
              <Card>something</Card>
            </div>
          </Card>
        </div>
        <div className="quarter">
          <Card title="Colheita" extra={<PlusOutlined />}>
            <div className="content">
              <Card>something</Card>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
