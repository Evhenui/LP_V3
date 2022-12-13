export const productsFilter = ({
  baseQuery,
  pageNum,
  pageSize,
  sort,
  categoryId,
  searchQuery,
  minPrice,
  maxPrice,
  manufactures,
  specifications,
}) => {
  let query = baseQuery;

  query += `?pageNum=${pageNum}`;
  query += `&pageSize=${pageSize}`;

  query += !!sort ? `&sort=${sort}` : '';
  query += !!categoryId ? `&categoryId=${categoryId}` : '';
  query += !!searchQuery ? `&searchQuery=${searchQuery}` : '';
  query += !!minPrice ? `&minPrice=${minPrice}` : '';
  query += !!maxPrice ? `&maxPrice=${maxPrice}` : '';
  query += !!manufactures ? `&manufactures=${manufactures}` : '';
  query += !!specifications ? `&specifications=${specifications}` : '';

  return query;
};
