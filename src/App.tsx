import React from 'react';
import './App.css';

function App() {
//so, what's happened here? we write function name findNumber, that takes an array of numbers as an argument
const findNumber = (arr: number[]) =>  {
    //my idea - iterate through array in loop and check difference between two adjacent numbers
    for (let i = 0; i < arr.length - 1; i++) {
        //if difference is greater than 1
        if (arr[i + 1] - arr[i] > 1) {
            //we return value of the missing number
            return arr[i] + 1;
        }
    }
    return -1; //if missing number isn't found as result of loop, -1 is returned.
};

let arrayNumber = [3, 4, 5, 6, 7, 8, 10, 11, 12]; //we have some array

let missingNumber = findNumber(arrayNumber); //we'll write a value of missing number into this var

  return (
    <div className="App">
      <div className='container'>
          {missingNumber}
      </div>
    </div>
  );
}

export default App;

//I've never come across tests, honestly. and in this task, I tried to avoid mistakes as much as possible based on the condition. however, if my code wins your heart, I will master the tests very quickly!