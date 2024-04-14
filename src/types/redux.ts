import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

// `useDispatch` の型付け版
export const useAppDispatch = () => useDispatch<AppDispatch>();

// `useSelector` の型付け版
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
