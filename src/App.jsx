import pnLogo from "./assets/pn-logo.png";
import Header from "./Component/Header";
import {
  HTML_RESULTS,
  PYTHON_RESULTS,
  JAVA_RESULTS,
  ENGLISH_RESULTS
} from "./data.js";

import Scores from "./Component/Scores.jsx"
function App() {
  return (
    <>
      <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students results for (fake batch name)</h1>
      </header>
      <Header/>
      <main className="scores-container">  

      <Scores courseName="HTML" courseResults={HTML_RESULTS} />
      <Scores courseName="JAVA" courseResults={JAVA_RESULTS} />
      <Scores courseName="PYHTON" courseResults={PYTHON_RESULTS} />
      <Scores courseName="ENGLISH" courseResults={ENGLISH_RESULTS} />


      </main>
    </>
  );
}

export default App;
