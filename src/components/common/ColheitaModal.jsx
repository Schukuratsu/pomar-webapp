import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Modal, Form, Input, InputNumber, Select, DatePicker } from "antd";

const Option = Select;

function ColheitaModal({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();
  const arvores = useSelector(
    (state) => state.arvoreState.arvores,
    shallowEqual
  );
  const grupos = useSelector((state) => state.grupoState.grupos, shallowEqual);
  const [isGroup, setIsGroup] = React.useState(true);
  return (
    <Modal
      visible={visible}
      title="Criar nova colheita"
      okText="Confirmar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        // layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item
          name="informacoes"
          label="Informações"
          rules={[{ required: true, message: "Preencha este campo!" }]}
        >
          <Input autoFocus />
        </Form.Item>
        <Form.Item
          name="data"
          label="Data"
          rules={[{ required: true, message: "Preencha este campo!" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="pesoBruto"
          label="Peso bruto (Kg)"
          rules={[{ required: true, message: "Preencha este campo!" }]}
        >
          <InputNumber min={0.1} max={1000} />
        </Form.Item>
        <Form.Item
          name="isGroup"
          label="Referenciar por"
          rules={[{ required: true, message: "Preencha este campo!" }]}
        >
          <Select
            onChange={(evt) => setIsGroup(evt === "grupo" ? true : false)}
          >
            <Option value="grupo">Grupo</Option>
            <Option value="arvore">Arvore</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="refGrupo"
          label="Grupo"
          rules={[{ required: isGroup, message: "Preencha este campo!" }]}
        >
          <Select disabled={!isGroup}>
            {grupos.map((grupo) => (
              <Option value={grupo._id} key={grupo._id}>
                {grupo.nome}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="refArvore"
          label="Árvore"
          rules={[{ required: !isGroup, message: "Preencha este campo!" }]}
        >
          <Select disabled={isGroup}>
            {arvores.map((arvore) => (
              <Option value={arvore._id} key={arvore._id}>
                {arvore.descricao}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ColheitaModal;
