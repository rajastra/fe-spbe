import { Form, Input, message, Modal, Skeleton, Upload } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
const { TextArea } = Input;
import propTypes from 'prop-types';
import { useArticleDetail } from '../../../hooks/useArticleDetail';
import { PlusOutlined } from '@ant-design/icons';

const EditArticle = ({ id, onUpdate, onCancel, show }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newData, setNewData] = useState({});
  const { VITE_BASE_URL } = import.meta.env;

  const { data, refetch, isLoading } = useArticleDetail(id, false);

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
    setNewData({ ...newData, image: newFileList[0].originFileObj })
  };


  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }

    // Show preview modal
    Modal.info({
      title: file.name,
      content: (
        <img
          alt="preview"
          style={{ width: '100%' }}
          src={file.url || file.preview}
        />
      ),
    });
  };
  useEffect(() => {
    if (show) refetch();
  }, [show, refetch]);

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        title: data?.data?.article?.title,
        content: data?.data?.article?.content,
        category: data?.data?.article?.category,
        description: data?.data?.article?.description,
      });
      if (data?.data?.article?.image) {
        setFileList([
          {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: data?.data?.article?.image,
            thumbUrl: data?.data?.article?.image
          },
        ]);
      }

    }
  }, [data, form]);

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      setLoading(true);
      if (Object.keys(newData).length === 0) {
        message.error('Nothing has changed');
        return;
      }

      const { data } = await axios.patch(
        VITE_BASE_URL + `/api/v1/articles/${id}`,
        {
          ...newData,
        },
        {
          headers: {
            Authorization: 'Bearer ' + Cookies.get('token'),
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      message.success(data.message);
      form.resetFields();
      setFileList([]);
      onUpdate();
    } catch (error) {
      message.error(error.response?.data?.message || 'Fields Error');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelModal = () => {
    setNewData({});
    onCancel();
  };

  return (
    <Modal
      open={show}
      okText='Simpan'
      cancelText='Batal'
      onOk={handleSubmit}
      onCancel={handleCancelModal}
      okButtonProps={{ loading }}
      title='Tambah Artikel'
    >
      {isLoading && <Skeleton active />}
      {!isLoading && (
        <>
          <Form form={form} layout='vertical' className='full-form'>
            <div className='first-form'>
              <Form.Item
                name='title'
                label='Judul'
                rules={[{ required: true, message: 'Harap diisi' }]}
              >
                <Input onChange={({ target: { value } }) => (newData["title"] = value)} />
              </Form.Item>
              <Form.Item
                name='description'
                label='Deskripsi'
                rules={[{ required: true, message: 'Harap diisi' }]}
              >
                <Input onChange={({ target: { value } }) => (newData["description"] = value)} />
              </Form.Item>
              <Form.Item
                name='content'
                label='Isi'
                rules={[{ required: true, message: 'Harap diisi' }]}
              >
                <TextArea onChange={({ target: { value } }) => (newData["content"] = value)} />
              </Form.Item>
              <Form.Item
                name='category'
                label='Kategori'
                rules={[{ required: true, message: 'Harap diisi' }]}
              >
                <Input onChange={({ target: { value } }) => (newData["category"] = value)} />
              </Form.Item>
              <Form.Item name="image" label="Gambar"
              >
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={true}
                  beforeUpload={() => false}
                  onChange={handleChange}
                  onPreview={handlePreview}
                  maxCount={1}
                  fileList={fileList}
                >
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>upload</div>
                  </div>
                </Upload>
              </Form.Item>
            </div>
          </Form>
        </>
      )}
    </Modal>
  );
};

EditArticle.propTypes = {
  show: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
  onUpdate: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
};

export default EditArticle;
