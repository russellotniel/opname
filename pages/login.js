import MobileLayout from '../components/layout/MobileLayout';
import Image from 'next/image';
import logofais from '../public/images/Logo Finance and Accounting Information System (FAIS).png';
import SliderLogin from '../components/slider/SliderLogin';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const Login = () => {
	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},

		validationSchema: Yup.object({
			username: Yup.string().required('Required!'),
			password: Yup.string().required('Required!'),
		}),

		onSubmit: (data) => {
			console.log(data);
		},
	});
	return (
		<MobileLayout>
			<Image src={logofais} className='img-fais' alt="logo" />
			<SliderLogin />
			<main className='mb-5'>
				<form onSubmit={formik.handleSubmit} className='container px-5'>
					{/* <form onSubmit={formik.handleSubmit} className='container'> */}
					<div className='mb-3'>
						<div className='relative mt-1 rounded-md shadow-sm'>
							<label htmlFor='username' className='block text-sm font-medium text-gray-700 pb-2'>
								Username
							</label>
							<input
								type='text'
								name='username'
								id='username'
								placeholder='Masukkan username'
								onChange={formik.handleChange}
								defaultValue={formik.values.username}
								{...formik.getFieldProps('username')}
								className={`form-control block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 ${
									formik.touched.username &&
									formik.errors.username &&
									'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400'
								}`}
							/>
						</div>
						{formik.touched.username && formik.errors.username && <div className='text-red-500'>{formik.errors.username}</div>}
					</div>
					<div>
						<div className='relative mt-1 rounded-md shadow-sm'>
							<label htmlFor='password' className='block text-sm font-medium text-gray-700 pb-2'>
								Password
							</label>
							<input
								type='password'
								name='password'
								id='password'
								placeholder='Masukkan password'
								className={`form-control block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 ${
									formik.touched.password &&
									formik.errors.password &&
									'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400'
								}`}
								onChange={formik.handleChange}
								defaultValue={formik.values.password}
								{...formik.getFieldProps('password')}
							/>
						</div>
						{formik.touched.password && formik.errors.password && <div className='text-red-500'>{formik.errors.password}</div>}
					</div>
					<div className='mt-5'>
						<button className='bg-blue-500 w-full h-full rounded-lg text-white py-2.5' type='submit'>
							Masuk
						</button>
					</div>
				</form>
			</main>
		</MobileLayout>
	);
};

export default Login;
