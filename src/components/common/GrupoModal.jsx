import React from "react";
import { Modal, Form, Input, Select } from "antd";
import { useSelector, shallowEqual } from "react-redux";

const Option = Select;

function GrupoModal({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();
  const arvores = useSelector(
    (state) => state.arvoreState.arvores,
    shallowEqual
  );
  const loadingGrupos = useSelector(
    (state) => state.grupoState.pending,
    shallowEqual
  );
  return (
    <Modal
      visible={visible}
      confirmLoading={loadingGrupos}
      title="Criar novo grupo"
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
          name="nome"
          label="Nome do grupo"
          rules={[{ required: true, message: "Preencha este campo!" }]}
        >
          <Input autoFocus />
        </Form.Item>
        <Form.Item
          name="descricao"
          label="Descrição"
          rules={[{ required: true, message: "Preencha este campo!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="arvores"
          label="Árvores"
          rules={[{ required: true, message: "Preencha este campo!" }]}
        >
          <Select mode="multiple" placeholder="Selecione árvores">
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

export default GrupoModal;
