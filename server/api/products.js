import axios from 'axios';
import { productsFilter } from '~~/utils/queryParams';

const URL = 'https://dev.api.logicpower.ua/user/catalog/product/list/all';

export default defineEventHandler(async (event) => {
  const {
    pageSize,
    pageNum,
    sort,
    categoryId,
    searchQuery,
    minPrice,
    maxPrice,
    manufactures,
    specifications,
  } = getQuery(event);

  try {
    const { data } = await axios(URL, {
      params: {
        pageSize,
        pageNum,
        sort,
        categoryId,
        searchQuery,
        minPrice,
        maxPrice,
        manufactures,
        specifications,
      },
    });
    return data.data.items;
  } catch (error) {
    console.log(error.response.request.path);
    return error;
  }
});
