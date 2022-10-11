import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getExpenses = createAsyncThunk(
  'expenses/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem('loginData'));
      const { data: { response } = {} } = await axios.get(
        `${process.env.REACT_APP_API_BASEURL}expense_type/get`,
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
export const postExpense = createAsyncThunk(
  'expense/postData',
  async (empData, { rejectWithValue }) => {
    try {
      const { name, allowed_amount } = empData;

      const { token } = JSON.parse(localStorage.getItem('loginData'));

      const {
        data: { expense_type, status },
      } = await axios.post(
        `${process.env.REACT_APP_API_BASEURL}expense_type/add`,
        {
          name,
          allowed_amount,
          active: '1',
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (status) {
        toast('Expense Added', {
          position: 'bottom-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return { status, expense_type };
      }
      return status;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getExpenses.pending]: (state) => {
      state.loading = true;
    },
    [getExpenses.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getExpenses.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
    [postExpense.pending]: (state) => {
      state.loading = true;
    },
    [postExpense.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data.push(payload.expense_type);
      state.isSuccess = true;
    },
    [postExpense.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

// const postExpenseSlice = createSlice({
//   name: 'postExpense',
//   initialState: {
//     data: '',
//     isSuccess: false,
//     message: '',
//     loading: false,
//   },
//   reducers: {},
//   extraReducers: {

//   },
// });

export default expenseSlice;
