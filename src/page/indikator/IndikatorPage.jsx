import { useState } from "react";
import { useIndikatorPagination } from "../../hooks/indikator/useIndikatorPagination";
import { Table } from "antd";

const IndikatorPage = () => {
   const [dataTable, setDataTable] = useState({
      current_page: 1,
      per_page: 15,
      total: 0,
   });

   const { data, isLoading, isFetching } = useIndikatorPagination(
      dataTable,
      ''
   );

   const columns = [
      {
         title: 'No',
         dataIndex: 'index',
         align: 'left',
      },
      {
         title: 'Aspek', dataIndex: 'aspek', align: 'left',
         width: 70,
      },
      { title: 'Indikator', dataIndex: 'indikator', align: 'left', width: 80, },
      { title: 'Nama Indikator Domain Kebijakan SPBE', dataIndex: 'nama', align: 'left', width: 150 },
      { title: 'Penanggung Jawab', dataIndex: 'penanggungJawab', align: 'left' },
      { title: 'Penjelasan', dataIndex: 'penjelasan', align: 'left' },
      { title: 'Data Pendukung', dataIndex: 'dataPendukung', align: 'left' },
      { title: 'Tingkat Kematangan', dataIndex: 'tingkatKematangan', align: 'left' },

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
      <div>
         <div>
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
               style={{
                  height: 'fit-content',
               }}
            />
         </div>
      </div>
   )
}

export default IndikatorPage