import BookForm from "../../../components/AllSection/Test/BookForm";
import { useGetSingleBookQuery } from "../../../redux/services/book/bookApi";

const EditBook = ({ open, setOpen, itemId }) => {
  const { data: bookData } = useGetSingleBookQuery(itemId, { skip: !itemId });
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <BookForm
      defaultValue={bookData?.data}
      onSubmit={onSubmit}
      open={open}
      setOpen={setOpen}
    />
  );
};

export default EditBook;
