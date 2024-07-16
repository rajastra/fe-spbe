import {
   Form,
   Input,
   message,
   Modal,

   Upload,
} from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
const { TextArea } = Input;
import propTypes from "prop-types";

const getBase64 = (file) =>
   new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);

      reader.onerror = (error) => reject(error);
   });

const AddArticle = ({ show, onCreate, onCancel }) => {
   const [form] = Form.useForm();
   const [fileList, setFileList] = useState([]);
   const [loading, setLoading] = useState(false);
   const [previewOpen, setPreviewOpen] = useState(false);
   const [previewImage, setPreviewImage] = useState("");
   const [previewTitle, setPreviewTitle] = useState("");
   const { VITE_BASE_URL } = import.meta.env;

   const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
         file.preview = await getBase64(file.originFileObj);
      }

      setPreviewImage(file.url || file.preview);
      setPreviewOpen(true);
      setPreviewTitle(
         file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
      );
   };

   const handleCancel = () => setPreviewOpen(false);

   const handleSubmit = async () => {
      try {
         const values = await form.validateFields();
         setLoading(true);

         const { data } = await axios.post(
            VITE_BASE_URL + `/api/v1/articles`,
            {
               ...values,
               image: fileList[0],
            },
            {
               headers: {
                  Authorization: "Bearer " + Cookies.get("token"),
                  "Content-Type": "multipart/form-data",
               },
            }
         );

         message.success(data.message);
         form.resetFields();
         setFileList([]);
         onCreate();
      } catch (error) {
         message(error.message || "Fields Error");
      } finally {
         setLoading(false);
      }
   };

   const handleCancelModal = () => {
      form.resetFields();
      setFileList([]);
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
         title="Tambah Artikel"
      >
         <Form form={form} layout="vertical" className="full-form">
            <div className="first-form">
               <Form.Item
                  name="title"
                  label="Judul"
                  rules={[{ required: true, message: "Harap diisi" }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="description"
                  label="Deskripsi"
                  rules={[{ required: true, message: "Harap diisi" }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  name="content"
                  label="Isi"
                  rules={[{ required: true, message: "Harap diisi" }]}
               >
                  <TextArea />
               </Form.Item>
               <Form.Item
                  name="category"
                  label="Kategori"
                  rules={[{ required: true, message: "Harap diisi" }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item label="Gambar">
                  <Upload
                     accept=".jpg,.jpeg,.png"
                     listType="picture-card"
                     onPreview={handlePreview}
                     beforeUpload={(file) => {
                        if (file.size > 2000000) {
                           message.error("Maks File 2MB");
                           return false;
                        }
                        if (fileList.length > 1) {
                           message.error("Allowed only 1 file");
                        }
                        if (file.size <= 2000000) {
                           setFileList([file]);
                           return false;
                        }
                     }}
                     onRemove={(file) => {
                        const index = fileList.indexOf(file);
                        const newFileList = fileList.slice();
                        newFileList.splice(index, 1);
                        setFileList(newFileList);
                     }}
                  >
                     {fileList.length > 0 ? null : "+ Upload"}
                  </Upload>
               </Form.Item>
            </div>
         </Form>
         <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
         >
            <img
               alt="example"
               style={{
                  width: "100%",
               }}
               src={previewImage}
            />
         </Modal>
      </Modal>
   );
};

AddArticle.propTypes = {
   show: propTypes.bool.isRequired,
   onCreate: propTypes.func.isRequired,
   onCancel: propTypes.func.isRequired,
};


export default AddArticle;
