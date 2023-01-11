import React from 'react';
import MobileLayout from '../../components/layout/MobileLayout';
import Opname_item from '/components/opName/item.js';
import TopTabNavigator from '../../components/layout/TopTabNavigator';

const Index = () => {
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
				<TopTabNavigator />

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
