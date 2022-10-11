import { faUser } from '@fortawesome/free-solid-svg-icons';

import AdminHeading from '../components/AdminHeading/AdminHeading';
import Card from '../components/Card';
import StatisticCard from '../components/Layout/StatisticCard';
import LeaveInfoBox from '../components/LeaveInfoBox/Index';
import Button from '../components/Button/Index';
import EmployeesTable from '../components/EmployeesConfigurations/EmployeesTable';
import LoanTable from '../components/LoanTable/Index';
import AdvancesTable from '../components/AdvancesTable/Index';

const CARDS = {
  name: 'Employees',
  count: 218,
  icon: faUser,
};

function Home() {
  return (
    <>
      <AdminHeading title="Welcome Admin" />

      <div className="row mb-4">
        <div className="col-md-12  ">
          <Card faIcon={CARDS.icon} name={CARDS.name} count={CARDS.count} />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <EmployeesTable />
        </div>
      </div>
      <div className="row  mb-4">
        <div className="col-md-4">
          <StatisticCard title="Today Absent" badge>
            <div className="card_body">
              <LeaveInfoBox
                avtar="https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/user.jpg"
                name="Martin Lewis"
              />
              <LeaveInfoBox
                avtar="https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/user.jpg"
                name="jack Sparrow"
                date="4 Sep 2010"
                status="approved"
              />
              <LeaveInfoBox
                avtar="https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/user.jpg"
                name="jack Sparrow"
                date="4 Sep 2010"
                status="approved"
              />
              <LeaveInfoBox
                avtar="https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/user.jpg"
                name="jack Sparrow"
                date="4 Sep 2010"
                status="approved"
              />
            </div>
            <Button btnText="Load More" />
          </StatisticCard>
        </div>
        <div className="col-md-4">
          <StatisticCard title="Today Leave" badge>
            <div className="card_body">
              <LeaveInfoBox
                avtar="https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/user.jpg"
                name="Martin Lewis"
              />
              <LeaveInfoBox
                avtar="https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/user.jpg"
                name="jack Sparrow"
                date="4 Sep 2010"
                status="approved"
              />
              <LeaveInfoBox
                avtar="https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/user.jpg"
                name="jack Sparrow"
                date="4 Sep 2010"
                status="approved"
              />
              <LeaveInfoBox
                avtar="https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/user.jpg"
                name="jack Sparrow"
                date="4 Sep 2010"
                status="approved"
              />
            </div>
            <Button btnText="Load More" />
          </StatisticCard>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <LoanTable />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <AdvancesTable />
        </div>
      </div>
    </>
  );
}

export default Home;
