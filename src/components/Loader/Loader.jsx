import "./Loader.css";

function Loader() {
  return (
    <div className="gate-loader">
      <div className="gate left-gate"></div>
      <div className="gate right-gate"></div>

      <div className="gate-center">
        <img src="/vlogo.png" alt="Vivahasya Celebrations" />
        <p>Weddings, Crafted with Heart</p>
      </div>
    </div>
  );
}

export default Loader;
