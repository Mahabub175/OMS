import CustomForm from "../../Shared/Form/CustomForm";
import { Button } from "antd";
import { SubmitButton } from "../../Shared/Button/CustomButton";
import CustomInput from "../../Shared/Form/CustomInput";
import FileUploader from "../../Shared/Form/FileUploader";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookValidationSchema } from "../../../utilities/validationSchemas/bookValidation.schema";
import CustomDatePicker from "../../Shared/Form/CustomDatePicker";

const BookForm = ({ setOpen, onSubmit, isLoading, defaultValue }) => {
  return (
    <CustomForm
      onSubmit={onSubmit}
      resolver={zodResolver(bookValidationSchema)}
    >
      <CustomInput
        label={"Title"}
        name={"title"}
        type={"text"}
        defaultValue={defaultValue?.title}
        required={true}
        placeholder={"Enter Book Title"}
      />
      <CustomDatePicker
        label={"Publication Date"}
        name={"publication_date"}
        type={"date"}
        // defaultValue={dayjs(defaultValue?.publication_date, "YYYY-MM-DD")}
        defaultValue={""}
        required={true}
        placeholder={"Enter Publication Date"}
      />
      <CustomInput
        label={"ISBN"}
        name={"isbn"}
        defaultValue={defaultValue?.isbn}
        type={"text"}
        required={true}
        placeholder={"Enter ISBN"}
      />

      <FileUploader
        label={"Book Cover"}
        name={"image"}
        defaultValue={defaultValue?.image}
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
  );
};

export default BookForm;
