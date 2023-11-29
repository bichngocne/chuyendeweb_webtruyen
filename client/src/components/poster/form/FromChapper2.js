import React, { useEffect } from "react";
import ButtonSave from "../ButtonSave";
import * as Yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = Yup.object().shape({ 
    title:Yup.string().required('The title field is required')
    .max(10,'The title is max')
})
const FromChapper2 = (props) => {
    const formik = useFormik({
        initialValues:{
          nameValue :  props.chapper?.title || '',
            descriptionValue: props.chapper?.content || "",
            imgValue: {},
            errors: {},
        },
        validationSchema,
        onSubmit:(values)=>{
            console.log('values',values);

        },
        enableReinitialize: true,
        validateOnChange:true
    })
  console.log('valuess',formik.values);
  console.log('errors',formik.errors);
  
//   useEffect(()=>{
//     if(props.chapper){
//         console.log(props.chapper?.title);
//         formik.setValues({...props.chapper})
//     }
//   },[])
  return (

    <div className="w-full">
      <form onSubmit={formik.handleSubmit} className="grid gap-5">
        <div className="block">
          <div className="flex gap-[40px] items-center">
            <label
              className="block w-[120px] mb-2 text-sm font-medium text-gray-900 gap-[40px]"
              htmlFor="namestory"
            >
              Tiêu đề chương
            </label>
            <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 ${
                  "
                  name="title"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  id="title"
                  placeholder="Nhập tiêu đề chương ..."
                  required
                />
                {formik.errors.name && (
                  <div
                    className="validation text-red-600"
                    style={{ display: "block" }}
                  >
                    {formik.errors.title}
                  </div>
                )}
          </div>
        </div>
      
        <div className="w-full flex justify-end">
          <ButtonSave text="Lưu" onClick={formik.handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default FromChapper2;
