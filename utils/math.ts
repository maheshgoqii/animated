export const calculateEMI = (P: number, N: number, R: number) => {
    const emi = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
    return Math.round(emi);
};
