/* eslint-disable no-unused-vars */
import { useState } from "react";
import CustomInput from "../../Shared/Form/CustomInput";
import FileUploader from "../../Shared/Form/FileUploader";
import { GoPlusCircle, GoX } from "react-icons/go";

const BeneficiaryDrawerForm = () => {
  const [additionalNumbers, setAdditionalNumbers] = useState([]);

  const addNumberField = () => {
    setAdditionalNumbers([
      ...additionalNumbers,
      { number: "", name: "", relation: "" },
    ]);
  };

  const handleNumberChange = (index, field, value) => {
    const updatedNumbers = [...additionalNumbers];
    updatedNumbers[index][field] = value;
    setAdditionalNumbers(updatedNumbers);
  };

  const removeNumberField = (index) => {
    const updatedNumbers = [...additionalNumbers];
    updatedNumbers.splice(index, 1);
    setAdditionalNumbers(updatedNumbers);
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <CustomInput
          label={"Name"}
          name={"name"}
          placeholder={"Enter Beneficiary Name"}
          type={"text"}
          required={true}
        />
        <CustomInput
          label={"Email"}
          name={"email"}
          placeholder={"Enter Beneficiary Email"}
          type={"email"}
          required={true}
        />
        <CustomInput
          label={"NID Number"}
          name={"nid"}
          placeholder={"Enter Beneficiary NID"}
          type={"number"}
          required={true}
        />
      </div>
      <CustomInput
        label={"Present Address"}
        name={"present_address"}
        placeholder={"Enter Present Address"}
        type={"text"}
        required={true}
      />
      <CustomInput
        label={"Permanent Address"}
        name={"permanent_address"}
        placeholder={"Enter Permanent Address"}
        type={"text"}
        required={true}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <FileUploader
          name={"profile_picture"}
          type={"file"}
          required={false}
          label={"Profile Picture"}
        />
        <FileUploader
          name={"nid_front"}
          type={"file"}
          required={false}
          label={"NID Front"}
        />
        <FileUploader
          name={"nid_back"}
          type={"file"}
          required={false}
          label={"NID Back"}
        />
      </div>
      <h3 className="text-2xl font-bold mb-4">Add Phone Number</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        <CustomInput
          label={"Phone Number"}
          name={"extra_number"}
          placeholder={"Enter Phone Number"}
          type={"number"}
          required={false}
        />
        <CustomInput
          label={"Name"}
          name={"extra_name"}
          placeholder={"Enter Name"}
          type={"name"}
          required={false}
        />
        <CustomInput
          label={"Relation"}
          name={"relation"}
          placeholder={"Enter Relation"}
          type={"text"}
          required={false}
        />
      </div>
      {additionalNumbers.map((number, index) => (
        <div key={index} className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
            <CustomInput
              label={"Phone Number"}
              name={`extra_number_${index}`}
              placeholder={"Enter Phone Number"}
              type={"number"}
              value={number.number}
              onChange={(e) =>
                handleNumberChange(index, "number", e.target.value)
              }
              required={false}
            />
            <CustomInput
              label={"Name"}
              name={`extra_name_${index}`}
              placeholder={"Enter Name"}
              type={"name"}
              value={number.name}
              onChange={(e) =>
                handleNumberChange(index, "name", e.target.value)
              }
              required={false}
            />
            <CustomInput
              label={"Relation"}
              name={`relation_${index}`}
              placeholder={"Enter Relation"}
              type={"text"}
              value={number.relation}
              onChange={(e) =>
                handleNumberChange(index, "relation", e.target.value)
              }
              required={false}
            />
          </div>
          <div className=" flex justify-center items-center">
            <button
              onClick={() => removeNumberField(index)}
              className="text-red-500 bg-light p-2 rounded"
            >
              <GoX className="text-xl font-bold" />
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-10">
        <button
          className="flex items-center bg-light px-10 py-2 font-bold rounded"
          onClick={addNumberField}
        >
          Add Number
          <GoPlusCircle className="ml-2" />
        </button>
      </div>
    </>
  );
};

export default BeneficiaryDrawerForm;
