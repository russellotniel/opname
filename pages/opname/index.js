import React from 'react';
import MobileLayout from '../../components/layout/MobileLayout';
import Opname_item from '/components/opName/item.js';

const Index = () => {
  const Data_Opname = [
    {
      id: 1,
      name: 'test_opName1',
      status: 'status_opName1'
    },
    {
      id: 2,
      name: 'test_opName2',
      status: 'status_opName2'
    },
    {
      id: 3,
      name: 'test_opName3',
      status: 'status_opName3'
    },
    {
      id: 4,
      name: 'test_opName4',
      status: 'status_opName4'
    },
    {
      id: 5,
      name: 'test_opName5',
      status: 'status_opName5'
    }
  ];

  return (
    <MobileLayout>
      <div>
        <div className="flex flex-row justify-between mx-2 my-1 mb-3">
          <div className="flex flex-row">
            <div className="pr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h5 className="text-black pr-1">Hi,</h5>
            <h5 className="text-black underline underline-offset-1">
              Muhammad Fajar Adythia
            </h5>
          </div>
          <div className='flex flex-items-end'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </div>
        </div>

        <div>
          {Data_Opname.map((data) => (
            <Opname_item key={data.id} data={data} />
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Index;
