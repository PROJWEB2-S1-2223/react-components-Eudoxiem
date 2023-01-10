import React from 'react';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
function App(){
  const box = <input type="checkbox"/>;
  const articles = [{id:0,name:"poireaux"
                  },
                   {id:1,name:"oignons"
                  },
                   {id:2,name:"céléri"
                  }];
  return (
      <div>
        <h1> Ma liste de courses. </h1>
        <ul>
            const List = articles.map ((item) => <li key={item.id}> {item.name} {box} </li>)
        </ul>
      </div>
  );
}
root.render(<App/>);
export default App;
