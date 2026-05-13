function ResultsSection({ result }) {
  return (
    <div className="text-[56px] leading-[110%] tracking-[-2px] font-extrabold italic">
      <p><span className="text-purple-500">{result.years !== "" ? result.years : "--"}</span> years</p>
      <p><span className="text-purple-500">{result.months !== "" ? result.months : "--"}</span> months</p>
      <p><span className="text-purple-500">{result.days !== "" ? result.days : "--"}</span> days</p>
    </div>
  )
}

export default ResultsSection;