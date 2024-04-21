import { useAddBookMutation } from "../../../redux/services/book/bookApi";
import { toast } from "sonner";
import BookForm from "../../../components/AllSection/Test/BookForm";
import dayjs from "dayjs";
import { useFormContext } from "react-hook-form";

const CreateBook = ({ open, setOpen }) => {
  const [addBook, { isLoading }] = useAddBookMutation();
  const methods = useFormContext();

  const onSubmit = async (data) => {
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
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error creating book:", error);
      toast.error("An error occurred while creating the book.");
    }
  };
  return (
    <BookForm
      isLoading={isLoading}
      onSubmit={onSubmit}
      open={open}
      setOpen={setOpen}
    />
  );
};

export default CreateBook;
