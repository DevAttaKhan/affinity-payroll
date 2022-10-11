import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getLeaveRequests = createAsyncThunk(
  'leaveRequests/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem('loginData'));
      const { data: { response } = {} } = await axios.get(
        `${process.env.REACT_APP_API_BASEURL}get_all_leave_requests`,
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

export const postLeaveRequest = createAsyncThunk(
  'leaveRequest/postData',
  async (empData, { rejectWithValue }) => {
    try {
      const { type_name } = empData;

      const { token } = JSON.parse(localStorage.getItem('loginData'));

      const {
        data: { status, employee_leave_request },
      } = await axios.post(
        `${process.env.REACT_APP_API_BASEURL}leave_request/add`,
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
        toast('Leave Request Added', {
          position: 'bottom-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return { status, employee_leave_request };
      }
      return status;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const leaveRequestSlice = createSlice({
  name: 'leaveRequest',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getLeaveRequests.pending]: (state) => {
      state.loading = true;
    },
    [getLeaveRequests.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getLeaveRequests.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
    [postLeaveRequest.pending]: (state) => {
      state.loading = true;
    },
    [postLeaveRequest.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data.push(payload.employee_leave_request);
      state.isSuccess = true;
    },
    [postLeaveRequest.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export default leaveRequestSlice;
