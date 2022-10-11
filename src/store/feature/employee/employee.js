import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getEmployee = createAsyncThunk(
  "employee/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem("loginData"));
      //multi-level
      const { data: { response } = {} } = await axios.get(
        `${process.env.REACT_APP_API_BASEURL}employee/get`,
        {
          headers: {
            Authorization: "Bearer " + items.token,
          },
        }
      );
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const postEmployee = createAsyncThunk(
  "employee/postData",
  async (empData, { rejectWithValue }) => {
    try {
      const {
        office_id,
        department_id,
        employee_type_id,
        shift_id,
        first_name,
        last_name,
        employee_email,
        father_name,
        mother_name,
        phone,
        contract_date,
        gender,
        marital_status,
        cnic,
        dob,
        age,
        permanent_address,
        present_ddress,
        city,
        blood_group,
        religon,
        service_start_date,
        joining_confirmation_date,
        resign_date,
        leaving_confirmation_date,
        contract_end_date,
        service_end_date,
        bank,
        bank_acc_num,
        bank_branch_name,
        service_status,
        service_period,
        official_email,
        employment_type,
        grade,
        designation,
        location,
        division,
      } = empData;

      const {
        token,
        empData: { user_id },
      } = JSON.parse(localStorage.getItem("loginData"));

      const {
        status,
        data: { employee },
      } = await axios.post(
        `${process.env.REACT_APP_API_BASEURL}employee/add`,
        {
          user_id,
          office_id,
          department_id,
          employee_type_id,
          shift_id,
          first_name,
          last_name,
          employee_email,
          phone,
          contract_date,
          is_active: "1",
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (status === 200 && employee) {
        const employee_id = employee.id;
        const res = await axios.post(
          `${process.env.REACT_APP_API_BASEURL}employee_details/add`,
          {
            employee_id,
            father_name,
            mother_name,
            gender,
            marital_status,
            cnic,
            dob,
            age,
            permanent_address,
            present_ddress,
            city,
            blood_group,
            religon,
            service_start_date,
            joining_confirmation_date,
            resign_date,
            leaving_confirmation_date,
            contract_end_date,
            service_end_date,
            bank,
            bank_acc_num,
            bank_branch_name,
            service_status,
            service_period,
            official_email,
            employment_type,
            grade,
            designation,
            location,
            division,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        if (res.data.status === "success") {
          toast("User Added", {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return res.status;
        }
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getEmployeesSlice = createSlice({
  name: "getEmployees",
  initialState: {
    data: "",
    isSuccess: false,
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getEmployee.pending]: (state) => {
      state.loading = true;
    },
    [getEmployee.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getEmployee.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

const postEmployeeSlice = createSlice({
  name: "postEmployee",
  initialState: {
    data: "",
    isSuccess: false,
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [postEmployee.pending]: (state) => {
      state.loading = true;
    },
    [postEmployee.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [postEmployee.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export const getEmployeeTypes = createAsyncThunk(
  "employeeTypes/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem("loginData"));
      //multi-level
      const { data: { response } = {} } = await axios.get(
        `${process.env.REACT_APP_API_BASEURL}employee_type/get`,
        {
          headers: {
            Authorization: "Bearer " + items.token,
          },
        }
      );

      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const employeeTypesSlice = createSlice({
  name: "employeeTypes",
  initialState: {
    data: "",
    isSuccess: false,
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getEmployeeTypes.pending]: (state, { payload }) => {
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
  },
});

export { getEmployeesSlice, postEmployeeSlice, employeeTypesSlice };
