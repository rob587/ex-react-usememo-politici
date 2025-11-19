import { useState, useEffect } from "react";
function App() {
  const url = "http://localhost:3333/politicians";

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const newArray =
    data.filter((arr) =>
      arr.name.toLowerCase().includes(inputValue.toLowerCase())
    ) || arr.biography.toLowerCase().includes(inputValue.toLowerCase());

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Ricerca Politici
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="inserisci politico"
              />
            </div>
          </div>

          {newArray.map((d, i) => {
            return (
              <>
                <div className="col-8">
                  <div className="card g-4" key={i}>
                    <img src={d.image} alt={d.name} style={{ width: "10%" }} />
                    <div className="container">
                      <h4>{d.name}</h4>
                      <p>{d.position}</p>
                      <p>{d.biography}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
