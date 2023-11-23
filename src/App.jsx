import { useEffect, useState } from 'react'
import './App.css'
import  Card  from './components/Card/Card'
import { Modal } from './components/Modal/Modal';
import { Button } from './components/Button/Button';
import { Modal2 } from './components/Modal/Modal2';
// import { Modal2 } from './components/Modal/Modal2';

const App = () => {

  const [jobs,setJobs] = useState([]);
  // const [modal2Data,setmodal2Data]=useState({})
  const [modalData,setModalData]=useState({})
const [api,setApi]=useState(false)

  const handleModal2Data=(data)=>{
   const modal2Value=data
    setModalData(prev=>({...prev,...modal2Value}))
    setApi(true)

  }
  const handleModalData=(data)=>{
  console.log(data,"data")
  setModalData(data)
  }
useEffect(()=>{
if(api){
  console.log(modalData,"modalData")
  fetch('https://6530d94e6c756603295f269f.mockapi.io/jobs', {
      method: "POST",
      body: JSON.stringify(modalData),
      headers: {
      "Content-type": "application/json; charset=UTF-8"
     }
     })
    .then(response => response.json())
    .then(json => console.log(json));


}
},[api])
useEffect(() =>{
   
  fetch('https://6530d94e6c756603295f269f.mockapi.io/jobs')
  
   .then((res)=>{
    res.json()
    .then((res)=>{
    console.log(res);
setJobs(res)
  })
})

},[])
  

  
const [showModal,setShowModal] = useState(false)
const [showModal2,setShowModal2] = useState(false)
const[Backmodal,setBackModal]=useState(false)
const[Backmodaltwo,setBackModal2]=useState(false)
const [userDetails, setUserDetails] = useState({})

console.log(userDetails,'hloooo')
const openModal = () => {
  setShowModal(true)

  // console.log(showModal,'ABI')
}
const openModal2 = (data) => {
  setShowModal2(data)
  setShowModal(false)
// console.log('ABI2')
}

const closeModal=(data)=>{
  setShowModal2(data)
}

const BackModal=(data)=>{
  setShowModal(data)
  setShowModal2(false)
}
const BackModal2=(data)=>{
  setShowModal(data)
  
}


const user = (data) => {
  setUserDetails(data)
  console.log(data)
  return data.companyName.length < 1 ||
        data.applyType.length<1 ||
        data.details.length<1 ||
        data.id.length<1 ||
        data.industry.length<1
}

const details= (data) => {
  setUserDetails(data)
  console.log(data)
  return data.minimumExperience.length < 1 ||
        data.maximumExperience.length<1 ||
        data.minimumSalary.length<1 ||
        data.maximumSalary.length<1 ||
        data.totalEmployee.length<1
}



  return (
    <>
    {/* <h1>ABINAYA here</h1> */}
    {/* <Button onClick={openModal} className="flex justify-center " button_nam="CLICK HERE"/> */}
      <Modal  ModalOpen={showModal} openModal2={openModal2} BackModal2={BackModal2} user={user} handleModalData={handleModalData}/>
       <Modal2 Modal2Open={showModal2} closeModal={closeModal} BackModal={BackModal} userDetails={userDetails} details={details} modal1Data={modalData} handleModal2Data={handleModal2Data}/>

      <div className="fixed flex justify-between align-between gap-[990px] bg-pink">
        <div>
           <h1 className={`${showModal?"opacity-5 fixed":" "} ${showModal2? "opacity-5 fixed":" "} text-[20px] text-red ml-[40px]`}>ABINAYA.T</h1> 
        </div>
        <div>
           <Button onClick={openModal} className= {`${showModal?"opacity-5 fixed":" "} ${showModal2? "opacity-5 fixed":" "} flex justify-center`} button_nam="CLICK HERE"/>
        </div>
      </div>

      <div className={`${showModal?"opacity-5 fixed":" "} ${showModal2? "opacity-5 fixed":" "} gap-[80px] p-[85px] justify-end  align-start grid  grid-cols-2 grid-rows-2`}>
       
    
            {jobs.map((job,index) =>{
               return  <Card key={index} data={job}/>
            })}
      </div>
    </>
  )
};

export default App;
