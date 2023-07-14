import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-header">Create new bank account</div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                </div>
              </div>
            </div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
