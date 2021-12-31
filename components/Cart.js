import styles from '../styles/Cart.module.css';
import Loader from 'react-loader-spinner';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../store/user/userAPI';
import { fetchUserToken } from '../store/user/userSlice';

export default function Cart() {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(data);

  return (
    <div className={styles.cart}>
      <div className={styles.cart_body}>
        <div className={styles.cart_header}>
          <h3 className={styles.cart_header__title}>Already Member</h3>
        </div>
        <div className={styles.cart_main}>
          <input
            className={styles.cart_input}
            type="text"
            placeholder="Enter your Token"
            onChange={(e) => {
              dispatch(fetchUserToken(e.target.value));
            }}
          />
          <button
            onClick={() => {
              fetchUser(data.token, dispatch);
            }}
            className={styles.cart_btn}
          >
            Submit
          </button>
          {data.loading ? (
            <Loader
              type="Puff"
              color="#ff600c"
              height={40}
              width={40}
              timeout={10000}
            />
          ) : data.error ? (
            <p style={{ color: '#FF5151' }}>{data.error}</p>
          ) : (
            <div>
              <button>Show</button>
            </div>
          )}
        </div>
      </div>
      <a
        href="https://gitlab.com/-/profile/personal_access_tokens"
        className={styles.cart_get__token}
      >
        {`Don't have an access token yet?`}
      </a>
    </div>
  );
}
