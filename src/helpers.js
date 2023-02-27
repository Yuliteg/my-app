export const onlyOneTypeRegex = /^([a-zA-Z]+|[0-9]+|[^a-zA-Z0-9]+)$/;
export const combinationRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]|(?=.*[A-Za-z])(?=.*[@$!%*#?&+=._-])[A-Za-z@$!%*#?&+=._-]|(?=.*\d)(?=.*[@$!%*#?&+=._-])[\d@$!%*#?&+=._-]+$/;
export const lettersSymbolsNumbersRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&+=._-])[A-Za-z\d@$!%*#?&+=._-]+$/;