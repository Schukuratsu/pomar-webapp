import React from "react";
import { Modal, Form, Input, InputNumber, Select } from "antd";
import { useSelector } from "react-redux";

const { Item } = Form;
const { Option } = Select;

function ArvoreModal({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();

  const especies = useSelector((state) => state.especieState.especies);

  return (
    <Modal
      visible={visible}
      title="Criar nova árvore"
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
        <Item
          name="descricao"
          label="Descrição"
          rules={[{ required: true, message: "Preencha este campo!" }]}
        >
          <Input autoFocus />
        </Item>
        <Item
          name="idade"
          label="Idade"
          rules={[{ required: true, message: "Preencha este campo!" }]}
        >
          <InputNumber />
        </Item>
        <Item
          name="especie"
          label="Espécie"
          rules={[{ required: true, message: "Preencha este campo!" }]}
        >
          <Select>
            {especies.map((especie) => (
              <Option value={especie._id} key={especie._id}>
                {especie.descricao}
              </Option>
            ))}
          </Select>
        </Item>
      </Form>
    </Modal>
  );
}

export default ArvoreModal;
