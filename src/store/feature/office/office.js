import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getOffices = createAsyncThunk(
  'offices/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem('loginData'));
      const { data: { response } = {} } = await axios.get(
        `${process.env.REACT_APP_API_BASEURL}office/get`,
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

export const postOffice = createAsyncThunk(
  'office/postData',
  async (empData, { rejectWithValue }) => {
    try {
      const { name, address } = empData;

      const { token } = JSON.parse(localStorage.getItem('loginData'));

      const {
        data: { status, office },
      } = await axios.post(
        `${process.env.REACT_APP_API_BASEURL}office/add`,
        {
          name,
          address,
          active: '1',
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (status) {
        toast('Office Added', {
          position: 'bottom-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return { status, office };
      }
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const officesSlice = createSlice({
  name: 'offices',
  initialState: {},
  reducers: {},
  extraReducers: {
    [getOffices.pending]: (state) => {
      state.loading = true;
    },
    [getOffices.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getOffices.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
    [postOffice.pending]: (state) => {
      state.loading = true;
    },
    [postOffice.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data.push(payload.office);
      state.isSuccess = true;
    },
    [postOffice.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

// const postOfficeSlice = createSlice({
//   name: 'postOffice',
//   initialState: {
//     data: '',
//     isSuccess: false,
//     message: '',
//     loading: false,
//   },
//   reducers: {},
//   extraReducers: {
//     [postOffice.pending]: (state) => {
//       state.loading = true;
//     },
//     [postOffice.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.data = payload;
//       state.isSuccess = true;
//     },
//     [postOffice.rejected]: (state, { payload }) => {
//       state.message = payload;
//       state.loading = false;
//       state.isSuccess = false;
//     },
//   },
// });

export default officesSlice;
