export const RegistrationDate = () => {
    const dateNow = Date.now();
    const issueDateCost = new Date(dateNow);
    const issueDateLocalConst = issueDateCost.toLocaleDateString();
    return issueDateLocalConst
}
export const RegistrationTime = () => {
    const dateNow = Date.now();
    const issueDateCost = new Date(dateNow);
    const issueDateLocalConst = issueDateCost.toLocaleTimeString();
    return issueDateLocalConst
}