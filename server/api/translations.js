import axios from 'axios';

const URL = 'https://api.b2b.logicpower.ua/user/shared/export/translations';

export default defineEventHandler(async (event) => {
  try {
    const { data } = await axios(URL);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
});
