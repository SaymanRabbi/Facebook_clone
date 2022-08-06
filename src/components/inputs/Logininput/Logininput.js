import React from 'react';
import './Logininput.css';
import { useField } from "formik";
const Logininput = ({ placeholder, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="input_wrap">
        <input
          type={field.type}
          name={field.name}
          placeholder={placeholder}
          {...field}
          {...props}
        />
      </div>
    );
};

export default Logininput;