import React, { useState, useEffect } from "react";
import "../styles/dashboard.css";
import axios from "axios";
import '../components/popup-form-dashboard/index.css';
import Card from "../components/reusable/Card";
import ButtonDashboard from "../components/popup-form-dashboard/ButtonDashboard";


function makeCard(data) {
  return (<Card
    name={data.status}
    token={data.tokenno}
    dos={data.pubtime}
    cardNum={0}
    clothes={data.clothescount}
  />);
}


function Dashboard({ token }) {
  const [Data, getData] = useState(null);

  const getAllData = () => {
    const formData = new FormData();
    formData.append("token", token);
    axios
      .post('http://localhost/laundashphp/getcard.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        const allData = response.data;
        getData(allData);
      });
  };

  useEffect(() => {
    getAllData();
    const interval = setInterval(() => {
      getAllData();
    }, 10000);
    return () => clearInterval(interval);
  }, [])

  if (Data) {
    return (
      <div className="dashboard">
        <div className="parent-content">

          <h2 className="dashboard-head">DASHBOARD</h2>
          <div className="main-content">

            <div className="app-card-div">

              {Data.map((data, index) => { return makeCard(data) })}

            </div>
            <div className="dashButton">
              <ButtonDashboard token={token} />
            </div>
          </div>
        </div>
      </div >
    );
  }
  return null;
}

export default Dashboard;
