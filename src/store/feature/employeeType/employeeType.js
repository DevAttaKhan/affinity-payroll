import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getEmployeeTypes = createAsyncThunk(
  'employeeTypes/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem('loginData'));
      const { data: { response } = {} } = await axios.get(
        `${process.env.REACT_APP_API_BASEURL}employee_type/get`,
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

export const postEmployeeType = createAsyncThunk(
  'employeeType/postData',
  async (empData, { rejectWithValue }) => {
    try {
      const { type_name } = empData;

      const { token } = JSON.parse(localStorage.getItem('loginData'));

      const {
        data: { status, employee_type },
      } = await axios.post(
        `${process.env.REACT_APP_API_BASEURL}employee_type/add`,
        {
          type_name,
          active: '1',
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (status) {
        toast('EmployeeType Added', {
          position: 'bottom-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return { status, employee_type };
      }
      return status;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const employeeTypeSlice = createSlice({
  name: 'employeeType',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getEmployeeTypes.pending]: (state) => {
      state.loading = true;
    },
    [getEmployeeTypes.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getEmployeeTypes.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
    [postEmployeeType.pending]: (state) => {
      state.loading = true;
    },
    [postEmployeeType.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data.push(payload.employee_type);
      state.isSuccess = true;
    },
    [postEmployeeType.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export default employeeTypeSlice;
