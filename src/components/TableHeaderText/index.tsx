import React from "react";

import { Text } from "components";

type TableHeaderTextProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "content"
> &
  Partial<{ content: string }>;

const TableHeaderText: React.FC<TableHeaderTextProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-center w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-auto md:w-full">
              <div className="flex flex-col items-center justify-start w-auto md:w-full">
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtInterMedium14Gray800"
                >
                  {props?.content}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TableHeaderText.defaultProps = { content: "Order ID" };

export default TableHeaderText;
