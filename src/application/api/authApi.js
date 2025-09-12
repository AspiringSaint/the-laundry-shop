import { baseApi } from "./baseApi";
import { clearToken } from "../../features/auth/authSlice";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: 'auth/',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Auth']
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'auth/logout',
                method: 'POST'
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(clearToken());

                    setTimeout(() => {
                        dispatch(baseApi.util.resetApiState());
                    }, 1000)
                } catch (error) {
                    console.log(error);
                }
            }
        })
    })
});

export const {
    useLoginMutation,
    useLogoutMutation
} = authApi;