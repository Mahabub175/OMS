import dayjs from "dayjs";
import BookForm from "../../../components/AllSection/Test/BookForm";
import CustomDrawer from "../../../components/Shared/Drawer/CustomDrawer";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../../../redux/services/book/bookApi";
import { toast } from "sonner";

const EditBook = ({ open, setOpen, itemId }) => {
  const { data: bookData } = useGetSingleBookQuery(itemId, { skip: !itemId });

  const [updateBook] = useUpdateBookMutation();

  const onSubmit = async (data) => {
    try {
      const image =
        data.image instanceof File
          ? data.image
          : data.image
          ? data.image
          : bookData?.data?.image;

      let submittedData;

      submittedData = {
        title: data.title || bookData?.data?.title,
        publication_date: data?.publication_date
          ? dayjs(data.publication_date).format("YYYY-MM-DD")
          : bookData?.data?.publication_date,
        isbn: data.isbn || bookData?.data?.isbn,
        status: true,
      };

      if (data?.image !== undefined) {
        submittedData = {
          title: data.title || bookData?.data?.title,
          publication_date: data?.publication_date
            ? dayjs(data.publication_date).format("YYYY-MM-DD")
            : bookData?.data?.publication_date,
          isbn: data.isbn || bookData?.data?.isbn,
          image: image,
          status: true,
        };
      }

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
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error updating book:", error);
      toast.error("An error occurred while updating the book.");
    }
  };

  return (
    <CustomDrawer
      open={open}
      setOpen={setOpen}
      title="Edit Book"
      placement={"left"}
    >
      <BookForm
        defaultValue={bookData?.data}
        onSubmit={onSubmit}
        setOpen={setOpen}
      />
    </CustomDrawer>
  );
};

export default EditBook;
