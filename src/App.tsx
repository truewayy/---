import './App.css';

function App() {
  let 이름 :string | number= 'kim';
  type Member = [number, boolean];
  let john:Member = [123,true];
  
  return (
    <div className="App">
      {이름}
    </div>
  );
}

export default App;
