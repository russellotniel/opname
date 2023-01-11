import React from 'react';
import MobileLayout from '/components/layout/MobileLayout.js';
import OpnameDetailItem from '/components/opName/detail_item.js';
import SuspekBox from '../../../components/opName/SuspekBox';
import { useRouter } from 'next/router';
import BottomTabNavigator from '../../../components/layout/BottomTabNavigator';

const Detail = () => {
	const router = useRouter();

	const Data_Opname = [
		{
			id: 1,
			name: 'test_opName1',
			status: 'status_opName1',
		},
		{
			id: 2,
			name: 'test_opName2',
			status: 'status_opName2',
		},
		{
			id: 3,
			name: 'test_opName3',
			status: 'status_opName3',
		},
		{
			id: 4,
			name: 'test_opName4',
			status: 'status_opName4',
		},
		{
			id: 5,
			name: 'test_opName5',
			status: 'status_opName5',
		},
	];

	return (
		<MobileLayout>
			<div className='my-5 mx-2'>
				<div className='mx-2 my-1 mb-3'>
					<div className='flex flex-row items-center'>
						<div className='pr-3 cursor-pointer' onClick={() => router.push('/opname')}>
							<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
								<path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
							</svg>
						</div>
						<h5 className='text-black pr-1 text-2xl'>Nomor Opname Task</h5>
					</div>
				</div>

				<SuspekBox />

				<div>
					{Data_Opname.map((data) => (
						<OpnameDetailItem key={data.id} data={data} />
					))}
				</div>
			</div>

			<BottomTabNavigator />
		</MobileLayout>
	);
};

export default Detail;
