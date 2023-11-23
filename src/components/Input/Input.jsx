import React from 'react';

function Input({className,placeholder,id,name,type,error,errorStatus,onChange}){
return(

    <>
         <input type={type} value={id} placeholder={placeholder} onChange={onChange} className={`text-[14px] border-[#E6E6E6] border-2 w-full px-[12px] py-[8px] rounded ${className}`} id={id} name={name} />
          <p className='text-[10px] text-[red]'>{ errorStatus?error:""}</p>
</>

)

}
export default Input