import React, { useState } from "react";

const Deepcopy = () => {
  const [firstobject, setFirstobject] = useState({
    fname: "Yagnik",
    lname: "Devani",
    age: "20",
    city: "Surat",
    country: "India",
  });
  const [secondobjectdeep, setsecondobjectdeep] = useState(firstobject);

  const changesecondobjectdeepinput = (e) => {
    setsecondobjectdeep({
      ...secondobjectdeep,
      [e.target.name]: e.target.value,
    });
  };

  const ShallowcopySubmit = (e) => {
    e.preventDefault();
    setFirstobject(firstobject);
    setFirstobject(secondobjectdeep);
    console.log("firstobject", firstobject);
    console.log("secondobject", secondobjectdeep);
  };

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
          <h2 class="text-secondary">Deep Copy</h2>
        <p className="text-center w-50">Creates an independent copy with duplicated values and references. Changes made to the copy do not affect the original object. </p>
        </div>
          <form onSubmit={ShallowcopySubmit}>
          
          <h4 class="text-secondary">Secondobject</h4>
            <div class="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                value={secondobjectdeep.fname}
                onChange={changesecondobjectdeepinput}
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
                value={secondobjectdeep.lname}
                onChange={changesecondobjectdeepinput}
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
                value={secondobjectdeep.age}
                onChange={changesecondobjectdeepinput}
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
                value={secondobjectdeep.city}
                onChange={changesecondobjectdeepinput}
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
                value={secondobjectdeep.country}
                onChange={changesecondobjectdeepinput}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Deepcopy;
