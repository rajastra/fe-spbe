import {
   Form,
   Input,
   message,
   Modal,
   Radio,
} from "antd";
import axios from "axios";
import { useState } from "react";
const { TextArea } = Input;
import propTypes from "prop-types";
import { userRoles } from "../constant";



const AddUser = ({ show, onCreate, onCancel }) => {
   const [form] = Form.useForm();
   const [loading, setLoading] = useState(false);
   const { VITE_BASE_URL } = import.meta.env;


   const handleSubmit = async () => {
      try {
         const values = await form.validateFields();
         setLoading(true);

         const { data } = await axios.post(
            VITE_BASE_URL + `/api/v1/auth/register`, values,
         );
         message.success(data.message);
         form.resetFields();
         onCreate();
      } catch (error) {
         message.error(error.response.data.message || error.message);
      } finally {
         setLoading(false);
      }
   };

   const handleCancelModal = () => {
      form.resetFields();
      onCancel();
   };



   return (
      <Modal
         open={show}
         okText="Simpan"
         cancelText="Batal"
         onOk={handleSubmit}
         onCancel={handleCancelModal}
         okButtonProps={{ loading }}
         title="Tambah User"
      >
         <Form form={form} layout="vertical" className="full-form">
            <div className="first-form">
               <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: "Harap diisi" }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: "Harap diisi" }]}
               >
                  <Input.Password />
               </Form.Item>
               <Form.Item
                  name="first_name"
                  label="First Name"
                  rules={[{ required: true, message: "Harap diisi" }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="last_name"
                  label="Last Name"
                  rules={[{ required: true, message: "Harap diisi" }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="phone"
                  label="No Telepon"
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="address"
                  label="Alamat"
               >
                  <TextArea />
               </Form.Item>
               <Form.Item
                  name="role"
                  label="Role"
               >
                  <Radio.Group options={userRoles} />
               </Form.Item>
            </div>
         </Form>
      </Modal>
   );
};

AddUser.propTypes = {
   show: propTypes.bool.isRequired,
   onCreate: propTypes.func.isRequired,
   onCancel: propTypes.func.isRequired,
};


export default AddUser;
