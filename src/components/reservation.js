import React from "react";

const Reservation = () => {
  return (
    <>
      <h1>Book a Table</h1>
      <form>
        <div>
       <input placeholder=" your name"/>

        </div>
        <div className="radio-group">
          <input type="radio" name="table-size" value="2" id="table-2" />
          <label htmlFor="table-2">2-person table</label>

          <input type="radio" name="table-size" value="4" id="table-4" />
          <label htmlFor="table-4">4-person table</label>

          <input type="radio" name="table-size" value="6" id="table-6" />
          <label htmlFor="table-6">6-person table</label>
        </div>
        <div className="radio-group">
            <input type="radio" name="loc"/>
            <label htmlFor="loc">Indoors</label>
            <input type="radio" name="loc"/>
            <label htmlFor="loc">Outdoors</label> 
            <button>Book Table</button>
            
        </div>
      </form>
    </>
  );
};

export default Reservation;
