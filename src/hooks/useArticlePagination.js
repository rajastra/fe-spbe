import { useQuery } from 'react-query';
import { getArticle } from '../services/Article';

export const useArticlePagination = (dataTable, keyword) => {
  return useQuery(
    [
      'get-Article-pagination',
      dataTable.current_page,
      dataTable.per_page,
      keyword,
    ],
    () =>
      getArticle(
        `/api/v1/articles?page=${dataTable.current_page}&limit=${dataTable.per_page}&search=${keyword}`
      )
  );
};
