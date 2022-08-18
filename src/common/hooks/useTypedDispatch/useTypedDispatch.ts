// Libraries
import { useDispatch } from 'react-redux';

// Redux
import store from '@Features/redux/store';

const useTypedDispatch = () => useDispatch<typeof store.dispatch>();

export { useTypedDispatch };
