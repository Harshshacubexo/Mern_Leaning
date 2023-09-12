import { useState } from 'react';
import './App.css';

let arr = [
  ["Harsh",24,7,"indore", false ],["aman",26,3,"agra", false],["ram",23,6,"bhopal",false]
  ,["yash",28,5,"kerla",false],["shivam",32,8,"chennai",false],["rahul",37,1,"pune",false]]
  let a =   arr.map((value)=>{
    return value;
  })
  function App() {
  
  let [tableArr , updateTableArr] = useState([]);

  let sortAndUpdate=()=>{
    // // sort by serail no
    // updateTableArr(newArray);
  }

  // for chekbox and checking seleted items 
  let makeTrueOrFalse =(index)=>{
    if(a[index][4]){
      a[index][4] = false;
      return
    }
    console.log(index);
    a[index][4] = true;
  }

  // for deleting the items from array
  let deleteValues=()=>{
    let newArray = a.filter((value,index)=>{
       if(!a[index][4]) return value
    })
    a = newArray;
    updateTableArr(newArray)
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>age</th>
            <th>Serial No</th>
            <th>address</th>
            <th>check</th>
          </tr>
          {a.map( (value,index)=>{
          return (
            <tr key={value}>
              <td>{value[0]}</td>
              <td>{value[1]}</td>
              <td>{value[2]}</td>
              <td>{value[3]}</td>
              <td><input type='checkbox' onClick={()=>{
                makeTrueOrFalse(index)
              }}></input></td>
            </tr>
          )})}
          <tr>
            <td><button className='left' onClick={sortAndUpdate}>Sort</button></td>
            <td><button className='left' onClick={deleteValues}>delete</button></td>
          </tr>
          </thead>
      </table>
    </div>
  );
}
export default App;
