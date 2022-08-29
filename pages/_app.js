/** @format */

import '../styles/globals.css';
import '../styles/circleAnimation.scss';
import { Provider } from 'react-redux';
import { store } from '../redux/createReduxStore';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
