import { Provider } from 'react-redux';
import axios from 'axios';

import store from '../store/store';
import '../styles/globals.css';

axios.defaults.baseURL = 'https://gitlab.com/api/v4';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
