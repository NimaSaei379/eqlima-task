import React, { HTMLAttributes } from "react";
import Button from "./Button";

interface ITransactionCard extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  actionButtonFunction: () => void;
  dealPrice?: number;
  type: "buy" | "sell";
}
export default function TransactionCard({
  type,
  dealPrice,
  actionButtonFunction,
}: ITransactionCard) {
  const title = type === "buy" ? "قیمت خرید" : "قیمت فروش";
  const actionButtonTitle = type === "buy" ? "خرید" : "فروش";
  return (
    <div className="px-5 py-2 flex flex-col justify-center rounded bg-primary3 w-full sm:w-1/2 text-center">
      <h2 className="text-center py-2 font-semibold text-lg text-text_primary mb-3">
        {title}
      </h2>
      <div className="w-full py-2 px-1">
        <p className="text-text_secondary font-medium">
          {dealPrice}
          <span className="mr-3">ریال</span>
        </p>
      </div>
      <div className="w-full py-2 px-1">
        <Button className="w-full" onClick={actionButtonFunction}>
          {actionButtonTitle}
        </Button>
      </div>
    </div>
  );
}
