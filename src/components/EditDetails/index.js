import React, { useState } from "react";
import Modal from "../Modal";
import "./style.css";

const EditDetails = (props) => {
  const [statusValue, setStatusValue] = useState(props.data.status);
  const [genderValue, setGenderValue] = useState(props.data.gender);

  const handleSelectStatusChange = (event) => {
    setStatusValue(event.target.value);
  };

  const handleSelectGenderChange = (event) => {
    setGenderValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userObject = {
      name: event.target[0].value,
      email: event.target[1].value,
      gender: event.target[2].value,
      status: event.target[3].value,
    };

    props.updateData(userObject);
  };
  return (
    <Modal>
      <div className="content">
        <div className="header">Edit Details</div>
        <form className="detailsForm" onSubmit={handleFormSubmit}>
          <div className="input-div">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              defaultValue={`${props.data.name}`}
            />
          </div>
          <div className="input-div">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              defaultValue={`${props.data.email}`}
            />
          </div>
          <div className="input-div">
            <label className="label">Gender</label>
            <select value={genderValue} onChange={handleSelectGenderChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="input-div">
            <label className="label">Status</label>
            <select value={statusValue} onChange={handleSelectStatusChange}>
              <option value="active">Active</option>
              <option value="inactive">InActive</option>
            </select>
          </div>
          <div className="actions">
            <button className="button--alt" onClick={props.hideEditDetails}>
              Close
            </button>
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditDetails;
