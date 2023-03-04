import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({
    ctc: 0,
    expected: 0,
    percentage: 0,
  });

  
  useEffect(() => {
    console.log('data:', data)
    setData(currentData => {
      console.log('currentData:', currentData)
      let { ctc, expected, percentage } = currentData;

      percentage = (expected - ctc) / ctc * 100;

      console.log('percentage:', percentage)
      return {
        ctc,
        expected,
        percentage,
      }
    });
  }, [data.expected, setData]);


  return (
    <div className="App">

      <label for="ctc">CTC</label>
      <input type="number" id="ctc" name="fav_language" value={data.ctc} onChange={(event) => setData(currentData => ({
        ...currentData,
        ctc: event.target.value,
      }))} />

      <br />
      <label for="expected">expected</label>
      <input type="number" id="expected" name="fav_language" value={data.expected} onChange={(event) => setData(currentData => ({
        ...currentData,
        expected: event.target.value,
      }))} />

      <br />
      <label for="percentage">percentage</label>
      <input type="number" id="percentage" name="fav_language" value={data.percentage} onChange={(event) => setData(currentData => ({
        ...currentData,
        percentage: event.target.value,
      }))} />

    </div>
  );
}

export default App;
