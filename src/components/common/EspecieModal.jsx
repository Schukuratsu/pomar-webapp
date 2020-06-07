import React from "react";
import { Modal, Form, Input } from "antd";

function EspecieModal({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Criar nova espécie"
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
          name="descricao"
          label="Nome da espécie"
          rules={[{ required: true, message: "Preencha este campo!" }]}
        >
          <Input autoFocus />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EspecieModal;
