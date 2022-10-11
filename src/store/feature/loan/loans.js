import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
const initialState = {};
export const getLoans = createAsyncThunk(
  'loans/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem('loginData'));
      const { data: { response } = {} } = await axios.get(
        `${process.env.REACT_APP_API_BASEURL}get_loan_types`,
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

export const postLoan = createAsyncThunk(
  'loan/postData',
  async (empData, { rejectWithValue }) => {
    try {
      const { name } = empData;

      const { token } = JSON.parse(localStorage.getItem('loginData'));

      const {
        data: { status, loan_type },
      } = await axios.post(
        `${process.env.REACT_APP_API_BASEURL}loan_type/add`,
        {
          name,
          active: '1',
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (status) {
        toast('Loan Added', {
          position: 'bottom-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return { status, loan_type };
      }
      return status;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {},
  extraReducers: {
    [getLoans.pending]: (state) => {
      state.loading = true;
    },
    [getLoans.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getLoans.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
    [postLoan.pending]: (state) => {
      state.loading = true;
    },
    [postLoan.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data.push(payload.loan_type);
      state.isSuccess = true;
    },
    [postLoan.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export default loanSlice;
