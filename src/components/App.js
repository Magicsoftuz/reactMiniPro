import React from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Accordion from "./Accordion";
import Translate from "./Translate";

const data = [
  { savol: "React zurmi?", javob: "Bilmadim" },
  { savol: "Js zurmi", javob: "Bilmadim" },
  { savol: "HTML zurmi?", javob: "Zur" },
];

const dropdownData = [
  { color: "The Color Red", value: "red" },
  { color: "The Color Green", value: "green" },
  { color: "The Color Blue", value: "blue" },
];

const App = () => {
  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
