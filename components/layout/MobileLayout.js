const MobileLayout = (props) => {
	return (
		<div className='border-solid border-2 border-black rounded-md bg-white' style={{ width: '414px', height: '100vh', overflowY: 'auto' }}>
			{props.children}
		</div>
	);
};

export default MobileLayout;
