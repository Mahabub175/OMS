import { useState } from "react";
import { Button } from "antd";
import TableHeader from "../../../../components/Shared/Table/TableHeader";
import CustomForm from "../../../../components/Shared/Form/CustomForm";
import CustomInput from "../../../../components/Shared/Form/CustomInput";
import CustomDrawer from "../../../../components/Shared/Drawer/CustomDrawer";
import { SubmitButton } from "../../../../components/Shared/Button/CustomButton";

const Department = () => {
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="px-5">
      <TableHeader setOpen={setOpen} title={"Department"} />

      <CustomDrawer open={open} setOpen={setOpen} title="Create Department">
        <CustomForm onSubmit={onSubmit}>
          <CustomInput
            label={"Department Name"}
            name={"departmentName"}
            placeholder={"Enter Department Name"}
            type={"text"}
            required={true}
          />
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

export default Department;
