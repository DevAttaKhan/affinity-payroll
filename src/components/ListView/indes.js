import React from "react";
import "./style.scss";
import DbDropdown from "../Dbdropdown/index";
import VerticleMenu from "../../assets/Icons/VerticleMenu";
import EditeIcon from "../../assets/Icons/EditeIcon";
import TrashCan from "../../assets/Icons/TrashCan";

import DropdownItem from "../DropdownItem";

function ListView() {
  return (
    <div className="list_view_outer">
      <div className="table-responsive">
        <table className="table mb-4">
          <caption>List of all users</caption>
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th>Name</th>
              <th>Email</th>
              <th className="">Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td className="text-primary">Shaun Park</td>
              <td>johndoe@yahoo.com</td>
              <td className="">
                <span className=" shadow-none badge outline-badge-primary">
                  Complete
                </span>
              </td>
              <td>
                <DbDropdown btnChild={<VerticleMenu />}>
                  <DropdownItem text="Edit" icon={<EditeIcon />} />
                  <DropdownItem text="Delete" icon={<TrashCan />} />
                </DbDropdown>
              </td>
            </tr>
            <tr>
              <td className="text-center">2</td>
              <td className="text-primary">Andy King</td>
              <td>andyking@gmail.com</td>
              <td className="">
                <span className="badge outline-badge-secondary shadow-none">
                  Pending
                </span>
              </td>
              <td>
                {" "}
                <DbDropdown btnChild={<VerticleMenu />}>
                  <DropdownItem text="Edit" icon={<EditeIcon />} />
                  <DropdownItem text="Delete" icon={<TrashCan />} />
                </DbDropdown>
              </td>
            </tr>
            <tr>
              <td className="text-center">3</td>
              <td className="text-primary">Mary McDonald</td>
              <td>lisadoe@live.com</td>
              <td className="">
                <span className="badge outline-badge-info shadow-none">
                  In Progress
                </span>
              </td>
              <td>
                {" "}
                <DbDropdown btnChild={<VerticleMenu />}>
                  <DropdownItem text="Edit" icon={<EditeIcon />} />
                  <DropdownItem text="Delete" icon={<TrashCan />} />
                </DbDropdown>
              </td>
            </tr>
            <tr>
              <td className="text-center">4</td>
              <td className="text-primary">Vincent Carpenter</td>
              <td>vinnyc@outlook.com</td>
              <td className="">
                <span className="badge outline-badge-danger shadow-none">
                  Cancel
                </span>
              </td>
              <td>
                {" "}
                <DbDropdown btnChild={<VerticleMenu />}>
                  <DropdownItem text="Edit" icon={<EditeIcon />} />
                  <DropdownItem text="Delete" icon={<TrashCan />} />
                </DbDropdown>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListView;
