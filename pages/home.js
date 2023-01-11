import Image from 'next/image';
import React from 'react';
import MobileLayout from '/components/layout/MobileLayout.js';
import TopTabNavigator from '../components/layout/TopTabNavigator';

const Index = () => {
	return (
		<MobileLayout>
			<div className='my-5 mx-2'>
				<TopTabNavigator />

				<div>
					<a href={`/opname`}>
						<div className=' p-5 flex flex-col' style={{ width: '200px', height: '50vh' }}>
							<div className='p-5 bg-blue-500 rounded-lg shadow-lg mx-2 my-5 hover:drop-shadow-2xl hover:bg-blue-400'>
								<Image className='' src='/images/Logo Finance and Accounting Information System (FAIS)-06.png' alt='' width={100} height={100} />
							</div>
							<div className='flex flex-col items-center'>
								<h4 class='text-black text-center'>Amon</h4>
							</div>
						</div>
					</a>
				</div>
			</div>
		</MobileLayout>
	);
};

export default Index;
