import React from "react";
import { Modal, Form, Input } from "antd";
import { useSelector, shallowEqual } from "react-redux";

function EspecieModal({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();
  const loadingEspecies = useSelector(
    (state) => state.especieState.pending,
    shallowEqual
  );
  return (
    <Modal
      visible={visible}
      confirmLoading={loadingEspecies}
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
