import React from 'react';
import './App.css';

// input address
const ChildA = ({setAddress, address}) => {
    console.log('child a')

    return (
        <>
            <p>child a component</p>
            <form>
                <input placeholder={"address"} onChange={(e) => setAddress(e.target.value)} value={address} />
            </form>
        </>
    )
}

// input name
const ChildB = ({setName, name}) => {
    console.log('child b')
    return (
        <>
            <p>child b component</p>
            <form>
                <input placeholder={"name"} onChange={(e) => setName(e.target.value)} value={name} />
            </form>
        </>
    )
}

// print
const ChildC = React.memo((props) => {
    console.log('child c')
    return (
        <>
            <p>child c component</p>
            <p>name : {props.name}</p>
        </>
    )
})

// const ChildD = () => {

// }

const ChildE = React.memo(({address}) => {
    console.log('child e')
    return (
        <p>address: {address}</p>
    )
})

const Parent = () => {
    console.log("render parent component")
    const [name, setName] = React.useState("")
    const [address, setAddress] = React.useState("")
    return (
        <>
            <ChildA address={address} setAddress={setAddress} />
            <ChildB name={name} setName={setName} />
            <ChildC name={name} />
            <ChildE address={address} />
        </>
    )
}

function App() {
  return (
    <>
        <Parent />
    </>
  );
}

export default App;
