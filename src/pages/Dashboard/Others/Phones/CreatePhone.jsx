import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import { useAddBookMutation } from "../../../../redux/services/book/bookApi";
import CustomDrawer from "../../../../components/Shared/Drawer/CustomDrawer";
import CustomForm from "../../../../components/Shared/Form/CustomForm";
import CustomInput from "../../../../components/Shared/Form/CustomInput";
import { SubmitButton } from "../../../../components/Shared/Button/CustomButton";
import CustomSelect from "../../../../components/Shared/Form/CustomSelect";
import { createPhoneValidationSchema } from "../../../../utilities/validationSchemas/phoneValidation.schema";

const CreatePhone = ({ open, setOpen }) => {
  const [addBook, { isLoading }] = useAddBookMutation();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Creating Book...");
    const submittedData = {
      name: data.name,
      relation: data.relation,
      phone_number: data.phone_number,
      role: data.role,
      is_deleted: false,
      status: true,
    };

    const phoneData = new FormData();

    Object.entries(submittedData).forEach(([key, value]) => {
      phoneData.append(key, value);
    });

    try {
      const res = await addBook(phoneData);
      if (res.data.success) {
        toast.success(res.data.message, { id: toastId, duration: 2000 });
        setOpen(false);
      } else {
        toast.error(res.data.message, { id: toastId, duration: 2000 });
      }
    } catch (error) {
      console.error("Error creating book:", error);
      toast.error("An error occurred while creating the book.", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <CustomDrawer open={open} setOpen={setOpen} title="Create Phone">
      <CustomForm
        onSubmit={onSubmit}
        resolver={zodResolver(createPhoneValidationSchema)}
      >
        <div className="three-grid">
          <CustomInput
            label={"Name"}
            name={"name"}
            type={"text"}
            required={true}
            placeholder={"Enter Name"}
          />
          <CustomInput
            label={"Relation"}
            name={"relation"}
            type={"text"}
            required={true}
            placeholder={"Enter Relation"}
          />
          <CustomInput
            label={"Phone Number"}
            name={"phone_number"}
            type={"number"}
            required={true}
            placeholder={"Enter Phone Number"}
          />
        </div>
        <CustomSelect
          label={"Role"}
          name={"role"}
          placeholder={"Select a role"}
        />

        <div className="flex justify-end items-center gap-4 mt-20">
          <Button
            onClick={() => setOpen(false)}
            type="text"
            className="font-bold w-full bg-transparent text-pdf px-10 pt-2 pb-8 border border-pdf"
          >
            Cancel
          </Button>
          <SubmitButton loading={isLoading} text={"Save"} />
        </div>
      </CustomForm>
    </CustomDrawer>
  );
};

export default CreatePhone;
