import { Button, Modal } from "antd";

const DetailsModal = ({ modalOpen, setModalOpen, title, details }) => {
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const excludedKeys = ["created_at", "is_deleted"];

  if (!details) {
    return null;
  }

  return (
    <Modal
      centered
      open={modalOpen}
      onCancel={handleCloseModal}
      footer={null}
      width={"50%"}
    >
      <div className="p-5">
        <h2 className="text-center text-2xl font-bold">{title} Details</h2>

        {Object.entries(details).map(
          ([key, value]) =>
            !excludedKeys.includes(key) && (
              <div key={key} className="mt-4 flex items-center gap-4">
                <h3 className="text-lg font-bold capitalize">
                  {key.replace(/_/g, " ")}:
                </h3>
                {key === "status" ? (
                  <p>{value ? "Active" : "Inactive"}</p>
                ) : typeof value === "string" && value.startsWith("http") ? (
                  <img src={value} alt={key} className="w-1/2" />
                ) : (
                  <p className="">{value}</p>
                )}
              </div>
            )
        )}
        <div className="flex justify-end mt-10">
          <Button
            onClick={handleCloseModal}
            type="text"
            className="font-bold bg-primary border border-primary px-20 pt-2 pb-8 text-white"
          >
            Ok
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DetailsModal;
