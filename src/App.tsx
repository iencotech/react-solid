import { SingleResponsibilityPrinciple } from './01-srp';
import { OpenClosedPrinciple } from './02-ocp';
import { LiskovSubstitutionPrinciple } from './03-lsp/liskov-substitution-principle';
import './App.css'

function App() {
  return (
    <>
      <SingleResponsibilityPrinciple />
      <OpenClosedPrinciple />
      <LiskovSubstitutionPrinciple />
    </>
  )
}

export default App
