import React from "react";
import Label from "../Label/Label";
import Input from "../Input/input";
import { Button } from "../Button/Button";
import Radio from "../Radiobtn/Radiobtn";
import { useState, useEffect } from "react";

function Modal2({ Modal2Open, closeModal, BackModal,BackModal2,modal1Data,handleModal2Data ,modal2Data}) {
  if (!Modal2Open) {
    return null;
  }

  const [values, setValues] = useState({
    minimumExperience: 0,
    maximumExperience: 0,
    minimumSalary: 0,
    maximumSalary: 0,
    totalEmployee: 0,
    quickApply:0,
    externalApply:0

  });

  const [errormessage, setErrmessage] = useState({
    errorminimumExperience: false,
    errormaximumExperience: false,
    errorminimumSalary: false,
    errormaximumSalary: false,
    errortotalEmployee: false
   //  errorexternalapply: false,
   //  errorexternalapply: false
  });

     //RadioBUTTON   
  // const [radioBtn, setRadioBtn] = useState(null);


  const [btnDisable2, setBtnDisable2] = useState(true);
  useEffect(() => {
    if (
      errormessage?.errorminimumExperience ||values?.minimumExperience===0 ||
      errormessage?.errormaximumExperience ||values?.maximumExperience===0 ||
      errormessage?.errorminimumSalary ||values?.minimumSalary===0 ||
      errormessage?.errormaximumSalary||values?.maximumSalary===0 ||
      errormessage?.errortotalEmployee||values?.totalEmployee===0
      // values?.quickApply !=="" &&
      // values?.externalApply !=="" 
    ) {
      setBtnDisable2(true);
    } else {
      setBtnDisable2(false);
    }
  }, [
    values?.minimumExperience,
    values?.maximumExperience,
    values?.minimumSalary,
    values?.maximumSalary,
    values?.totalEmployee
   //  values?.quickApply,
   //  values?.externalApply

  ]);

  const handleOnChange2 = (e) => {
    switch (e.target.name) {
      case "Minimum Experience":
        setValues((values) => ({
          ...values,
          minimumExperience: e.target.value,
        }));
        setErrmessage((prev) => ({
          ...prev,
          errorminimumExperience: e.target.value ? false : true,
        }));
        break;

      case "Maximum Experience":
        setValues((values) => ({
          ...values,
          maximumExperience: e.target.value,
        }));
        setErrmessage((prev) => ({
          ...prev,
          errormaximumExperience: e.target.value && e.target.value>values.minimumExperience ? false : true,
        }));
        break;

      case "Minimum Salary":
        setValues((values) => ({ ...values, minimumSalary: e.target.value }));
        setErrmessage((prev) => ({
          ...prev,
          errorminimumSalary: e.target.value? false : true,
        }));
        break;

      case "Maximum Salary":
        // console.log("check",e.target.value<values.minimumSalary)
        setValues((values) => ({ ...values, maximumSalary: e.target.value }));
        setErrmessage((prev) => ({
          ...prev,
          errormaximumSalary: e.target.value && e.target.value> values.minimumSalary ? false : true,
        }));
        break;

      
      case "Total Employee":
        setValues((values) => ({ ...values, totalEmployee: e.target.value }));
        setErrmessage((prev) => ({
          ...prev,
          errortotalEmployee: e.target.value ? false : true,
        }));
        break;
       
      //   case "myRadio":
      //    setValues((values) => ({ ...values,quickApply : e.target.value }));
      //    setErrmessage((prev) => ({
      //      ...prev,
      //      errorquickApply: e.target.value ? false : true,
      //    }));
         
         // case "myRadio":
         // setValues((values) => ({ ...values,externalApply : e.target.value }));
         // setErrmessage((prev) => ({
         //   ...prev,
         //   errorexternalApply: e.target.value ? false : true,
         // }));

      default:
        break;
    }
  };

  console.log('MINIMUM EXP>>', values, errormessage)
  const handleModal = () => {
    
    closeModal(false);
    handleModal2Data(values)
  //  console.log({...modal1Data,...modal2Data},"data1")


  };

  return (
    <div className="flex">
      <div className="w-[100%]  absolute z-10 top-0 left-[0%] flex justify-center align-center h-[100%]  " onClick={() => closeModal(false)}>
        <div className="popup w-[577px] h-[564px] bg-[#FFFFFF] m-[auto] py-[32px] px-[32px] rounded-[10px]"  onClick={(e)=>e.stopPropagation()} >
          <div className="flex flex-col gap-[24px]">
            <div className="flex justify-between ">
              <h3 className="text-[20px]"> Create a job</h3>
              <h3 className="text-[20px]"> step 2</h3>
            </div>
            <div className="flex gap-[24px] flex-col">
              <div className="flex flex-col ">
                <div>
                  <Label text="Experience" className="text-[14px]" />
                </div>
                <div className="flex gap-[24px]">
                  <div>
                    <Input
                      className="!w-[220.5px] "
                      placeholder="Minimum"
                      
                      type="number"
                      name="Minimum Experience"
                      onChange={(e) => handleOnChange2(e)}
                      error="Enter minimum experience"
                      errorStatus={errormessage.errorminimumExperience}
                    />
                  </div>
                  <div>
                    <Input
                      className="!w-[220.5px]"
                      placeholder="Miximum"
                      
                      type="number"
                      name="Maximum Experience"
                      onChange={(e) => handleOnChange2(e)}
                      error="Enter maximum experience"
                      errorStatus={errormessage.errormaximumExperience}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <Label text="Salary" className="text-[14px]" />
                </div>
                <div className="flex gap-[24px]">
                  <div>
                    <Input
                      className="!w-[220.5px] "
                      placeholder="Minimum"
                      type="number"
                      name="Minimum Salary"
                      onChange={(e) => handleOnChange2(e)}
                      error="Enter minimum salary"
                      errorStatus={errormessage.errorminimumSalary}
                    />
                  </div>
                  <div>
                    <Input
                      className="!w-[220.5px] "
                      placeholder="Miximum"
                      type="number"
                      name="Maximum Salary"
                      onChange={(e) => handleOnChange2(e)}
                      error="Enter maximum salary "
                      errorStatus={errormessage.errormaximumSalary}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[4px]">
              <div>
                <Label text="Total employee" className="text-[14px]" />
              </div>
              <div>
                <Input
                  className="!w-[489px] "
                  placeholder="ex.100"
                  
                  type="number"
                  name="Total Employee"
                  onChange={(e) => handleOnChange2(e)}
                  error="Enter total employee"
                  errorStatus={errormessage.errortotalEmployee}
                />
              </div>
            </div>
            <Label text="Apply type" className="text-[14px]" />
            <div className="flex gap-[16px]">
              <div className="flex gap-[4px]">
                <div>
                  <Radio value="Quick apply"
                   name="myRadio" 
                   id="100"  
                   onChange={(e) => handleOnChange2(e)} 
                   error="click any one " 
                   errorStatus={errormessage.errorquickApply}/>
                </div>
                <div>
                  <Label
                    text="Quick apply"
                    className="text-[14px] text-[#7A7A7A]"
                    data="100"
                  />
                </div>
              </div>
              <div className="flex gap-[4px]">
                <div>
                  <Radio value=" External apply" 
                  name="myRadio" 
                  id="200"  
                  onChange={(e) => handleOnChange2(e)}
                  error="click any one" 
                  errorStatus={errormessage.errorexternalapply}/>
                  
                  
                </div>
                <div>
                  <Label
                    text="External apply"
                    className="text-[14px] text-[#7A7A7A] "
                    data="200"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
               {console.log(btnDisable2,"hlooo")}
               <Button
                  button_nam="Back"
                  className="flex mt-[20px] justify-end b-[20px] "
                  onClick={() => BackModal(true)}
                />
                     </div>
              <div>
              <Button
                  button_nam="Save"
                  disabled={btnDisable2}
                  buttonDisable={btnDisable2}
                  className="flex mt-[20px] justify-end b-[20px]"
                  onClick={() => {
                    handleModal()

                    //     const validation= details({
                    //     ...userDetails,
                    //       minimumExperience:minimumexperience.value,
                    //       maximumExperience:maximumexperience.value,
                    //       maximumSalary:minimumsalary.value,
                    //       minimumSalary:maximumsalary.value,
                    //       totalEmployee:totalemployee.value,

                    //   })
                    //   fetch('https://6530d94e6c756603295f269f.mockapi.io/jobs', {
                    //   method: "POST",
                    //   body: JSON.stringify(...modal1Data,...modal2Data),
                    //   headers: {
                    //   "Content-type": "application/json; charset=UTF-8"
                    //  }
                    //  })
                    // .then(response => response.json())
                    // .then(json => console.log(json));                                                

                    //  console.log(details,'details')
                    //  console.log(userDetails, 'userdetails')

                    //  if(validation===false) {
                    //  closeModal(false)
                    //  }
                  }}
                />
    
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Modal2 };
