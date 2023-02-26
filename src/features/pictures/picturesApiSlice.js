import { apiSlice } from '../../app/api/apiSlice'

export const picturesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPicturesPublic: builder.query({
      query: (input) => ({
        url: `/picturePublic`,
        method: 'GET',
        mode: 'cors',
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError
        },
      }),
      transformResponse: (responseData) => {
        return responseData.data.items
      },
      providesTags: ['getPicturesPublic'],
      invalidatesTags: ['getPicturesPublic'],
    }),
    getPicturesPrivate: builder.query({
      query: (data) => ({
        url: `/picturePrivate`,
        method: 'POST',
        body: data,
        mode: 'cors',
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError
        },
      }),
      transformResponse: (responseData) => {
        return responseData.data.items
      },
      providesTags: ['getPicturs'],
      invalidatesTags: ['getPicturs'],
    }),
  }),
})

export const { useGetPicturesPublicQuery, useGetPicturesPrivateQuery } =
  picturesApiSlice
