import React from 'react'

function List({id,Title,Author,Year,completed,handledeletenbtn,handlestrikebtn}) {
    return (
     <>
      {completed ? <tr>
        <td className='border-2 border-slate-600 py-2 px-1 text-xl font-bold'><del>{Title}</del></td>
        <td className='border-2 border-slate-600 py-2 px-1 text-xl font-bold'><del>{Author}</del></td>
        <td className='border-2 border-slate-600 py-2 px-1 text-xl font-bold'><del>{Year}</del></td>
        <td className='border-2 border-slate-600 py-2 px-1 text-xl font-bold space-x-2'>
        <button onClick={()=>handledeletenbtn(id)} className='bg-[#239ae9] py-1 px-2 text-white rounded-md'>Delete</button>
        <button onClick={()=>handlestrikebtn(id)} className='bg-[#5415dd] py-1 px-2 text-white rounded-md'>Strike</button>
        </td>
    </tr>: <tr>
    <td className='border-2 border-slate-600 py-2 px-1 text-xl font-bold'>{Title}</td>
    <td className='border-2 border-slate-600 py-2 px-1 text-xl font-bold'>{Author}</td>
    <td className='border-2 border-slate-600 py-2 px-1 text-xl font-bold'>{Year}</td>
    <td className='border-2 border-slate-600 py-2 px-1 text-xl font-bold space-x-2'>
    <button onClick={()=>handledeletenbtn(id)} className='bg-[#239ae9] py-1 px-2 text-white rounded-md'>Delete</button>
    <button onClick={()=>handlestrikebtn(id)} className='bg-[#5415dd] py-1 px-2 text-white rounded-md'>Strike</button>
    </td>
    </tr>}
     </>

    )
}

export default List
