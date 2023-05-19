import { useDispatch } from 'react-redux'
import type { AppDispatch } from 'data/store'

// Use throughout your app instead of plain `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch