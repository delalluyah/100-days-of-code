import "./App.css";
import Modal from "../Modal";

function App() {
  return (
    <div className="main-content">
      <Modal display_link={true}>
        <p style={{ textAlign: "center" }}> Hello there!</p>
      </Modal>
    </div>
  );
}

export default App;
