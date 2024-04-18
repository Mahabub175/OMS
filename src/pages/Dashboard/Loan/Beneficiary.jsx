import { useState } from "react";
import { Button } from "antd";
import TableHeader from "../../../components/Shared/Table/TableHeader";
import CustomDrawer from "../../../components/Shared/Drawer/CustomDrawer";
import CustomForm from "../../../components/Shared/Form/CustomForm";
import { SubmitButton } from "../../../components/Shared/Button/CustomButton";
import LoanDrawerForm from "../../../components/AllSection/Loan/LoanDrawerForm";

const Beneficiary = () => {
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="px-5">
      <TableHeader setOpen={setOpen} title={"Loan Beneficiary"} />

      <CustomDrawer open={open} setOpen={setOpen} title="Create Beneficiary">
        <CustomForm onSubmit={onSubmit}>
          <LoanDrawerForm />
          <div className="flex justify-end items-center gap-4 absolute bottom-10 right-10">
            <Button
              onClick={() => setOpen(false)}
              type="text"
              className="font-bold w-full bg-transparent text-pdf px-10 pt-2 pb-8 border border-pdf"
            >
              Cancel
            </Button>
            <SubmitButton text={"Save"} />
          </div>
        </CustomForm>
      </CustomDrawer>
    </div>
  );
};

export default Beneficiary;
