import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getShifts = createAsyncThunk(
  'shifts/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem('loginData'));
      const { data: { response } = {} } = await axios.get(
        `${process.env.REACT_APP_API_BASEURL}shift/get`,
        {
          headers: {
            Authorization: 'Bearer ' + items.token,
          },
        }
      );

      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const postShift = createAsyncThunk(
  'shift/postData',
  async (empData, { rejectWithValue }) => {
    try {
      const { name, start_time, end_time, grace_period, office_id } = empData;

      const { token } = JSON.parse(localStorage.getItem('loginData'));

      const {
        data: { status, shift },
      } = await axios.post(
        `${process.env.REACT_APP_API_BASEURL}shift/add`,
        {
          name,
          start_time,
          end_time,
          grace_period,
          office_id,
          active: '1',
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (status) {
        toast('Shift Added', {
          position: 'bottom-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return { status, shift };
      }
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const shiftSlice = createSlice({
  name: 'shift',
  initialState: {},
  reducers: {},
  extraReducers: {
    [getShifts.pending]: (state) => {
      state.loading = true;
    },
    [getShifts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getShifts.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
    [postShift.pending]: (state) => {
      state.loading = true;
    },
    [postShift.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data.push(payload.shift);
      state.isSuccess = true;
    },
    [postShift.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export default shiftSlice;
