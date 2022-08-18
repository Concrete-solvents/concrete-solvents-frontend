// Libraries
import { TypedUseSelectorHook, useSelector } from 'react-redux';

// Redux
import store from '@Features/redux/store';

const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export { useTypedSelector };
