import "./../styles/buttons.css";

export default function Buttons() {
  return (
    <div className="buttons">
      <button type="button" className="loadExample">
        Load Example
      </button>
      <button type="button" className="clearResume">
        Clear Resume
      </button>
      <button type="button" className="savePdf">
        Save as PDF
      </button>
    </div>
  );
}