import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Api } from '@common/enums';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: Api.BASE }),
  endpoints: (buidler) => ({
    
  })
})