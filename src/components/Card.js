import React from "react";

function Card() {
  return (
    <div>
      <div>
        <div>
          <div
            className="card mt-3"
            style={{ width: "18rem", maxHeight: "360px" }}
          >
            <img
              src="https://www.istockphoto.com/photo/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-tikka-is-an-gm1186759790-334957865?phrase=paneer%20tikka"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">this is specifications of food</p>
              <div className="container w-100">
                <select className="m-2 h-100 bg-success">
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>
                <select className="m-2 h-100 bg-success">
                  <option value="half">half</option>
                  <option value="full">full</option>
                </select>
                <div className="d-inline h-100 fs-5">Total Price</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
