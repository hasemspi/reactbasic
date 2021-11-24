import Card from "./Componets/Card";
import Data from './data.json';
import MyState from "./Componets/MyState";
import Hello from "./Componets/Hello";
import Conditional from './Conditional/Index';
function App() {
  console.log(Data[0].title);
//  let item = [];
 
//   for( let x=0; x<Data.length; x++){
//     item.push(<Card callText={Data[x].title} descpText={Data[x].descrip}/>);
//   }

// let items = [];
// items = Data.map((items) => <Card callText={items.title} descpText ={items.descrip} />);
  return (
 <>
{/* {item} */}
{/* {Data.map((items,i) => <Card key={i} callText={items.title} descpText ={items.descrip} />)} */}

{/* <MyState></MyState> */}

{/* <Hello/> */}
<Conditional/>
 </>
  )
}

export default App;
