import { createContext, useContext, useMemo, useState } from "react";
import { onlyOneTypeRegex, lettersSymbolsNumbersRegex, combinationRegex, strengthMessages, strengthClasses } from './helpers';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const PassContext = ({ children }) => {
  const [password, setPassword] = useState('');
  const [className, setClassName] = useState('line');
  const [message, setMessage] = useState('');

  const calculateStrength = useMemo(() => {
    const passwordLength = password.length;

    if (passwordLength === 0) {
      setClassName('line');
      setMessage('');
      return '';
    }
    if (passwordLength <= 8) {
      setClassName(strengthClasses.weak);
      setMessage(strengthMessages.weak);
      return 'weak';
    }

    if (lettersSymbolsNumbersRegex.test(password)) {
      setClassName(strengthClasses.strong);
      setMessage(strengthMessages.strong);
      return 'strong';
    }

    if (combinationRegex.test(password)) {
      setClassName(strengthClasses.medium);
      setMessage(strengthMessages.medium);
      return 'medium';
    }

    setClassName(strengthClasses.weak);
    setMessage(strengthMessages.medium);
    return 'easy';
  }, [password])

  return (
    <GlobalContext.Provider value={{ password, setPassword, className, setClassName, message, setMessage, calculateStrength }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default PassContext;