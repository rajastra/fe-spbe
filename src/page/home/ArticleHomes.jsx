import { useState } from "react";
import './ArticleHomes.css'
import { useArticlePagination } from "../../hooks/useArticlePagination";
import { Skeleton } from "antd";
import ArticleCard from "../../component/article/ArticleCard";

function ArticleHomes() {
   const [keyword, setKeyword] = useState("");
   const [dataTable, setDataTable] = useState({
      current_page: 1,
      per_page: 15,
      total: 0,
   });

   const { data, isLoading } = useArticlePagination(
      dataTable,
      keyword
   );

   return (
      <div className="container-xl pt-5 margin-top-50">
         <h1 className="text-center">List Artikel</h1>
         <div className="row">
            <div className="col">
               <div className="input-group mb-3">
                  <input type="text" className="form-control" id="keyword" placeholder="Cari artikel berdasarkan kategori"
                     aria-label="Cari Artikel" aria-describedby="button-addon2"
                     value={keyword}
                     onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button className="btn btn-outline-secondary btn-search-article" type="submit" id="button-addon2">
                     <i className="fas fa-search"></i>
                  </button>
               </div>
            </div>
         </div>
         <div className="row g-3 list-article">
            {isLoading && <Skeleton active />}
            {data?.data?.map((article, index) => (<ArticleCard key={index} article={article} />))}
         </div>
      </div>
   )
}

export default ArticleHomes