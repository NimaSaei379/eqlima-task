import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import TransactionCard from "../../components/TransactionCard";
import { API_BASE_URL, buyOrder, sellOrder } from "../../api";
import BuyOrSellModal from "./BuyOrSellModal";

function MainPage() {
  const [prices, setPrices] = useState<Record<string, any>>({
    buyPrice: 0,
    sellPrice: 0,
  });
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<"buy" | "sell" | undefined>();

  const updatePrices = (data: string) => {
    const parsedData = JSON.parse(data);
    setPrices(parsedData);
  };
  useEffect(() => {
    const eventSource = new EventSource(`${API_BASE_URL}/prices`);
    eventSource.onmessage = (e) => updatePrices(e.data);
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full">
        <div className="w-full my-10 mx-auto px-4 flex flex-col sm:flex-row justify-center gap-10">
          <TransactionCard
            type="buy"
            dealPrice={prices.buyPrice}
            actionButtonFunction={() => {
              setOpenModal(true);
              setActiveModal("buy");
            }}
          />
          <TransactionCard
            type="sell"
            dealPrice={prices.sellPrice}
            actionButtonFunction={() => {
              setOpenModal(true);
              setActiveModal("sell");
            }}
          />
        </div>
      </main>
      <BuyOrSellModal
        openModal={openModal}
        setOpenModal={() => {
          setOpenModal(false);
          setActiveModal(undefined);
        }}
        handleOrder={async (value: number) => {
          activeModal === "sell"
            ? await sellOrder({ price: prices.sell, weight: value })
            : await buyOrder({ price: prices.buy, weight: value });
        }}
        modalTitle="ثبت سفارش خرید / فروش"
      />
    </>
  );
}

export default MainPage;
