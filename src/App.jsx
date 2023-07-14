import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Button.scss";
import { useEffect, useState } from "react";
import { get, store } from "./Functions/localStorage";

const KEY = "accounts";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [accounts, setAccounts] = useState(null);

  const handleCreate = (_) => {
    const accountDetails = {
      name,
      lastName,
      balance: parseInt(balance),
    };
    store(KEY, accountDetails);
    setName("");
    setLastName("");
  };

  useEffect((_) => {
    setAccounts(get(KEY));
  }, []);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="card">
                <h1 className="card-header">Create new bank account</h1>
                <div className="card-body">
                  <div className="card-title">
                    <fieldset>
                      <legend>Person information</legend>
                      <div>
                        <legend>
                          Name:
                          <input
                            type="text"
                            value={name}
                            onChange={handleChangeName}
                          />
                        </legend>
                        <legend>
                          Last Name:
                          <input
                            type="text"
                            value={lastName}
                            onChange={handleChangeLastName}
                          />
                        </legend>
                      </div>
                      <button className="red small" onClick={handleCreate}>
                        Create New Account!
                      </button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mt-4">
              <h1 className="card-header">Bank Accounts</h1>
              <div className="card-body"></div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Account Balance</th>
                    <th>Enter Amount</th>
                    <th>Edit Balance</th>
                    <th>Account settings</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
