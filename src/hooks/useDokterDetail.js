import { useQuery } from 'react-query';
import { getDetailDokter } from '../services/Dokter';

export const useDokterDetail = (id, enabled) => {
  return useQuery(
    ['get-dokter-detail', id],
    () => getDetailDokter(`/api/v1/dokter/${id}`),
    {
      enabled,
    }
  );
};
