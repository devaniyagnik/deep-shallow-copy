import "./App.css";
import Deepcopy from "./Components/Deepcopy";
import Shallowcopy from "./Components/Shallowcopy";

function App() {
  return (
    <>
      <div className="fluid-container">
        {/* <h1 className='text-center'>Deep copy</h1> */}
        <Deepcopy />
        <br />
        {/* <h1  className='text-center'>Shallow copy</h1> */}
        <Shallowcopy />
      </div>
    </>
  );
}

export default App;
