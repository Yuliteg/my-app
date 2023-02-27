import { useMemo, useState } from 'react';
import { Wrapper } from './style';
import { onlyOneTypeRegex, lettersSymbolsNumbersRegex, combinationRegex } from './helpers';

function App() {
  const [password, setPassword] = useState('');
  const [className, setClassName] = useState('line');
  const [message, setMessage] = useState('');

  let weakMessage = 'Your password must contain more than 8 characters!';
  let easyMessage = 'Your string must contain letters, numbers and symbols!';

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
    <Wrapper>
      <div className="title">
        <p>PassGuard</p>
      </div>
      <div className="input-wrapper">
        <p className='text'>Please enter your password for verification:</p>
        <label>{message}</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="line-wrapper">
          <div className={className}></div>
          <div className={calculateStrength !== 'easy' ? className : 'line'}></div>
          <div className={calculateStrength === 'weak' ? className : calculateStrength === 'strong' ? className : 'line'}></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
