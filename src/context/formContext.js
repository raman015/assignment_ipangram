import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const FormContext = ({ children }) => {
  const [state, setState] = useState([
    {
      summary_0: "",
      question1_0: "",
      question2_0: "",
      question3_0: "",
      question4_0: "",
      question5_0: {
        Not_Relevant: "",
        When_lying_down: "",
        When_Sitting: "",
        When_Standing: "",
        In_Walking: "",
      },
      question6_0: "",
    },
  ]);

  const handlerData = (event, index) => {
    const newData = [...state];
    newData[index][event.target.name] = event.target.value;

    setState(newData);
  };

  const keyHandlers = (event, index, ssss) => {
    const newData = [...state];

    newData[index][event.target.name][ssss] = event.target.checked;

    setState(newData);
  };

  const formAppendHandler = () => {
    const index = state.length;
    setState([
      ...state,
      {
        [`summary_${index}`]: "",
        [`question1_${index}`]: "",
        [`question2_${index}`]: "",
        [`question3_${index}`]: "",
        [`question4_${index}`]: "",
        [`question5_${index}`]: {
          Not_Relevant: "",
          When_lying_down: "",
          When_Sitting: "",
          When_Standing: "",
          In_Walking: "",
        },
        [`question6_${index}`]: "",
      },
    ]);
  };

  const removeFormHandler = (index) => {
    setState((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <StoreContext.Provider
      value={{
        state,
        setState,
        handlerData,
        formAppendHandler,
        removeFormHandler,
        keyHandlers,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default FormContext;
