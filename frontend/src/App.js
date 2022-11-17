import "./App.css";
import FormikForm from "./components/FormikForm";
import { Routes, Route } from "react-router-dom";
import Showdata from "./components/Showdata";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FormikForm />}></Route>
        <Route path="/showdata" exact element={<Showdata />}></Route>
      </Routes>
    </div>
  );
}

export default App;
