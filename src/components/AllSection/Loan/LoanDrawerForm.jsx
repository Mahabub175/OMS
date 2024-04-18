import CustomInput from "../../Shared/Form/CustomInput";

const LoanDrawerForm = () => {
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
    </>
  );
};

export default LoanDrawerForm;
