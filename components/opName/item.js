import React from 'react';
import Image from 'next/image';

const Item = ({data}) => {
  return (
    <div>
      <a href={`/opname/detail/${data.id}`}>
        <div className="flex flex-col bg-white rounded-b-lg shadow-md mx-2 my-2">
          <div className="flex flex-row bg-blue-500 py-5 px-1 space-x-28 rounded-t-lg">
            <div className="flex items-center">
              <h4 class="px-2 text-black whitespace-nowrap">{data.name}</h4>
            </div>

            <div className="flex items-center">
              <Image
                className=""
                src="/images/Logo Finance and Accounting Information System (FAIS)-06.png"
                alt=""
                width={150}
                height={200}
              />
            </div>
          </div>

          <div className="flex flex-row bg-white py-5 px-1 ">
            <div className="flex ">
              <h4 class="px-2 text-black whitespace-nowrap text-left">Status {data.status}</h4>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Item;
