import { Button, Modal } from "antd";
import { SubmitButton } from "../Button/CustomButton";

const DeleteModal = ({ modalOpen, setModalOpen }) => {
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
          <SubmitButton text={"Delete"} />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
