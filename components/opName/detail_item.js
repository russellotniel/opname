import Image from "next/image";
import React from "react";

const DetailItem = ({ data }) => {
  return (
    <div>
      <a href={`/`}>
        <div className="flex flex-col bg-white rounded-b-2xl shadow-lg mx-2 my-5 hover:drop-shadow-2xl">
          <div className="flex flex-row py-5 px-2 rounded-t-lg ">
            {/* <div className="flex items-center pl-3">
              <Image
                className="rounded-lg"
                src="/images/Logo Finance and Accounting Information System (FAIS).png"
                alt=""
                width={90}
                height={90}
              />
            </div> */}

            <div className="flex items-center pl-3">
              <div className="flex flex-col px-2 text-sm">
                <h4 class="text-black whitespace-nowrap font-bold">
                  {data.name}
                </h4>
                <h4 class="whitespace-nowrap pt-2 text-xs text-slate-600">
                  {`Check your child's immunization history here`}
                </h4>
              </div>
            </div>

            <div className="flex pl-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="red"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DetailItem;
