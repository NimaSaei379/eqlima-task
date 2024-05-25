import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function BuyOrSellModal({
  openModal,
  setOpenModal,
  modalTitle,
  handleOrder,
}: {
  modalTitle: string;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>> | (() => void);
  handleOrder: (value: number) => Promise<any>;
}) {
  const [modalValue, setModalValue] = useState<number | undefined>();

  const handleSubmitModal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (modalValue) {
      await handleOrder(modalValue);
    }
  };
  return (
    <Modal isOpen={openModal} className="">
      <div className="px-3 w-full pt-2 text-text_secondary">
        <h3>{modalTitle}</h3>
      </div>
      <form
        className="w-full flex flex-col px-3 justify-center py-2"
        onSubmit={handleSubmitModal}
      >
        <div className="mb-2">
          <Input
            type="text"
            handleChange={(e) => setModalValue(Number(e.target.value))}
            value={modalValue}
          />
        </div>
        <div className="flex gap-4 py-2">
          <Button onClick={() => setOpenModal(false)}>بستن</Button>
          <Button type="submit">ثبت معامله</Button>
        </div>
      </form>
    </Modal>
  );
}
