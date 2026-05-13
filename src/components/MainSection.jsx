import DateForm from "./DateForm";
import ResultsSection from "./ResultsSection";

function MainSection() {
  return (
    <main className="bg-white px-6 py-12 rounded-3xl rounded-br-[100px] flex flex-col gap-8">
      <DateForm />

      <ResultsSection />
    </main>
  )
}

export default MainSection;