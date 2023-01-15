import React from 'react';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {

  return (

      <div>
         <Title/>
         <List/>
      </div>
  );
}

function Title() {
  return(
    <div>
      <h1> Ma liste de courses </h1>
    </div>
  );
}

function List(){
  const box = <input type="checkbox"/>;
  const articles=[
    {id:0,name:'poireaux'},
    {id:1,name:'céléri'},
    {id:2,name:'persil'},
    {id:3,name:'brocoli'},
    {id:4,name:'laitue'},
    {id:5,name:'cresson'},
    {id:6,name:'ciboulette'},
    {id:7,name:'basilic'},
    {id:8,name:'estragon'},
    {id:9,name:'aneth'}
  ];
  return (
  <div>
  <ul>
    {articles.map(function displayItem(item){
      return(<li key={item.id}>
        <span>{item.name}</span>
        <span> {box}</span>
      </li>
      );
      })}
  </ul>
  </div>
  );
}


root.render(<App/>);
export default App;
