import { Inter } from '@next/font/google';
import MobileLayout from '../components/layout/MobileLayout';
import LandingPage from '../components/layout/LandingPage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<MobileLayout>
			<LandingPage></LandingPage>
		</MobileLayout>
	);
}
