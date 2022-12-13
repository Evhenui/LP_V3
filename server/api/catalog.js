import axios from 'axios';

const URL = 'https://dev.api.logicpower.ua/user/catalog/category/list/tree';

export default defineEventHandler(async (event) => {
  try {
    const { data } = await axios(URL);
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});
