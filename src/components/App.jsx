import "./../styles/App.css";
import userSvg from "./../assets/user.svg";
import downSvg from "./../assets/angle-down.svg";
import Buttons from "./Buttons.jsx";

function Section({
  name = "Personal Information",
  svgUrl = userSvg,
  content = null,
  isExpanded = false,
}) {
  return (
    <section className="section">
      <header>
        <img src={svgUrl} alt={`${name} icon`} />
        <p>{name}</p>
        <button type="button" className="expandCollapse" active={isExpanded}>
          <img src={downSvg} alt="expand or collaps section" />
        </button>
      </header>
      {isExpanded && content}
    </section>
  );
}

function Form() {
  return (
    <form className="form">
      <Section />
      <Section />
    </form>
  );
}

function Pdf() {
  return <div className="pdf"></div>;
}

function Menu() {
  return <div className="menu">
    <Buttons />
    <Form />
  </div>;
}

function App() {
  return (
    <div className="container">
      <Menu />
      <Pdf />
    </div>
  );
}

export default App;
