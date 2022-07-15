import './App.css';

function App() {
  let 이름 :string | number= 'kim';
  let 나이 :number = 20;
  let 결혼했니 :boolean = false;
  let 회원들 :string[] = ['kim','park'];
  let 내정보 : {age : number} = {age : 20}
  type Member = {
    [key :string] : string, 
  }
  let john:Member = {name: 'kim', age:'123'}
  let project :{
    member : string[],
    days : number,
    started : boolean,
  } = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }
  
  return (
    <div className="App">
      {john.name}
      {이름}
    </div>
  );
}

export default App;
