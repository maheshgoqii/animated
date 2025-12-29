// hooks/useLoanApprovalTimer.ts
import { RootState } from '@/store';
import { decrementSeconds } from '@/store/loanApprovalSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useLoanApprovalTimer = () => {
    const dispatch = useDispatch();
    const { secondsLeft } = useSelector((state: RootState) => state.loanapprove);

    useEffect(() => {
        if (secondsLeft === 0) return;

        const timer = setInterval(() => {
            dispatch(decrementSeconds());
        }, 1000);

        return () => clearInterval(timer);
    }, [secondsLeft, dispatch]);

    return secondsLeft;
};