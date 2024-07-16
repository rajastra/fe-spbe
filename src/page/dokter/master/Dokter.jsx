import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { Popconfirm, Tag } from 'antd';
import { useCallback, useState } from 'react';
import { useDokterPagination } from '../../../hooks/useDokterPagination';
import './Dokter.css';
import { DeleteApi } from '../../../services/DeleteApi';
import AddDokter from '../add/AddDokter';
import EditDokter from '../edit/EditDokter';
import { useNavigate } from 'react-router-dom';

const Dokter = () => {
  const [dataId, setDataId] = useState('');
  const [showAddDokter, setShowAddDokter] = useState(false);
  const [showEditDokter, setShowEditDokter] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [dataTable, setDataTable] = useState({
    current_page: 1,
    per_page: 15,
    total: 0,
  });

  const navigate = useNavigate();

  const { data, isLoading, isFetching, refetch } = useDokterPagination(
    dataTable,
    keyword
  );

  const onCreate = useCallback(() => {
    setShowAddDokter(false);
    refetch();
  }, [refetch]);

  const onUpdate = useCallback(() => {
    setShowEditDokter(false);
    refetch();
  }, [refetch]);

  const onCancel = () => {
    setShowAddDokter(false);
    setShowEditDokter(false);
  };

  const handleChange = (param) => {
    setKeyword(param.target.value);
  };

  const columns = [
    {
      title: 'No',
      dataIndex: 'index',
      align: 'left',
      width: window.innerWidth > 800 ? 70 : 50,
    },
    { title: 'Nama', dataIndex: 'name', align: 'left' },
    { title: 'Kategori', dataIndex: 'category', align: 'left' },

    {
      title: 'Aksi',
      dataIndex: '_id',
      align: 'center',
      width: window.innerWidth > 800 ? 200 : 150,
      render: (id) => {
        return (
          <>
            <Tag
              color='blue'
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate(`/dashboard/Dokter/${id}`);
              }}
            >
              Detail
            </Tag>
            <Tag
              color='orange'
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setDataId(id);
                setShowEditDokter(true);
              }}
            >
              Ubah
            </Tag>
            <Popconfirm
              title='Yakin ingin menghapus ?'
              okText='Hapus'
              cancelText='Batal'
              onConfirm={() => {
                const dataId = id;
                DeleteApi({
                  url: '/api/v1/Dokter/',
                  dataId,
                  refetch,
                });
              }}
            >
              <Tag color='magenta' style={{ cursor: 'pointer' }}>
                Hapus
              </Tag>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const dataSource = data?.data?.slice(0, dataTable.per_page).map((x, i) => {
    return {
      ...x,
      key: x._id,
      index: i + 1,
    };
  });

  const pagination = {
    current: dataTable.current_page,
    pageSize: dataTable.per_page,
    total: data?.data?.total,
    showSizeChanger: true,
    pageSizeOptions: [15, 20, 50, 100],
    onChange: (curr, size) => {
      setDataTable((prev) => {
        return {
          ...prev,
          current_page: curr,
          per_page: size,
        };
      });
    },
  };

  return (
    <>
      <div className='table-header'>
        <h1>Daftar Dokter</h1>
        <Space>
          <Button type='primary' onClick={() => setShowAddDokter(true)}>
            Tambah Dokter
          </Button>
        </Space>
      </div>
      <div className='search-wrapper filter-wrapper'>
        <Input
          prefix={<SearchOutlined />}
          value={keyword}
          onChange={handleChange}
          placeholder='Cari Dokter berdasarkan Judul atau kategori'
        />
      </div>
      <Table
        size='small'
        tableLayout='auto'
        columns={columns}
        loading={isLoading || isFetching}
        dataSource={dataSource}
        pagination={pagination}
        scroll={{
          y: '50vh',
          x: 800,
        }}
      />
      <AddDokter onCreate={onCreate} onCancel={onCancel} show={showAddDokter} />
      <EditDokter
        id={dataId}
        onUpdate={onUpdate}
        onCancel={onCancel}
        show={showEditDokter}
      />
    </>
  );
};

export default Dokter;
