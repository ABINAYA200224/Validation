import React from 'react';

function Button({button_nam, onClick ,className,disabled=false,id,buttonDisable=false} ){
    console.log("disable",disabled,buttonDisable,button_nam)
    
    



    return(
        <>
        
        <button onClick={onClick} id={id} disabled={disabled} className={`${buttonDisable?"border-2 cursor-no-drop bg-[#1597E4] opacity-20":"bg-[#1597E4]"} pt-[8px] pb-[8px] pl-[16px] pr-[16px] rounded-[6px] text-white ${className}`}>{button_nam}</button>
       
        </>

    )
}
export {Button}