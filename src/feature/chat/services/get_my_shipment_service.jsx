import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASEURL = 'https://prime-shippa-api.point-dev.net/api/';

export const getMyShipment = createAsyncThunk(
        'shipment/identifier',
        async ({ identifier }, { rejectWithValue }) => {
                try {
                        const response = await axios.get(`${BASEURL}shipment/identifier/${identifier}`);
                        console.log("getMyShipment success: ", response.data);

                        return response.data;
                } catch (error) {
                        if (error.response) {
                                console.log("Detailed error response: ", error.response.data);
                                return rejectWithValue(error.response.data);
                        } else if (error.request) {
                                throw { error: "Can't connect with the server. Please check your network connection." };
                        } else {
                                throw { error: "Error setting up the request." };
                        }
                }
        }
);

const createBrnchSlice = createSlice({
        name: 'getMyShipment',
        initialState: {
                data: null,
                loading: false,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(getMyShipment.pending, (state) => {
                                state.loading = true;
                        })
                        .addCase(getMyShipment.fulfilled, (state, action) => {
                                state.loading = false;
                                state.error = null;
                                state.data = action.payload.data;
                        })
                        .addCase(getMyShipment.rejected, (state, action) => {
                                state.loading = false;
                                state.error = action.payload.error;
                        });
        },
});

export default createBrnchSlice.reducer;
