import { useQuery } from 'react-query';
import { getDokter } from '../services/Dokter';

export const useDokterPagination = (dataTable, keyword) => {
  return useQuery(
    [
      'get-Dokter-pagination',
      dataTable.current_page,
      dataTable.per_page,
      keyword,
    ],
    () =>
      getDokter(
        `/api/v1/dokter?page=${dataTable.current_page}&limit=${dataTable.per_page}&search=${keyword}`
      )
  );
};
