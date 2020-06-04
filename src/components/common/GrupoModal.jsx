import React from "react";
import { Modal, Form, Input, Select } from "antd";
import { connect } from "react-redux";

const Option = Select;

function PhraseText({ visible, onCreate, onCancel, arvores }) {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
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
          <Input />
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

const mapStateToProps = (state) => ({ arvores: state.arvoreState.arvores });

export default connect(mapStateToProps)(PhraseText);
