import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; import apiClient from '../api/client';

export const fetchSaaSMetrics = createAsyncThunk('saas/fetchMetrics', async () => { const response = await apiClient.get('/dashboard/metrics'); return response.data; });

const saasSlice = createSlice({ name: 'saas', initialState: { metrics: {}, status: 'idle' }, reducers: {}, extraReducers: (builder) => { builder .addCase(fetchSaaSMetrics.pending, (state) => { state.status = 'loading'; }) .addCase(fetchSaaSMetrics.fulfilled, (state, action) => { state.status = 'succeeded'; state.metrics = action.payload; }); }, });

export default saasSlice.reducer;