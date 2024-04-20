/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import CustomInput from "../../Shared/Form/CustomInput";
import FileUploader from "../../Shared/Form/FileUploader";
import { GoPlusCircle, GoXCircle } from "react-icons/go";

const LoanDrawerForm = () => {
  const [additionalNumbers, setAdditionalNumbers] = useState([]);

  useEffect(() => {
    setAdditionalNumbers([{ id: 1 }]);
  }, []);

  const handleAddNumber = () => {
    setAdditionalNumbers((prevNumbers) => [
      ...prevNumbers,
      {
        id: Date.now(),
      },
    ]);
  };

  const handleRemoveNumber = (id) => {
    setAdditionalNumbers((prevNumbers) =>
      prevNumbers.filter((number) => number.id !== id)
    );
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

      <div className="flex justify-center mt-4">
        <button
          className="flex items-center bg-light px-10 py-2 font-bold rounded"
          onClick={handleAddNumber}
        >
          Add Number
          <GoPlusCircle className="ml-2" />
        </button>
      </div>
    </>
  );
};

export default LoanDrawerForm;
