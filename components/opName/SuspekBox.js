import Image from 'next/image';
import React from 'react';

const SuspekBox = ({ data }) => {
	return (
		<div>
			<a href={`#`}>
				<div className='flex flex-col bg-white border rounded-2xl shadow-lg mx-2 my-5'>
					<div className='flex flex-col justify-center items-center px-3 text-yellow-500'>
						<div className='mt-3'>
							<h2 className='whitespace-nowrap pt-2 text-xl'>Suspek</h2>
						</div>
						<div className='flex text-center my-5 whitespace-normal text-xs gap-3'>
							<div>
								<h2 className='text-[10px]'>Kel Cempaka Putih Timur</h2>
								<h2 className='text-xl'>0</h2>
								<div className='flex justify-center items-center'>
									<h2>0</h2>
									<svg xmlns='http://www.w3.org/2000/svg' fill='yellow' viewBox='0 0 24 24' strokeWidth={1.5} stroke='yellow' className='w-5 h-5'>
										<path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z' />
									</svg>
								</div>
							</div>
							<div>
								<h2 className='text-[10px]'>Cempaka Putih</h2>
								<h2 className='text-xl'>0</h2>
								<div className='flex justify-center items-center'>
									<h2>0</h2>
									<svg xmlns='http://www.w3.org/2000/svg' fill='yellow' viewBox='0 0 24 24' strokeWidth={1.5} stroke='yellow' className='w-5 h-5'>
										<path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z' />
									</svg>
								</div>
							</div>
							<div>
								<h2 className='text-[10px]'>Kota Jakarta Pusat</h2>
								<h2 className='text-xl'>0</h2>
								<div className='flex justify-center items-center'>
									<h2>0</h2>
									<svg xmlns='http://www.w3.org/2000/svg' fill='yellow' viewBox='0 0 24 24' strokeWidth={1.5} stroke='yellow' className='w-5 h-5'>
										<path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z' />
									</svg>
								</div>
							</div>
							<div>
								<h2 className='text-[10px]'>DKI Jakarta</h2>
								<h2 className='text-xl'>0</h2>
								<div className='flex justify-center items-center'>
									<h2>0</h2>
									<svg xmlns='http://www.w3.org/2000/svg' fill='yellow' viewBox='0 0 24 24' strokeWidth={1.5} stroke='yellow' className='w-5 h-5'>
										<path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z' />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default SuspekBox;
