import { useState } from "react";
import TableHeader from "../../../../components/Shared/Table/TableHeader";
import CreatePhone from "./CreatePhone";

const Phone = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  return (
    <div className="px-5">
      <TableHeader setOpen={setOpen} title={"Phones"} />

      <CreatePhone open={open} setOpen={setOpen} />
    </div>
  );
};

export default Phone;
