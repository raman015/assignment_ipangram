import React, { useContext, useState } from "react";
import { StoreContext } from "../context/formContext";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

export default function Summary() {
  const [open, setOpen] = useState(false);

  const { state } = useContext(StoreContext);

  const Navigate = useNavigate();

  const formSubmitHandler = () => {
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="container my-5 ">
      {open && <Alert variant={"success"}>Form Submitted successfully !</Alert>}

      {state.map((e, index) => {
        return (
          <>
            <div className="card  my-4" key={index}>
              <div className="card-body">
                <div className="fs-4 mb-4">Form {index + 1}</div>

                <ul>
                  <li className="mb-3">
                    <h6 className="mj card-text">
                      Have You been Diagnosd with this problem ?
                    </h6>
                    <p className="card-text">{e[`question1_${index}`]}</p>
                  </li>
                  <li className="mb-3">
                    <h6 className="mj card-text">
                      Did the problem Start after a Physical trauma ?
                    </h6>
                    <p className="card-text">{e[`question2_${index}`]}</p>
                  </li>
                  <li className="mb-3">
                    <h6 className="mj card-text">
                      Did the problem start a mental trauma ?
                    </h6>
                    <p className="card-text">{e[`question3_${index}`]}</p>
                  </li>
                  <li className="mb-3">
                    <h6 className="mj card-text">
                      How often do you experience the problem ?
                    </h6>
                    <p className="card-text">{e[`question4_${index}`]}</p>
                  </li>
                  <li className="mb-3">
                    <h6 className="mj card-text">
                      When do You experience the problem ?
                    </h6>
                    <p className="card-text">
                      {Object.entries(e[`question5_${index}`])
                        .filter(([keys, values]) => values)
                        .map(([keys, values], index, arr) => {
                          let label = keys.replaceAll("_", " ");
                          if (index === arr.length - 1) {
                            return label;
                          } else {
                            return label + ", ";
                          }
                        })}
                    </p>
                  </li>
                  <li className="mb-3">
                    <h6 className="mj card-text">
                      Have You been Diagnosd with this problem ? How intense is
                      the experince of the problem on average on 0-10 scale ?
                    </h6>
                    <p className="card-text">{e[`question6_${index}`]}</p>
                  </li>
                </ul>
              </div>
            </div>
          </>
        );
      })}

      <div className="btn mt-5">
        <button
          onClick={() => Navigate("/")}
          type="button"
          class="btn btn-primary"
        >
          edit
        </button>
        <button
          onClick={() => formSubmitHandler()}
          type="button"
          class="btn btn-primary"
        >
          submit
        </button>
      </div>
    </div>
  );
}
