import { createContext, useContext, useMemo, useState } from "react";
import { onlyOneTypeRegex, lettersSymbolsNumbersRegex, combinationRegex } from './helpers';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

let weakMessage = 'Your password must contain more than 8 characters!';
let easyMessage = 'Your string must contain letters, numbers and symbols!';

const PassContext = ({ children }) => {
  const [password, setPassword] = useState('');
  const [className, setClassName] = useState('line');
  const [message, setMessage] = useState('');

  const calculateStrength = useMemo(() => {
    if (password.length <= 8 && password.length > 0) {
      setClassName('line red');
      setMessage(weakMessage);
      return 'weak';
    } else if (password.length > 8) {
      if (lettersSymbolsNumbersRegex.test(password)) {
        setClassName('line green');
        setMessage('');
        return 'strong';
      } else if (combinationRegex.test(password)) {
        setClassName('line yellow');
        setMessage(easyMessage);
        return 'medium';
      } else if (onlyOneTypeRegex.test(password)) {
        setClassName('line red');
        setMessage(easyMessage);
        return 'easy';
      }
    } else {
      setClassName('line');
      setMessage('');
      return '';
    }
  }, [password])

  return (
   <GlobalContext.Provider value={{password, setPassword, className, setClassName, message, setMessage, calculateStrength}}>
     {children}
   </GlobalContext.Provider>
  )
}

export default PassContext;