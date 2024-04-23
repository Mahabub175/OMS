import CustomDatePicker from "../../Shared/Form/CustomDatePicker";
import CustomInput from "../../Shared/Form/CustomInput";
import CustomSelect from "../../Shared/Form/CustomSelect";
import FileUploader from "../../Shared/Form/FileUploader";

const LoanDrawerForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <CustomSelect
          label={"Giver Name"}
          placeholder={"Select Giver Name"}
          name={"giver_name"}
          required={true}
        />
        <CustomInput
          label={"Amount"}
          name={"amount"}
          placeholder={"Enter Complete Amount"}
          type={"number"}
          required={true}
        />
        <CustomInput
          label={"Interest"}
          name={"interest"}
          placeholder={"Enter Interest Amount"}
          type={"number"}
          required={true}
        />

        <CustomDatePicker
          label={"Return Date"}
          type={"date"}
          placeholder={"Select Return Date"}
          name={"return_date"}
          required={true}
        />
        <CustomDatePicker
          label={"Return Date Installment"}
          type={"date"}
          placeholder={"Select Return Date Installment"}
          name={"return_date_installment"}
          required={true}
        />
        <CustomDatePicker
          label={"Date"}
          type={"date"}
          placeholder={"Select Date"}
          name={"date"}
          required={true}
        />
      </div>
      <FileUploader label={"Document"} name={"document"} />
    </>
  );
};

export default LoanDrawerForm;
