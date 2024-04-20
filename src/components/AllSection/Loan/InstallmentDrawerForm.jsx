import CustomInput from "../../Shared/Form/CustomInput";
import CustomSelect from "../../Shared/Form/CustomSelect";
import FileUploader from "../../Shared/Form/FileUploader";

const InstallmentDrawerForm = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <CustomInput
          label={"Amount"}
          name={"amount"}
          placeholder={"Enter Complete Amount"}
          type={"number"}
          required={true}
        />
        <CustomInput
          label={"Installment Amount"}
          name={"installment_amount"}
          placeholder={"Enter Installment Amount"}
          type={"number"}
          required={true}
        />
        <CustomSelect
          label={"Giver Name"}
          placeholder={"Select Giver Name"}
          name={"giver_name"}
          mode={"single"}
          required={true}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CustomSelect
          label={"Taker Name"}
          placeholder={"Select Taker Name"}
          name={"taker_name"}
          mode={"single"}
          required={true}
        />
        <CustomSelect
          label={"Loan Name"}
          placeholder={"Select Loan Name"}
          name={"loan_name"}
          mode={"single"}
          required={true}
        />
      </div>
      <FileUploader label={"Document"} name={"document"} />
    </div>
  );
};

export default InstallmentDrawerForm;
