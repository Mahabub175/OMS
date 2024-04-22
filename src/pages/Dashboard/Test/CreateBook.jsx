import { toast } from "sonner";
import { useState } from "react";
import dayjs from "dayjs";
import CustomDrawer from "../../../components/Shared/Drawer/CustomDrawer";
import CustomForm from "../../../components/Shared/Form/CustomForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookValidationSchema } from "../../../utilities/validationSchemas/bookValidation.schema";
import CustomInput from "../../../components/Shared/Form/CustomInput";
import CustomDatePicker from "../../../components/Shared/Form/CustomDatePicker";
import FileUploader from "../../../components/Shared/Form/FileUploader";
import { Button } from "antd";
import { SubmitButton } from "../../../components/Shared/Button/CustomButton";
import { useAddBookMutation } from "../../../redux/services/book/bookApi";

const CreateBook = ({ open, setOpen }) => {
  const [addBook, { isLoading }] = useAddBookMutation();
  const [filePreview, setFilePreview] = useState(null);

  const onSubmit = async (data, methods) => {
    const submittedData = {
      title: data.title,
      publication_date: dayjs(data?.publication_date).format("YYYY-MM-DD"),
      isbn: data.isbn,
      image: data.image,
      is_deleted: false,
      status: true,
    };

    const bookData = new FormData();

    Object.entries(submittedData).forEach(([key, value]) => {
      bookData.append(key, value);
    });

    try {
      const res = await addBook(bookData);
      if (res.data.success) {
        toast.success(res.data.message);
        setOpen(false);
        methods.reset();
        setFilePreview(null);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error creating book:", error);
      toast.error("An error occurred while creating the book.");
    }
  };
  return (
    <CustomDrawer open={open} setOpen={setOpen} title="Create Book">
      <CustomForm
        onSubmit={onSubmit}
        resolver={zodResolver(bookValidationSchema)}
      >
        <CustomInput
          label={"Title"}
          name={"title"}
          type={"text"}
          required={true}
          placeholder={"Enter Book Title"}
        />
        <CustomDatePicker
          label={"Publication Date"}
          name={"publication_date"}
          type={"date"}
          required={true}
          placeholder={"Enter Publication Date"}
        />
        <CustomInput
          label={"ISBN"}
          name={"isbn"}
          type={"text"}
          required={true}
          placeholder={"Enter ISBN"}
        />

        <FileUploader
          label={"Book Cover"}
          name={"image"}
          filePreview={filePreview}
          setFilePreview={setFilePreview}
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

export default CreateBook;
