import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return {
        count: 0,
      };
  }
}
const Counter = () => {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <div>
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-md-6 bg-primary" style={{ padding: 120 }}>
          <div className="row align-items-center">
            <Count
              rounded
              title={state.count}
              className="btn-primary btn-sm"
              onPress={() => null}
            />
          </div>

          <div className="row">
            <Count
              title="-"
              className="btn-primary btn-sm"
              onPress={() => dispatch({ type: "decrement" })}
            />

            <Count
              title="+"
              className="btn-primary btn-sm"
              onPress={() => dispatch({ type: "increment" })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

function Count({ title, onPress, rounded }) {
  return (
    <div
      className="col"
      onClick={onPress}
      style={{
        cursor: "pointer",
        width: "24%",
        height: "24%",
        margin: 20,
        backgroundColor: "#FFF",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontSize: 50,
          textAlign: "center",
          verticalAlign: "middle",
          fontWeight: "bold",
          display: "block",
        }}
      >
        {title}
      </span>
    </div>
  );
}
