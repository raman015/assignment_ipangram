import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/formContext";
import { useNavigate } from "react-router-dom";
export default function Firstpart() {
  const {
    state,
    formAppendHandler,
    handlerData,
    removeFormHandler,
    keyHandlers,
  } = useContext(StoreContext);

  const Navigate = useNavigate();

  const formValidator = () => {
    state.forEach((element) => {
      Object.entries(element).map(([keys, values]) => {
        if (typeof values === "string") {
          if (values === "") {
            const elements = document.getElementsByName(keys);
            for (let i = 0; i < elements.length; i++) {
              const el = elements[i];
              if (values === "") {
                el.style.border = "1px solid red";
              }
            }
          } else {
            const elements = document.getElementsByName(keys);
            for (let i = 0; i < elements.length; i++) {
              const el = elements[i];
              if (values === "") {
                el.style.border = "1px solid gray";
              }
            }

            Navigate("summary");
          }
        }
      });
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="top">
          <h2>Pain & Functional Description </h2>
          <p>
            The description of the current situation gives your Optimum Trainer
            a picture of and clues to the underlying causes of your problems
          </p>
          <p>
            if you have problems with pain/aches,stiffness,weakness or
            functional problem,describe this/these below. (List the symptoms in
            descending order with the most troublesome first)
          </p>
        </div>

        {state.map((el, index) => (
          <div key={index}>
            {console.log(el)}
            {index !== 0 && (
              <div style={{ width: "100%" }}>
                <div className="line1">
                  <div className="line"></div>
                  <div
                    className="icon"
                    onClick={() => removeFormHandler(index)}
                  >
                    <i class="fa fa-minus" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            )}

            <div className="handler">
              <textarea
                rows="4"
                className="fill"
                cols="75"
                value={el[`summary_${index}`]}
                name={`summary_${index}`}
                onChange={(event) => handlerData(event, index)}
              />
            </div>

            <div className="handler">
              <h6 className="mj">
                Have You been Diagnosd with this problem ?{" "}
              </h6>
              <div className="form-check1">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question1_${index}`] === "Not Relevant"}
                  name={`question1_${index}`}
                  id="flexRadioDefault1"
                  value="Not Relevant"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Not Relevant
                </label>
              </div>
              <div className="form-check1">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question1_${index}`] === "Yes"}
                  name={`question1_${index}`}
                  id="flexRadioDefault2"
                  value="Yes"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Yes
                </label>
              </div>
              <div className="form-check1">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question1_${index}`] === "No"}
                  name={`question1_${index}`}
                  id="flexRadioDefault3"
                  value="No"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault3">
                  No
                </label>
              </div>
            </div>
            <div className="handler">
              <h6 className="mj1">
                Did the problem Start after a Physical trauma ?
              </h6>
              <div className="form-check2">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question2_${index}`] === "Not Relevant"}
                  name={`question2_${index}`}
                  id="flexRadioDefault4"
                  value="Not Relevant"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault4">
                  Not Relevant
                </label>
              </div>
              <div className="form-check2">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question2_${index}`] === "Yes"}
                  name={`question2_${index}`}
                  id="flexRadioDefault5"
                  value="Yes"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault5">
                  Yes
                </label>
              </div>
              <div className="form-check2">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question2_${index}`] === "No"}
                  name={`question2_${index}`}
                  id="flexRadioDefault6"
                  value="No"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault6">
                  No
                </label>
              </div>
            </div>

            <div className="handler">
              <h6 className="mj2">Did the problem start a mental trauma ? </h6>

              <div className="form-check3">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question3_${index}`] === "Not Relevant"}
                  name={`question3_${index}`}
                  id="flexRadioDefault7"
                  value="Not Relevant"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault7">
                  Not Relevant
                </label>
              </div>
              <div className="form-check3">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question3_${index}`] === "Yes"}
                  name={`question3_${index}`}
                  id="flexRadioDefault8"
                  value="Yes"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault8">
                  Yes
                </label>
              </div>
              <div className="form-check3">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question3_${index}`] === "No"}
                  name={`question3_${index}`}
                  id="flexRadioDefault9"
                  value="No"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault9">
                  No
                </label>
              </div>
            </div>

            <div className="handler">
              <h6 className="hmk">
                How often do you experience the problem ?{" "}
              </h6>
            </div>
            <div className="handler">
              <div className="form-check5">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question4_${index}`] === "Not Relevant"}
                  name={`question4_${index}`}
                  id="flexRadioDefault1"
                  value="Not Relevant"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Not Relevant
                </label>
              </div>
              <div className="form-check5">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question4_${index}`] === "Daily"}
                  name={`question4_${index}`}
                  id="flexRadioDefault2"
                  value="Daily"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Daily
                </label>
              </div>
              <div className="form-check5">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question4_${index}`] === "Several times/Week"}
                  name={`question4_${index}`}
                  id="flexRadioDefault2"
                  value="Several times/Week"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Several times/Week
                </label>
              </div>
              <div className="form-check5">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question4_${index}`] === "A few times/Month"}
                  name={`question4_${index}`}
                  id="flexRadioDefault2"
                  value="A few times/Month"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  A few times/Month
                </label>
              </div>

              <div className="form-check5">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={el[`question4_${index}`] === "A few times/Year"}
                  name={`question4_${index}`}
                  id="flexRadioDefault2"
                  value="A few times/Year"
                  onChange={(event) => handlerData(event, index)}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  A few times/Year
                </label>
              </div>
            </div>

            {/* -------------------------------------chekboxx */}
            <h6 className="handler">When do You experience the problem ?</h6>
            <div className="handler">
              <div style={{ width: "30%" }}>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name={`question5_${index}`}
                    value="Not Relevant"
                    onChange={(event) =>
                      keyHandlers(event, index, "Not_Relevant")
                    }
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Not Relevant
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name={`question5_${index}`}
                    onChange={(event) =>
                      keyHandlers(event, index, "When_lying_down")
                    }
                    value="When lying down"
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    When lying down
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name={`question5_${index}`}
                    onChange={(event) =>
                      keyHandlers(event, index, "When_Sitting")
                    }
                    value=" When Sitting"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    When Sitting
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    onChange={(event) =>
                      keyHandlers(event, index, "When_Standing")
                    }
                    name={`question5_${index}`}
                    value=" When Standing"
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    When Standing
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    onChange={(event) =>
                      keyHandlers(event, index, "In_Walking")
                    }
                    name={`question5_${index}`}
                    value="When Standing"
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    In Walking
                  </label>
                </div>
              </div>
              <div className="small">
                <p>
                  Other ? for example in rotations,side bends, wing stairs,when
                  working with the arms above the head
                </p>
              </div>
            </div>

            {/* <---------------------------------intense> */}
            <div className="handler">
              <h6 className="hmk">
                How intense is the experince of the problem on average on 0-10
                scale ?
              </h6>
            </div>
            <div>
              <div className="intens">
                <div className="form-check">
                  <div>
                    <label class="form-check-label" for="flexRadioDefault2">
                      1
                    </label>
                  </div>
                  <div>
                    <input
                      class="form-check-input"
                      type="radio"
                      checked={el[`question6_${index}`] === "1"}
                      name={`question6_${index}`}
                      id="flexRadioDefault2"
                      value="1"
                      onChange={(event) => handlerData(event, index)}
                    />
                  </div>
                </div>
                <div className="form-check">
                  <div>
                    <label class="form-check-label" for="flexRadioDefault2">
                      2
                    </label>
                  </div>
                  <div>
                    <input
                      class="form-check-input"
                      checked={el[`question6_${index}`] === "2"}
                      type="radio"
                      name={`question6_${index}`}
                      id="flexRadioDefault2"
                      value="2"
                      onChange={(event) => handlerData(event, index)}
                    />
                  </div>
                </div>
                <div className="form-check">
                  <div>
                    <label class="form-check-label" for="flexRadioDefault2">
                      3
                    </label>
                  </div>
                  <div>
                    <input
                      class="form-check-input"
                      type="radio"
                      checked={el[`question6_${index}`] === "3"}
                      name={`question6_${index}`}
                      id="flexRadioDefault2"
                      value="3"
                      onChange={(event) => handlerData(event, index)}
                    />
                  </div>
                </div>
                <div className="form-check">
                  <div>
                    <label class="form-check-label" for="flexRadioDefault2">
                      4
                    </label>
                  </div>
                  <div>
                    <input
                      class="form-check-input"
                      type="radio"
                      checked={el[`question6_${index}`] === "4"}
                      name={`question6_${index}`}
                      id="flexRadioDefault2"
                      value="4"
                      onChange={(event) => handlerData(event, index)}
                    />
                  </div>
                </div>
                <div className="form-check">
                  <div>
                    <label class="form-check-label" for="flexRadioDefault2">
                      5
                    </label>
                  </div>
                  <div>
                    <input
                      class="form-check-input"
                      type="radio"
                      checked={el[`question6_${index}`] === "5"}
                      name={`question6_${index}`}
                      id="flexRadioDefault2"
                      value="5"
                      onChange={(event) => handlerData(event, index)}
                    />
                  </div>
                </div>
                <div className="form-check">
                  <div>
                    <label class="form-check-label" for="flexRadioDefault2">
                      6
                    </label>
                  </div>
                  <div>
                    <input
                      class="form-check-input"
                      type="radio"
                      checked={el[`question6_${index}`] === "6"}
                      name={`question6_${index}`}
                      id="flexRadioDefault2"
                      value="6"
                      onChange={(event) => handlerData(event, index)}
                    />
                  </div>
                </div>
                <div className="form-check">
                  <div>
                    <label class="form-check-label" for="flexRadioDefault2">
                      7
                    </label>
                  </div>
                  <div>
                    <input
                      class="form-check-input"
                      type="radio"
                      checked={el[`question6_${index}`] === "7"}
                      name={`question6_${index}`}
                      id="flexRadioDefault2"
                      value="7"
                      onChange={(event) => handlerData(event, index)}
                    />
                  </div>
                </div>
                <div className="form-check">
                  <div>
                    <label class="form-check-label" for="flexRadioDefault2">
                      8
                    </label>
                  </div>
                  <div>
                    <input
                      class="form-check-input"
                      type="radio"
                      checked={el[`question6_${index}`] === "8"}
                      name={`question6_${index}`}
                      id="flexRadioDefault2"
                      value="8"
                      onChange={(event) => handlerData(event, index)}
                    />
                  </div>
                </div>
                <div className="form-check">
                  <div>
                    <label class="form-check-label" for="flexRadioDefault2">
                      9
                    </label>
                  </div>
                  <div>
                    <input
                      class="form-check-input"
                      type="radio"
                      checked={el[`question6_${index}`] === "9"}
                      name={`question6_${index}`}
                      id="flexRadioDefault2"
                      value="9"
                      onChange={(event) => handlerData(event, index)}
                    />
                  </div>
                </div>
                <div className="form-check">
                  <div>
                    <label class="form-check-label" for="flexRadioDefault2">
                      10
                    </label>
                  </div>
                  <div>
                    <input
                      class="form-check-input"
                      type="radio"
                      checked={el[`question6_${index}`] === "10"}
                      name={`question6_${index}`}
                      id="flexRadioDefault2"
                      value="10"
                      onChange={(event) => handlerData(event, index)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ------------------------------------------singlelinebutton---------------- */}

        {state.length !== 3 && (
          <div style={{ width: "100%" }}>
            <div className="line1">
              <div className="line"></div>
              <div className="icon" onClick={() => formAppendHandler()}>
                <i class="fa fa-plus" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        )}

        {/* ---------------------------------------------button----------------------- */}
        <div className="btn mt-5">
          <button type="button" class="btn btn-primary">
            Back
          </button>
          <button
            type="button"
            onClick={() => formValidator()}
            class="btn btn-primary"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
