import { useState, useEffect } from "react";

function App() {
  const url = "http://localhost:3333/politicians";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((d, i) => {
            return (
              <>
                <div className="card g-4" key={i}>
                  <img src={d.image} alt={d.name} style={{ width: "10%" }} />
                  <div className="container">
                    <h4>{d.name}</h4>
                    <p>{d.position}</p>
                    <p>{d.biography}</p>
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
