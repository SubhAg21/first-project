// import React from 'react'

import Display from "./Components/Display";
import Header from "./Components/Header";
import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";
import { Provider } from "react-redux";
import Store from "./Store/Counter";

const App = () => {
  return (
    <>
      <Provider store = {Store}>
        <div className="px-4 py-5 my-5 text-center border border-5 border-danger shadow  w-50 mx-auto">
          <Header />
          <div className="col-lg-6 mx-auto">
            <Display />
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-outline-success border-2 fw-bold border-success  btn-lg px-4 gap-3"
              >
                INC <IoMdAddCircle />
              </button>

              <button
                type="button"
                className="btn btn-outline-danger border border-danger fw-bold border-2 btn-lg px-4"
              >
                DEC <FaMinusCircle />
              </button>
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
};

export default App;
