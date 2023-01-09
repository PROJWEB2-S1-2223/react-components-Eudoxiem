import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function App(){
  const box = <input type="checkbox"/>;
  const article= [ { id:0,name:"poireaux",},
                   {id:1,name:"oignons",},
                   {id:2,name:"céléri",}
                 ]

  return (

      <div>
        <h1>Ma liste de courses</h1>
        <ul>
        const list=article.map((article)=> <li article key ={article.id}> {article.name}{box}) </li>
        </ul>
       /*{<input type="checkbox"/>}*/
      </div>
  );
}

export default App;
