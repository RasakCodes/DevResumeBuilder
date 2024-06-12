import React from "react";
import SheetComp from "@/shared/component/sheet";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import { useDownloadDocument } from "@/app/Build/shared/hooks/useDownloadDocument";
import { DownloadSpin } from "@/shared/component/icons/downloadSpin";
import EditForm from "../components/EditForm";

const TopBar = () => {
  const { downloadPdfDocument, isLoading } = useDownloadDocument();

  return (
    <div className="flex justify-end gap-x-3 my-4">
      <Button
        onClick={downloadPdfDocument}
        disabled={isLoading}
        className={`${
          isLoading ? "bg-gray-300" : "bg-[#f9e547] hover:bg-gray-50"
        } text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50`}
      >
        {isLoading ? <DownloadSpin /> : <DownloadIcon className="font-bold" />}
        Download
      </Button>

      <SheetComp
        trigger={
          <Button
            className="bg-[#0f172a] text-white font-semibold py-2 px-4 rounded-lg shadow-md mr-4"
            disabled={isLoading}
          >
            Quick Edit
          </Button>
        }
      >
        <EditForm />
      </SheetComp>
    </div>
  );
};

export default TopBar;
