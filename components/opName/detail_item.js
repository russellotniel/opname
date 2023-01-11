import Image from 'next/image';
import React from 'react';

const DetailItem = ({ data }) => {
	return (
		<div>
			<div className='flex flex-col bg-white rounded-b-2xl shadow-lg mx-2 my-5 hover:drop-shadow-2xl'>
				<div className='flex flex-col py-5 px-2 rounded-t-lg '>
					<div className='flex items-center pl-3'>
						<div className='flex flex-row justify-between w-full'>
							<h4 class='text-black whitespace-wrap font-bold'>{data.name}</h4>
							<svg xmlns='http://www.w3.org/2000/svg' fill='red' viewBox='0 0 24 24' strokeWidth={1.5} stroke='red' className='w-3 h-3'>
								<path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z' />
							</svg>
						</div>
					</div>
					<div className='pl-3'>
						<h4 class='whitespace-wrap pt-2 text-xs text-slate-600'>{`Check your child's immunization history here`}</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailItem;
