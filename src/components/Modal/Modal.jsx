import React from "react";
import Input from "../Input/input";
import Label from "../Label/Label";
import { Button } from "../Button/Button";
import { Modal2 } from "./Modal2";
import { useState, useEffect } from "react";

function Modal({ ModalOpen, openModal2, BackModal2,handleModalData,modal2Data }) {
  // console.log("open",openModal2,ModalOpen)

  if (!ModalOpen) {
    return null;
  }
  const [value, setValue] = useState({
    titleName: "",
    companyName: "",
    detaileName: "",
    idName: "",
    industryName: "",
  });

  const [err, setErr] = useState({
    errortitleName: false,
    errorcompanyName: false,
    errordetaileName: false,
    erroridName: false,
    errorindustryName: false,
  });
  const [btnDisable, setBtnDisable] = useState(true);
  useEffect(() => {
   
    if (
      err?.errortitleName||value?.titleName===""||
      err?.errorcompanyName ||value?.companyName===""||
      err?.errordetaileName ||value?.detaileName===""||
      err?.erroridName ||value?.idName===""||
      err?.errorindustryName||value?.industryName===""
    ) {
      console.log("true")
      setBtnDisable(true);
    } else {
      console.log("false")

      setBtnDisable(false);
    }
  }, [
    value?.titleName,
    value?.companyName,
    value?.detaileName,
    value?.idName,
    value?.industryName,
  ]);
  console.log("error", err,btnDisable);
  const handleOnChange = (e) => {
    const regex = /^[A-Za-z]+$/;
    console.log(regex.test(e.target.value),"patten")
    switch (e.target.name) {
      case "Job Title":

          // const regex = /^[A-Za-Z]+$/;
          // const result = regex.setErr(e.target.value)
          // console.log(test)

        setValue((value) => ({ ...value, titleName: e.target.value }));
        setErr((prev) => ({
          ...prev,
          errortitleName:regex.test(e.target.value)? false : true,
        }));
        break;

      case "Company Name":
        setValue((value) => ({ ...value, companyName: e.target.value }));
        setErr((prev) => ({
          ...prev,
          errorcompanyName: regex.test(e.target.value) ? false : true,
        }));
        break;

      case "Details":
        setValue((value) => ({ ...value, detaileName: e.target.value }));
        setErr((prev) => ({
          ...prev,
          errordetaileName:regex.test( e.target.value) ? false : true,
        }));
        break;

      case "Id":
        setValue((value) => ({ ...value, idName: e.target.value }));
        setErr((prev) => ({
          ...prev,
          erroridName:regex.test( e.target.value) ? false : true,
        }));
        break;

      case "Industry":
        setValue((value) => ({ ...value, industryName: e.target.value }));
        setErr((prev) => ({
          ...prev,
          errorindustryName:regex.test( e.target.value) ? false : true,
        }));
        break;

      default:
        break;
    }
  };
  console.log(handleModalData,"handleModalData")
  const handleModal = (e) => {
    openModal2(true);
    handleModalData(value)
};
  console.log(value, "value", value?.titleName.length);
  return (
    <div className="flex">
      <div className="w-[100%] absolute z-10 top-0 left-[0%] flex justify-center align-center h-[100%]  " onClick={() => BackModal2(false)}>
        <div className="popup w-[577px] h-[564px] bg-[#FFFFFF] fixed m-[auto] px-[32px] py-[32px] rounded-[10px] mt-[20px]" onClick={(e)=>e.stopPropagation()} >
          <div  className="flex gap-[24px] flex-col">
          
            <div className="flex justify-between">
              <h3 className="text-[20px]"> Create a job</h3>
              <h3 className="text-[16px]"> step1</h3>
            </div>
            <div className="flex gap-[24px] flex-col">
              <div className="flex gap-[4px] flex-col">
                <Label text="Job Title" className="text-[14px]" />
                <Input
                  className="!w-[489px] "
                  placeholder="ex.UI UX Designer"
                  name="Job Title"
                  onChange={(e) => handleOnChange(e)}
                  type="text"
                  error="enter some text"
                  errorStatus={err.errortitleName}
                />
              </div>

              <div className="flex gap-[4px] flex-col">
                <Label text="Company name" className="text-[14px]" />
                <Input
                  className="!w-[489px] "
                  placeholder="ex.google"
                  
                  type="text"
                  name="Company Name"
                  onChange={(e) => handleOnChange(e)}
                  
                  error="enter the companyname"
                  errorStatus={err.errorcompanyName}
                />
              </div>
              <div className="flex gap-[4px] flex-col">
                <Label text="Industry" className="text-[14px]" />
                <Input
                  className="!w-[489px]"
                  placeholder="ex.Information Technology"
                  
                  type="text"
                  name="Details"
                  onChange={(e) => handleOnChange(e)}
                  error="error some text"
                  errorStatus={err.errordetaileName}
                />
              </div>
            </div>
            <div className="flex gap-[24px]">
              <div>
                <Label text="Location" className="text-[14px]" />
                <Input
                  className="!w-[220.5px] "
                  placeholder="ex.Chennai"
                  
                  type="text"
                  name="Id"
                  onChange={(e) => handleOnChange(e)}
                  
                  error="enter some text"
                  errorStatus={err.erroridName}
                />
              </div>
              <div>
                <Label text="Remote type" className="text-[14px]" />
                <Input
                  className="!w-[220.5px]"
                  placeholder="ex.In-office"
                  
                  type="text"
                  name="Industry"
                  onChange={(e) => handleOnChange(e)}
                  error="enter some text"
                  errorStatus={err.errorindustryName}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
              <Button
                  button_nam="back"
                  onClick={() => BackModal2(false)}
                  
                  className="flex mt-[20px] justify-end b-[20px]"
                />
                
              </div>
              <div>
                
              <Button
                  button_nam="Next"
                  disabled={btnDisable}
                  buttonDisable={btnDisable}
                  onClick={() => {handleModal()}}
                  className="flex mt-[20px] justify-end b-[20px]"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Modal };
