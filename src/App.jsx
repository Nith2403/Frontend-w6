import pnLogo from "./assets/pn-logo.png";
import Header from "./Component/Header"
import {HTML_RESULTS} from "./data.js"
import Scores from "./Component/Scores.jsx"
function App() {
  return (
    <>
      <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students results for (fake batch name))</h1>
      </header>

      <main className="scores-container">
        
      <Scores courseName="HTML" courseResults={HTML_RESULTS} />

      </main>
    </>
  );
}

export default App;
