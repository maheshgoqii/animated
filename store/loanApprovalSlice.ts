import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoanApprovalState {
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  data: any;
  message: string | null;
  secondsLeft: number;
  maxLoanAmount: number;
  minLoanAmount: number;
  loanSelected: number;
  selectedTenure: number;
}

const initialState: LoanApprovalState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  data: null,
  message: null,
  secondsLeft: 60,
  maxLoanAmount: 50000,
  minLoanAmount: 10000,
  loanSelected: 25000,
  selectedTenure: 1,
};

const loanApprovalSlice = createSlice({
  name: "loanApproval",
  initialState,
  reducers: {
    reset(state) {
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = false;
      state.data = null;
      state.message = null;
      state.secondsLeft = 60;
      state.loanSelected = 25000;
      state.selectedTenure = 1;
    },
    setSecondsLeft(state, action: PayloadAction<number>) {
      state.secondsLeft = action.payload;
    },
    setLoanSelected(state, action: PayloadAction<number>) {
      state.loanSelected = action.payload;
    },
    setSelectedTenure(state, action: PayloadAction<number>) {
      state.selectedTenure = action.payload;
    },
    decrementSeconds(state) {
      if (state.secondsLeft > 0) {
        state.secondsLeft -= 1;
      }
    },
  },
});

export const { 
  reset, 
  setSecondsLeft, 
  setLoanSelected, 
  setSelectedTenure, 
  decrementSeconds 
} = loanApprovalSlice.actions;

export default loanApprovalSlice.reducer;