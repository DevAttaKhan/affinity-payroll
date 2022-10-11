import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEmployeeTypes,
  postEmployee,
} from '../../store/feature/employee/employee';
import { getDepartments } from '../../store/feature/department/department';
import { getOffices } from '../../store/feature/office/office';
import { getShifts } from '../../store/feature/shift/shift';

const AddEmployee = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const [office, setOffices] = useState([]);
  const [depts, setDepts] = useState([]);
  const [shift, setShift] = useState();
  const [empType, setEmpTypes] = useState([]);

  useEffect(() => {
    dispatch(getEmployeeTypes());
    dispatch(getDepartments());
    dispatch(getOffices());
    dispatch(getShifts());
    // eslint-disable-next-line
  }, []);

  const empTypes = useSelector((state) => state.employeeTypes);
  const departments = useSelector((state) => state.departments);
  const offices = useSelector((state) => state.offices);
  const shifts = useSelector((state) => state.shifts);

  useEffect(() => {
    if (empTypes) setEmpTypes(empTypes.data);
    if (departments) setDepts(departments.data);
    if (offices) setOffices(offices.data);
    if (shifts) setShift(shifts.data);

    // eslint-disable-next-line
  }, [empTypes, departments, offices, shifts]);

  const onSubmit = (data) => {
    dispatch(postEmployee(data));
    reset();
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title mb-0">Add Employee Data</h4>
          </div>

          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="w-100">
              <div className="row">
                <div className="input-grid">
                  <h4 className="card-title">Official Information</h4>
                  <div className="mb-3">
                    <label className="form-label"> First Name:</label>
                    <input
                      className="form-control"
                      {...register('first_name', { required: true })}
                    />
                    {errors.first_name && (
                      <p className="error-input">Please enter First Name</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Last Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('last_name', { required: true })}
                    />
                    {errors.last_name && (
                      <p className="error-input">Please enter Last Name</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Official Email:</label>
                    <input
                      className="form-control"
                      type="email"
                      {...register('employee_email', { required: true })}
                    />
                    {errors.employee_email && (
                      <p className="error-input">Please enter Official Email</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date of Birth:</label>
                    <input
                      className="form-control"
                      type="date"
                      {...register('dob', {
                        required: true,
                        valueAsDate: true,
                      })}
                    />
                    {errors.dob && (
                      <p className="error-input">Please enter Date of Birth</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contract Date</label>
                    <input
                      className="form-control"
                      type="date"
                      {...register('contract_date', {
                        required: true,
                        valueAsDate: true,
                      })}
                    />
                    {errors.contract_date && (
                      <p className="error-input">Please enter Contract Date</p>
                    )}
                  </div>
                  <div className="mb-3"></div>
                  <div className="mb-3">
                    <label className="form-label">Contact</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && (
                      <p className="error-input">Please enter Phone</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Employment Type:</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('employment_type', { required: true })}
                    />
                    {errors.employment_type && (
                      <p className="error-input">
                        Please enter Employment Type
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Grade:</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('grade', { required: true })}
                    />
                    {errors.grade && (
                      <p className="error-input">Please enter Grade</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Designation:</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('designation', { required: true })}
                    />
                    {errors.designation && (
                      <p className="error-input">Please enter Designation</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Division:</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('division', { required: true })}
                    />
                    {errors.division && (
                      <p className="error-input">Please enter Division</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Location:</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('location', { required: true })}
                    />
                    {errors.location && (
                      <p className="error-input">Please enter Location</p>
                    )}
                  </div>
                  <div className="mb-3"></div>
                  <div className="mb-3"></div>
                  <div className="mb-3"></div>

                  <div className="mb-3">
                    <label className="form-label">Service Start Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      {...register('service_start_date', {
                        required: true,
                        valueAsDate: true,
                      })}
                    />
                    {errors.service_start_date && (
                      <p className="error-input">
                        Please enter Service Start Date
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Joining Confirmation Date:
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      {...register('joining_confirmation_date', {
                        required: true,
                        valueAsDate: true,
                      })}
                    />
                    {errors.joining_confirmation_date && (
                      <p className="error-input">
                        Please enter Joining Confirmation Date
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Resign Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      {...register('resign_date', {
                        required: true,
                        valueAsDate: true,
                      })}
                    />
                    {errors.resign_date && (
                      <p className="error-input">Please enter Resign Date</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Leaving Confirmation Date:
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      {...register('leaving_confirmation_date', {
                        required: true,
                        valueAsDate: true,
                      })}
                    />
                    {errors.leaving_confirmation_date && (
                      <p className="error-input">
                        Please enter Leaving Confirmation Date
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contract End Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      {...register('contract_end_date', {
                        required: true,
                        valueAsDate: true,
                      })}
                    />
                    {errors.contract_end_date && (
                      <p className="error-input">
                        Please enter Contract End Date
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Service End Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      {...register('service_end_date', {
                        required: true,
                        valueAsDate: true,
                      })}
                    />
                    {errors.service_end_date && (
                      <p className="error-input">
                        Please enter Service End Date
                      </p>
                    )}
                  </div>
                </div>
                <div className="input-grid">
                  <h4 className="card-title">Personal Information</h4>
                  <div className="mb-3">
                    <label className="form-label"> Father Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('father_name', { required: true })}
                    />
                    {errors.father_name && (
                      <p className="error-input">Please enter Father Name</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Mother Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('mother_name', { required: true })}
                    />
                    {errors.mother_name && (
                      <p className="error-input">Please enter Mother Name</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div className="dropdown">
                      <select
                        className="form-control"
                        {...register('gender', { required: true })}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="transgender">Transgender</option>
                      </select>
                    </div>
                    {errors.gender && (
                      <p className="error-input">Please enter Gender</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Marital Status</label>
                    <div className="dropdown">
                      <select
                        className="form-control"
                        {...register('marital_status', { required: true })}
                      >
                        <option value="">Select Marital Status</option>
                        <option value="single">Single/Bachelor</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                      </select>
                    </div>
                    {errors.marital_status && (
                      <p className="error-input">Please enter Marital Status</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> CNIC:</label>
                    <input
                      className="form-control"
                      type="number"
                      {...register('cnic', { required: true })}
                    />
                    {errors.cnic && (
                      <p className="error-input">Please enter CNIC</p>
                    )}
                  </div>
                  <br></br>
                  <div className="mb-3">
                    <label className="form-label">Permanent Address:</label>
                    <textarea
                      className="form-control"
                      {...register('permanent_address', { required: true })}
                    ></textarea>
                    {errors.permanent_address && (
                      <p className="error-input">
                        Please enter Permanent Address
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Present Address:</label>
                    <textarea
                      className="form-control"
                      {...register('present_ddress', { required: true })}
                    ></textarea>
                  </div>
                  {errors.present_ddress && (
                    <p className="error-input">Please enter present_ddress</p>
                  )}
                  <div className="mb-3">
                    <label className="form-label"> City:</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('city', { required: true })}
                    />
                    {errors.city && (
                      <p className="error-input">Please enter City</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Blood Group</label>
                    <div className="dropdown">
                      <select
                        className="form-control"
                        {...register('blood_group', { required: true })}
                      >
                        <option value="">Select Blood Group</option>
                        <option>A Positive</option>
                        <option value="A Negative">A Negative</option>
                        <option value="A Unknown">A Unknown</option>
                        <option value="B Positive">B Positive</option>
                        <option value="B Negative">B Negative</option>
                        <option value="B Unknown">B Unknown</option>
                        <option value="AB Positive">AB Positive</option>
                        <option value="AB Negative">AB Negative</option>
                        <option value="AB Unknown">AB Unknown</option>
                        <option value="O Positive">O Positive</option>
                        <option value="O Negative">O Negative</option>
                        <option value="O Unknown">O Unknown</option>
                        <option value="Unknown">Unknown</option>
                      </select>
                    </div>
                    {errors.blood_group && (
                      <p className="error-input">Please enter blood_group</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Religon</label>
                    <div className="dropdown">
                      <select
                        className="form-control"
                        {...register('religon', { required: true })}
                      >
                        <option value="">Select religon</option>
                        <option value="Islam">Islam</option>
                        <option value="Christianity">Christianity</option>
                        <option value="Hinduism">Hinduism</option>
                        <option value="Sikhism">Sikhism</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {errors.religon && (
                      <p className="error-input">Please enter Religon</p>
                    )}
                  </div>
                </div>
                <div className="input-grid">
                  <h4 className="card-title">Accounts Information</h4>
                  <div className="mb-3">
                    <label className="form-label"> Bank:</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('bank', { required: true })}
                    />
                    {errors.bank && (
                      <p className="error-input">Please enter Bank</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Bank Account Number:</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('bank_acc_num', { required: true })}
                    />
                    {errors.bank_acc_num && (
                      <p className="error-input">
                        Please enter Bank Account Number
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Bank Branch Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('bank_branch_name', { required: true })}
                    />
                    {errors.bank_branch_name && (
                      <p className="error-input">
                        Please enter Bank Branch Name
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Service Status:</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('service_status', { required: true })}
                    />
                    {errors.service_status && (
                      <p className="error-input">Please enter Service Status</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Service Period:</label>
                    <input
                      className="form-control"
                      type="number"
                      {...register('service_period', { required: true })}
                    />
                    {errors.service_period && (
                      <p className="error-input">Please enter Service Period</p>
                    )}
                  </div>
                </div>
                <div className="input-grid">
                  <h4 className="card-title">Work Information</h4>
                  <div className="mb-3">
                    <label className="form-label">Offices</label>
                    <div className="dropdown">
                      <select
                        className="form-control"
                        {...register('office_id', { required: true })}
                      >
                        <option value="">Select Office</option>
                        {office &&
                          office.map((i) => (
                            <option key={i.id} value={i.id}>
                              {i.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    {errors.office_id && (
                      <p className="error-input">
                        Please enter Office of Employee
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Departments</label>
                    <div className="dropdown">
                      <select
                        className="form-control"
                        {...register('department_id', { required: true })}
                      >
                        <option value="">Select Department</option>
                        {depts &&
                          depts.map((i) => (
                            <option key={i.id} value={i.id}>
                              {i.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    {errors.department_id && (
                      <p className="error-input">
                        Please enter Department of Employee
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Employee Types</label>
                    <div className="dropdown">
                      <select
                        className="form-control"
                        {...register('employee_type_id', { required: true })}
                      >
                        <option value="">Select Employee Type</option>
                        {empType &&
                          empType.map((i) => (
                            <option key={i.id} value={i.id}>
                              {i.type_name}
                            </option>
                          ))}
                      </select>
                    </div>
                    {errors.employee_type_id && (
                      <p className="error-input">Please enter Employee Type</p>
                    )}
                  </div>
                  <div className="mb-3"></div>
                  <div className="mb-3">
                    <label className="form-label">Shift</label>
                    <div className="dropdown">
                      <select
                        className="form-control"
                        {...register('shift_id', { required: true })}
                      >
                        <option value="">Select Shift</option>
                        {shift &&
                          shift.map((i) => (
                            <option key={i.id} value={i.id}>
                              {i.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    {errors.shift_id && (
                      <p className="error-input">
                        Please enter Shift of Employee
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <input
                    type="submit"
                    className=" float-end generic_buttn"
                    value={'Add Employee'}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
