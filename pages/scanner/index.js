import { useState } from "react";
import { QrReader } from "react-qr-reader";
import MobileLayout from "../../components/layout/MobileLayout";

const scanner = () => {
  
  const [data, setData] = useState("No result");

  return (
    <MobileLayout>
      <div className="text-center">
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "95px" }}
        />
      </div>
      <p>{data}</p>
    </MobileLayout>
  );
};

export default scanner;
