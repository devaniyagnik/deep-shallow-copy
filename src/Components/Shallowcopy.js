import React, { useState } from "react";


const Shallowcopy = () => {
  const [firstobject,setFirstobject] = useState({
    fname: "Yagnik",
    lname: "Devani",
    age: "20",
    city: "Surat",
    country: "India",
  });
  let secondobject = firstobject;
const [alldatashallow,setAlldatashallow] = useState({});
  
const secondobjectinputhandler = (e) =>{
  let name = e.target.name;
  let value = e.target.value;
  secondobject[name]=value;
}
  const ShallowcopySubmit = (e) =>{
    e.preventDefault();
    console.log("firstobject",firstobject);
    console.log("secondobject",secondobject);
    setAlldatashallow(firstobject);
 
  }
  
  return (
    <>
      <div class="container mt-5">
      <div className="d-flex align-items-center justify-content-around">
        <form>
        <h4 class="text-secondary">Firstobject</h4>
          <div class="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              value={firstobject.fname}
              disabled
            />
          </div>
          <div class="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              name="lastName"
              placeholder="Enter last name"
              value={firstobject.lname}
              disabled
            />
          </div>
          <div class="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              class="form-control"
              id="age"
              name="age"
              placeholder="Enter age"
              value={firstobject.age}
              disabled
            />
          </div>
          <div class="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              class="form-control"
              id="city"
              name="city"
              placeholder="Enter city"
              value={firstobject.city}
              disabled
            />
          </div>
          <div class="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              class="form-control"
              id="country"
              placeholder="Enter country"
              value={firstobject.country}
              disabled
            />
          </div>
          
        </form>
        <div className="d-flex flex-column align-items-center">
        <h2 class="text-secondary">
        Shallow Copy
        </h2>
        <p className="text-center w-50">Creates a new object with copied values, but references to other objects remain the same. Changes made to the copy will affect the original object</p>

        <p className="text-center w-50 text-danger"><b> Note </b>: This is work first time then work but don't show here! output in console </p>
        </div>
        <form onSubmit={ShallowcopySubmit}>
        <h4 class="text-secondary">Secondobject</h4>
          <div class="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              name="fname"
              placeholder="Enter first name"
              // value={secondobject.fname}
              onChange={secondobjectinputhandler}
              required
              
            />
          </div>
          <div class="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              name="lname"
              placeholder="Enter last name"
              // value={secondobject.lname}
              onChange={secondobjectinputhandler}
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              class="form-control"
              id="age"
              name="age"
              placeholder="Enter age"
              // value={secondobject.age}
              onChange={secondobjectinputhandler}
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              class="form-control"
              id="city"
              name="city"
              placeholder="Enter city"
              // value={secondobject.city}
              onChange={secondobjectinputhandler}
              required
             
            />
          </div>
          <div class="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              class="form-control"
              id="country"
              name="country"
              placeholder="Enter country"
              // value={secondobject.country}
              onChange={secondobjectinputhandler}
              required
            />
          </div>
          <button type="submit"  class="btn btn-primary">
            Submit
          </button>
        </form>
        {/* {alldatashallow.fname} */}
      </div>
      </div>
    </>
  );
};

export default Shallowcopy;
