import React from 'react';
import netimg from "../../assets/images/net-img2.png"
import { Button } from '../Button/Button';



function Card({data}){

  const {applyType,companyName,id,industry,location, maximumExperience, maximumSalary,minimumExperience,minimumSalary,remoteType,totalEmployee} = data

  

    return(
    <>

        <div className='flex flex-col gap-[24px] w-[500px] h-[320px] justify-center bg-[#FFFF] py-[16px] px-[24px] rounded-[10px] '>
            <div className='flex gap-[8px]'>
               <div>
                 <img src={netimg}></img>
              
               </div>
              <div>
                 <h1 className='text-[24px] font-Poppins font-normal'>{applyType}</h1>  
                 <p className='text-[16px] font-poppins font-normal'>{companyName}</p>
                 <p className='text-[16px] text-[#7A7A7A] font-poppins font-normal'>{industry}{location}</p>
              </div>
            </div>  

            <div className='flex flex-col gap-[8px] ml-[57px]'>
                <p className='text-[16px] font-Poppins font-normal'>{remoteType}</p>
                <p className='text-[16px] font-Poppins font-normal'>Experience({minimumExperience}-{ maximumExperience})</p>
                <p className='text-[16px] font-Poppins font-normal'>INR($){minimumSalary}-{maximumSalary}/month</p>
                <p className='text-[16px] font-Poppins font-normal'>{totalEmployee} employee</p>
            </div>
             
             <div className='ml-[57px]'>
              <Button button_nam="Apply now"/>
            </div>
        </div>
         
           
      
       </>
    )
}
export default Card;