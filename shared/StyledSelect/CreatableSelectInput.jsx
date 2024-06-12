import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import _ from "lodash";

const CreatableSelectInput = ({
  form,
  name,
  options,
  placeholder,
  isMulti = false,
  isClearable = false,
  defaultValue,
  type,
}) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (defaultValue) {
      setValue(
        isMulti
          ? defaultValue.map((val) =>
              typeof val === "object"
                ? val
                : options.find((option) => option.value === val) || {
                    label: val,
                    value: val,
                  }
            )
          : typeof defaultValue === "object"
          ? defaultValue
          : options.find((option) => option.value === defaultValue) || {
              label: defaultValue,
              value: defaultValue,
            }
      );
    }
  }, [defaultValue, options, isMulti]);

  const handleChange = (newValue) => {
    setValue(newValue);
    if (isMulti) {
      form.setValue(name, newValue ? newValue.map((val) => val.value) : []);
    } else {
      form.setValue(name, newValue ? newValue.value : "");
    }
  };

  return (
    <CreatableSelect
      isMulti={isMulti}
      isClearable={isClearable}
      options={options}
      placeholder={placeholder}
      onChange={handleChange}
      type={_.lowerCase(type)}
      value={value}
      className="w-full text-gray-700 bg-yellow-400"
    />
  );
};

export default CreatableSelectInput;
