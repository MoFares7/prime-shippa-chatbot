import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../core/network/api';

export const getQuestions = createAsyncThunk(
        '/question/index',
        async () => {
                try {
                        const response = await api.get('question/index');
                        return response.data;
                } catch (error) {
                        throw new Error('Failed to fetch questions');
                }
        }
);

const getQuestionsSlice = createSlice({
        name: 'getQuestions',
        initialState: {
                data: [],
                loading: false,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(getQuestions.pending, (state) => {
                                state.loading = true;
                                state.error = null;
                        })
                        .addCase(getQuestions.fulfilled, (state, action) => {
                                state.loading = false;
                                state.error = null;
                                state.data = action.payload;
                        })
                        .addCase(getQuestions.rejected, (state, action) => {
                                state.loading = false;
                                state.error = action.error.message;
                        });
        },
});

export default getQuestionsSlice.reducer;
