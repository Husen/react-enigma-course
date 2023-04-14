import React from "react";
import "./App.css";

const ChildA = () => {
  const [name, setName] = React.useState("");
  console.log("render child A component");

  return (
    <>
      <p>childA</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ChildC name={name}/>
    </>
  );
};

const ChildB = () => {
  const [age, setAge] = React.useState(0);
  console.log("render child B");

  return (
    <>
      <p>childB</p>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <ChildD age={age} />
    </>
  );
};

const ChildC = (props) => {
    console.log("render child C")
    return (
        <>
            <p>name : {props.name}</p>
        </>
    )
}

const ChildD = (props) => {
    console.log("render child D")
    return (
        <>
            <p>age : {props.age}</p>
        </>
    )
}

const Parent = () => {
  console.log("render parent component");
  return (
    <>
      <h1>Parent component</h1>
      <ChildA />
      <ChildB />
    </>
  );
};


function App() {
  console.log("render app component");
  return (
    <>
      <Parent />
    </>
  );
}

export default App;
