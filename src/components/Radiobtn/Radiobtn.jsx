import React from 'react';

function Radio({name,id}){
return(

    <>
   
         <input type="radio" id={id}  name={name} value="value" className='w-[20px] h-[20px] border-[#E6E6E6] border-2'/>
   
</>

)

}
export default Radio