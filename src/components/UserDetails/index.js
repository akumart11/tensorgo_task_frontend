import React, { Fragment, useEffect, useState } from "react";
import UserDetailCard from "../UserDetailCard";
import "./style.css";

const UserDetails = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:4000/api/v1/users");
        if (response.ok) {
          const data = await response.json();
          setError(false);
          setUserData(data);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      }
    };
    getUserData();
  }, [refresh]);

  console.log();

  return (
    <Fragment>
      <div className="row">
        {error && <div>Failed To Fetch Data</div>}
        {userData?.data.length <= 0 && <div>No Data To Show</div>}
        {userData?.data.length > 0 &&
          userData?.data.map((data) => (
            <UserDetailCard setRefresh={setRefresh} key={data.id} data={data} />
          ))}
      </div>
    </Fragment>
  );
};

export default UserDetails;
