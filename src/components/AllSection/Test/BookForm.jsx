import CustomDrawer from "../../Shared/Drawer/CustomDrawer";
import CustomForm from "../../Shared/Form/CustomForm";
import { Button } from "antd";
import { SubmitButton } from "../../Shared/Button/CustomButton";
import CustomInput from "../../Shared/Form/CustomInput";
import FileUploader from "../../Shared/Form/FileUploader";

const BookForm = ({ open, setOpen, onSubmit, isLoading }) => {
  return (
    <CustomDrawer open={open} setOpen={setOpen} title="Create Book">
      <CustomForm onSubmit={onSubmit}>
        <CustomInput
          label={"Title"}
          name={"title"}
          type={"text"}
          placeholder={"Enter Book Title"}
        />
        <CustomInput
          label={"Publication Date"}
          name={"publication_date"}
          type={"date"}
          placeholder={"Enter Publication Date"}
        />
        <CustomInput
          label={"ISBN"}
          name={"isbn"}
          type={"text"}
          placeholder={"Enter ISBN"}
        />
        <FileUploader label={"Book Cover"} name={"image"} />
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

export default BookForm;
