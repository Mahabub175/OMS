import dayjs from "dayjs";
import CustomDrawer from "../../../components/Shared/Drawer/CustomDrawer";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../../../redux/services/book/bookApi";
import { toast } from "sonner";
import CustomForm from "../../../components/Shared/Form/CustomForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateBookValidationSchema } from "../../../utilities/validationSchemas/bookValidation.schema";
import CustomInput from "../../../components/Shared/Form/CustomInput";
import CustomDatePicker from "../../../components/Shared/Form/CustomDatePicker";
import FileUploader from "../../../components/Shared/Form/FileUploader";
import { Button } from "antd";
import { SubmitButton } from "../../../components/Shared/Button/CustomButton";
import { useState } from "react";
import CustomSelect from "../../../components/Shared/Form/CustomSelect";

const EditBook = ({ open, setOpen, itemId }) => {
  const { data: bookData } = useGetSingleBookQuery(itemId, { skip: !itemId });
  const [filePreview, setFilePreview] = useState(null);

  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const onSubmit = async (data) => {
    try {
      const image =
        data.image instanceof File
          ? data.image
          : data.image
          ? data.image
          : bookData?.data?.image;

      const submittedData = {
        title: data?.title || bookData?.data?.title,
        publication_date: data?.publication_date
          ? dayjs(data?.publication_date).format("YYYY-MM-DD")
          : bookData?.data?.publication_date,
        isbn: data?.isbn || bookData?.data?.isbn,
        ...(data?.image !== undefined && { image }),
        status:
          data?.status === "Inactive"
            ? false
            : data?.status === "Active"
            ? true
            : data?.status !== undefined || null
            ? data?.status
            : bookData?.data?.status,
      };

      const updatedBookData = new FormData();
      Object.entries(submittedData).forEach(([key, value]) => {
        updatedBookData.append(key, value);
      });

      const updatedData = {
        id: itemId,
        data: updatedBookData,
      };

      const res = await updateBook(updatedData);

      if (res.data.success) {
        toast.success(res.data.message);
        setOpen(false);
        window.location.reload();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error updating book:", error);
      toast.error("An error occurred while updating the book.");
    }
  };

  const defaultValue = bookData?.data;

  if (!defaultValue) {
    return null;
  }

  return (
    <CustomDrawer
      open={open}
      setOpen={setOpen}
      title="Edit Book"
      placement={"left"}
    >
      <CustomForm
        onSubmit={onSubmit}
        resolver={zodResolver(updateBookValidationSchema)}
      >
        <CustomInput
          label={"Title"}
          name={"title"}
          type={"text"}
          defaultValue={defaultValue?.title}
          required={false}
          placeholder={"Enter Book Title"}
        />
        <CustomDatePicker
          label={"Publication Date"}
          name={"publication_date"}
          type={"date"}
          defaultValue={dayjs(defaultValue?.publication_date, "YYYY-MM-DD")}
          required={false}
          placeholder={"Enter Publication Date"}
        />
        <CustomInput
          label={"ISBN"}
          name={"isbn"}
          defaultValue={defaultValue?.isbn}
          type={"text"}
          required={false}
          placeholder={"Enter ISBN"}
        />

        <CustomSelect
          label={"Status"}
          name={"status"}
          placeholder={"Select a status"}
          defaultValue={defaultValue?.status}
          required={false}
          type={"status"}
          options={[
            { value: true, label: "Active" },
            { value: false, label: "Inactive" },
          ]}
        />

        <FileUploader
          label={"Book Cover"}
          name={"image"}
          defaultValue={defaultValue?.image}
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

export default EditBook;
