import React from "react";

import { Text } from "components";

type PaymentsCashfreeDashboardTabletype1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "content"
> &
  Partial<{ content: string }>;

const PaymentsCashfreeDashboardTabletype1: React.FC<
  PaymentsCashfreeDashboardTabletype1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-center w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-auto md:w-full">
              <Text
                className="text-blue-800 text-sm w-auto"
                size="txtInterMedium14Blue800"
              >
                {props?.content}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PaymentsCashfreeDashboardTabletype1.defaultProps = { content: "Lorem Ipsum" };

export default PaymentsCashfreeDashboardTabletype1;
