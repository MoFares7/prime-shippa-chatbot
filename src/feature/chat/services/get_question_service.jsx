import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getQuestions = createAsyncThunk(
        'answers/index',
        async () => {
                try {
                        const response = await axios.get(`https://chat-bot-servies.onrender.com/api/answers/index`);
                        return response.data;
                } catch (error) {
                        throw Error(error);
                }
        }
);

const getQuestionsSlice = createSlice({
        name: 'getQuestions',
        initialState: {
                data: [],
                error: null,
                loading: false,
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
                                state.data = action.payload;
                        })
                        .addCase(getQuestions.rejected, (state, action) => {
                                state.loading = false;
                                state.error = action.error.message;
                        });
        },
});

export default getQuestionsSlice.reducer;