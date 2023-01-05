const MobileLayout = (props) => {
	return (
		<div className='border-solid border-2 border-black rounded-md' style={{ width: '414px', height: '896px', textAlign: 'center' }}>
			{props.children}
		</div>
	);
};

export default MobileLayout;
