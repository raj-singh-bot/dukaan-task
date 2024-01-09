import React from "react";

import { Button, Img, Text } from "components";

type PaymentsCashfreeDashboardPaginationProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "previousbutton"
  | "columnzerotext"
  | "columnzeroonetext"
  | "tenbutton"
  | "columnzerotwotext"
  | "columnzerothreetext"
  | "columnzerofourtext"
  | "columnzerofivetext"
  | "columnzerosixtext"
  | "columnzeroseventext"
  | "columnzeroeighttext"
  | "columnzeroninetext"
  | "nextbutton"
> &
  Partial<{
    previousbutton: string;
    columnzerotext: string;
    columnzeroonetext: string;
    tenbutton: string;
    columnzerotwotext: string;
    columnzerothreetext: string;
    columnzerofourtext: string;
    columnzerofivetext: string;
    columnzerosixtext: string;
    columnzeroseventext: string;
    columnzeroeighttext: string;
    columnzeroninetext: string;
    nextbutton: string;
  }>;

const PaymentsCashfreeDashboardPagination: React.FC<
  PaymentsCashfreeDashboardPaginationProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[100px] pl-[5px] pr-[11px] py-[7px] rounded"
          leftIcon={
            <Img
              className="h-[18px] mr-1.5"
              src="images/img_arrowleft.svg"
              alt="arrow_left"
            />
          }
        >
          <div className="font-inter font-medium text-center text-gray-800 text-sm">
            {props?.previousbutton}
          </div>
        </Button>
        <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.columnzerotext}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.columnzeroonetext}
            </Text>
          </div>
          <Button className="bg-blue-800 cursor-pointer font-inter font-medium h-7 py-[5px] rounded text-center text-sm text-white-A700 w-7">
            {props?.tenbutton}
          </Button>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.columnzerotwotext}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.columnzerothreetext}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.columnzerofourtext}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.columnzerofivetext}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.columnzerosixtext}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.columnzeroseventext}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.columnzeroeighttext}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.columnzeroninetext}
            </Text>
          </div>
        </div>
        <Button
          className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[74px] pl-[11px] pr-[5px] py-[7px] rounded"
          rightIcon={
            <Img
              className="h-[18px] ml-1.5"
              src="images/img_arrowright.svg"
              alt="arrow_right"
            />
          }
        >
          <div className="font-inter font-medium text-center text-gray-800 text-sm">
            {props?.nextbutton}
          </div>
        </Button>
      </div>
    </>
  );
};

PaymentsCashfreeDashboardPagination.defaultProps = {
  previousbutton: "Previous",
  columnzerotext: "1",
  columnzeroonetext: "...",
  tenbutton: "10",
  columnzerotwotext: "11",
  columnzerothreetext: "12",
  columnzerofourtext: "13",
  columnzerofivetext: "14",
  columnzerosixtext: "15",
  columnzeroseventext: "16",
  columnzeroeighttext: "17",
  columnzeroninetext: "18",
  nextbutton: "Next",
};

export default PaymentsCashfreeDashboardPagination;
