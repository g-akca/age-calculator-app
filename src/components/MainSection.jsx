import { useState } from "react";
import DateForm from "./DateForm";
import ResultsSection from "./ResultsSection";

function MainSection() {
  const [result, setResult] = useState({
    years: "",
    months: "",
    days: ""
  });

  return (
    <main className="bg-white px-6 py-12 rounded-3xl rounded-br-[100px] flex flex-col gap-8">
      <DateForm setResult={setResult} />

      <ResultsSection result={result} />
    </main>
  )
}

export default MainSection;