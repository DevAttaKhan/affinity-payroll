import { configureStore } from '@reduxjs/toolkit';
import departmentsSlice from './feature/department/department';
import {
  getEmployeesSlice,
  postEmployeeSlice,
} from './feature/employee/employee';
import officesSlice from './feature/office/office';
import shiftSlice from './feature/shift/shift';
import leaveSlice from './feature/leave/leave';
import expenseSlice from './feature/expenses/expenses';
import loanSlice from './feature/loan/loans';
import employeeTypeSlice from './feature/employeeType/employeeType';
import leaveRequestSlice from './feature/leaveRequest/leaveRequest';

export const store = configureStore({
  reducer: {
    employees: getEmployeesSlice.reducer,
    postEmployee: postEmployeeSlice.reducer,
    departments: departmentsSlice.reducer,
    offices: officesSlice.reducer,
    shifts: shiftSlice.reducer,
    leaves: leaveSlice.reducer,
    expenses: expenseSlice.reducer,
    loans: loanSlice.reducer,
    employeeTypes: employeeTypeSlice.reducer,
    leaveRequest: leaveRequestSlice,
  },
});
