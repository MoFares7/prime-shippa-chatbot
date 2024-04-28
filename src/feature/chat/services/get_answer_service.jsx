import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../core/network/api';

export const getAnswer = createAsyncThunk(
        'answer/getAnswer',
        async ({ questionId }) => {
                try {
                        const response = await api.get(`answers?questionId=${questionId}`);
                        return response.data;
                } catch (error) {
                        throw new Error('Failed to fetch answers');
                }
        }
);

const getAnswerSlice = createSlice({
        name: 'getAnswer',
        initialState: {
                data: [],
                loading: false,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(getAnswer.pending, (state) => {
                                state.loading = true;
                                state.error = null;
                        })
                        .addCase(getAnswer.fulfilled, (state, action) => {
                                state.loading = false;
                                state.error = null;
                                state.data = action.payload;
                        })
                        .addCase(getAnswer.rejected, (state, action) => {
                                state.loading = false;
                                state.error = action.error.message;
                        });
        },
});

export default getAnswerSlice.reducer;
