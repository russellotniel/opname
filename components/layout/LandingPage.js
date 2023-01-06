import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LandingPage = (props) => {
    const router = useRouter();

    useEffect(() => {
        const randomMiliseconds = Math.floor(Math.random()*5000) + 3000;
        setTimeout(() => {
            router.push('/login')
        }, randomMiliseconds);
    }, []);

	return (
        <div>
            <img className="object-contain" src={'logo.png'} style={{width:400, height: 800}}/>
        </div>
	);
};

export default LandingPage;