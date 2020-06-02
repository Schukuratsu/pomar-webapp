import React from "react";
import { Modal, Form, Input } from "antd";

function PhraseText({ visible, onCreate, onCancel }) {
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
          name="descricao"
          label="Nome da espécie"
          rules={[{ required: true, message: "Preencha este campo!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default PhraseText;
