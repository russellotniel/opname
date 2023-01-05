import { Inter } from '@next/font/google';
import MobileLayout from '../components/layout/MobileLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<MobileLayout>
			<h1>test</h1>
		</MobileLayout>
	);
}
