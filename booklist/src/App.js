import { useState } from "react";
import List from "./Component/List/List";

function App() {
  const [title,settitle]=useState('')
  const [author,setauthor]=useState('')
  const [year,setyear]=useState('')
  const [todo,settodo]=useState([])
  function Handlefrom(e){
   e.preventDefault();
   const data={
    id:Math.floor(Math.random()*10000000),
    Title:title,
    Author:author,
    Year:year,
    completed:false,
   }
   const newtodo=([...todo,data])
   settodo(newtodo)
  }
  // delete item
  function handledelete(id){
   const newtodo=todo.filter(todo=>todo.id !== id)
   settodo(newtodo)
  }
  // Strike and update object value
  function handlestrikebtn(id){
   const newupdate=todo.map(todo=>{
    if(todo.id !== id) return todo
    return {
      ...todo,
      completed:true,
    }
   })
   settodo(newupdate)
   console.log(newupdate)
  }
  
  return (
    <div className="App">
     <div className='container mx-auto'>
       <h1 className='text-center text-6xl font-bold text-[green]'>React <span className='text-[red]'>Book</span>List  Apps</h1>
       <form onSubmit={Handlefrom}>
        <h1 className='text-[20px]'>Title</h1>
        <input onChange={(e)=>settitle(e.target.value)} className='border-2 w-full rounded-sm py-2 focus:outline-none' type="text" />
        <h1 className='text-[20px]'>Author</h1>
        <input onChange={(e)=>setauthor(e.target.value)} className='border-2 w-full rounded-sm py-2 focus:outline-none' type="text" />
        <h1 className='text-[20px]'>Year</h1>
        <input onChange={(e)=>setyear(e.target.value)}  className='border-2 w-full rounded-sm py-2 focus:outline-none' type="text" /><br/>
        <button className="bg-[#35cbe9] w-full my-3 py-2 text-white rounded-sm">Add</button>
       </form>
       {/* hello table from */}
    <table className='border-collapse border-2 border-slate-500 w-full rounded-md mt-5'>
       <tr>
        <td className='border-2 border-slate-600 py-2 px-1 text-xl font-bold'>Title</td>
        <td className='border-2 border-slate-600 py-2 px-1 text-xl font-bold'>Author</td>
        <td className='border-2 border-slate-600 py-2 px-1 text-xl font-bold'>Year</td>
        <td className='border-2 border-slate-600 py-2 px-1 text-xl font-bold w-[300px]'>Remove</td>
    </tr>
      {todo.map(tdo=><List key={tdo.id} {...tdo} handledeletenbtn={handledelete} handlestrikebtn={handlestrikebtn}></List>)}
      </table>
     </div>
    </div>
  );
}

export default App;
