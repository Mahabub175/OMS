import { Button, Modal } from "antd";
import { SubmitButton } from "../Button/CustomButton";
import { useDeleteBookMutation } from "../../../redux/services/book/bookApi";
import { toast } from "sonner";

const DeleteModal = ({ modalOpen, setModalOpen, itemId }) => {
  const [deleteBook] = useDeleteBookMutation();
  const handleDelete = async () => {
    try {
      const res = await deleteBook(itemId);
      if (res.data.success) {
        setModalOpen(false);
        toast.success(res.data.message);
      } else {
        setModalOpen(false);
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      setModalOpen(false);
      toast.error("An error occurred while deleting the book.");
    }
  };
  return (
    <Modal
      centered
      open={modalOpen}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
      footer={null}
    >
      <div className="p-8">
        <h2 className="text-center text-2xl font-bold">
          Are your sure you want to delete?
        </h2>
        <div className="lg:flex mt-10 gap-6">
          <Button
            onClick={() => setModalOpen(false)}
            type="text"
            className="font-bold w-full bg-transparent text-pdf px-10 pt-2 pb-8 border border-pdf"
          >
            Cancel
          </Button>
          <SubmitButton func={handleDelete} text={"Delete"} />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
