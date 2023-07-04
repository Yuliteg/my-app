export const onlyOneTypeRegex = /^([a-zA-Z]+|[0-9]+|[^a-zA-Z0-9]+)$/;
export const combinationRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]|(?=.*[A-Za-z])(?=.*[@$!%*#?&+=._-])[A-Za-z@$!%*#?&+=._-]|(?=.*\d)(?=.*[@$!%*#?&+=._-])[\d@$!%*#?&+=._-]+$/;
export const lettersSymbolsNumbersRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&+=._-])[A-Za-z\d@$!%*#?&+=._-]+$/;

export const strengthClasses = {
  weak: 'line red',
  medium: 'line yellow',
  strong: 'line green',
};

export const strengthMessages = {
  weak: "Your password must contain more than 8 characters!",
  medium: "Your string must contain letters, numbers and symbols!",
  strong: '',
};