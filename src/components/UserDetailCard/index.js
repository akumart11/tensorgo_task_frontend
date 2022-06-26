import React, { Fragment, useState } from "react";
import EditDetails from "../EditDetails";

const UserDetailCard = (props) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const showEditDetails = () => {
    setShowEditModal(true);
  };

  const hideEditDetails = () => {
    setShowEditModal(false);
  };

  const updateData = (updatedUserDetails) => {
    const updateUserData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:4000/api/v1/users/${props.data.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUserDetails),
          }
        );
        if (response.ok) {
          hideEditDetails();
          props.setRefresh((val) => !val);
        } else {
        }
      } catch (err) {}
    };
    updateUserData();
  };

  return (
    <Fragment>
      {showEditModal && (
        <EditDetails
          updateData={updateData}
          hideEditDetails={hideEditDetails}
          data={props.data}
        />
      )}
      <div className="col-md-4 animated fadeIn" key={props.data.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-name">{props.data.name}</h5>
            <p>
              <span className="card-email">{props.data.email}</span>
              <br />
              <span className="card-gender">{props.data.gender}</span>
              <br />
              <span
                className={`card-status ${
                  props.data.status === "active" ? "active" : "inactive"
                }`}
              >
                {props.data.status}
              </span>
            </p>
          </div>
          <div>
            <button className="edit-button" onClick={showEditDetails}>
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserDetailCard;
