import React, { useEffect, useState } from 'react';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

const axios = require('axios').default;
function App() {
  const [loading, setLoading] = useState(true);
  const [dataLst, setDataLst] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get('api/a/threads.json');//empieza  con enpoint (api) que esta definido en setupProxy.js
        setDataLst(data.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);
  return (

    <div className="App">
       {!loading && <Alert >
          Ejemplo de proxy en  react, solucion del problema de cors
        </Alert>
        }
      <header className="data">

       
        {loading && <div>Loading</div>}

        {!loading && (

          <div>


            <ListGroup as="ul">
              {dataLst.map((item, id) => (
                <ListGroup.Item as="li" key={id}>{item.page}  </ListGroup.Item>
              ))}

            </ListGroup>
          </div>
        )}

      </header>
    </div>
  );
}

export default App;
