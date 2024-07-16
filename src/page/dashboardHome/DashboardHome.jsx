import { useState, useEffect } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import {
  UserOutlined,
  AreaChartOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const { Title } = Typography;

const DashboardHome = () => {
  const [userData, setUserData] = useState([]);
  const [artikelData, setArtikelData] = useState([]);
  const [konsultasiData, setKonsultasiData] = useState([]);

  useEffect(() => {
    // Dummy Data
    const dummyUserData = [
      { name: 'User1', value: 50 },
      { name: 'User2', value: 30 },
      { name: 'User3', value: 20 },
    ];
    const dummyArtikelData = [
      { name: 'Artikel1', value: 100 },
      { name: 'Artikel2', value: 80 },
      { name: 'Artikel3', value: 60 },
    ];
    const dummyKonsultasiData = [
      { name: 'Konsultasi1', value: 20 },
      { name: 'Konsultasi2', value: 15 },
      { name: 'Konsultasi3', value: 10 },
    ];

    setUserData(dummyUserData);
    setArtikelData(dummyArtikelData);
    setKonsultasiData(dummyKonsultasiData);
  }, []);

  return (
    <>
      <Title level={2}>Selamat Datang di WeHealth Admin Dashboard!</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card title='Jumlah User Hari Ini' bordered={false}>
            <h1>{userData.reduce((acc, user) => acc + user.value, 0)}</h1>
            <AreaChartOutlined style={{ fontSize: 40, color: '#1890ff' }} />
          </Card>
        </Col>

        <Col span={8}>
          <Card title='Jumlah Artikel Dibaca' bordered={false}>
            <h1>
              {artikelData.reduce((acc, artikel) => acc + artikel.value, 0)}
            </h1>
            <FileTextOutlined style={{ fontSize: 40, color: '#1890ff' }} />
          </Card>
        </Col>

        <Col span={8}>
          <Card title='Jumlah User Berkonsultasi' bordered={false}>
            <h1>
              {konsultasiData.reduce(
                (acc, konsultasi) => acc + konsultasi.value,
                0
              )}
            </h1>
            <UserOutlined style={{ fontSize: 40, color: '#1890ff' }} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Card title='Grafik Statistik User' bordered={false}>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart data={userData}>
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='value' fill='#3535ff' />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col span={8}>
          <Card title='Grafik Statistik Artikel' bordered={false}>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart data={artikelData}>
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='value' fill='#ff3535' />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col span={8}>
          <Card title='Grafik Statistik Konsultasi' bordered={false}>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart data={konsultasiData}>
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='value' fill='#35ff35' />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DashboardHome;
