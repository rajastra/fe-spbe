import { useQuery } from 'react-query';
import { getDetailArticle } from '../services/Article';

export const useArticleDetail = (id, enabled) => {
  return useQuery(
    ['get-article-detail', id],
    () => getDetailArticle(`/api/v1/articles/${id}`),
    {
      enabled,
    }
  );
};
