import { useCallback, useEffect, useMemo, useState } from 'react';
import { Wrapper } from './style';

function App() {
  const [password, setPassword] = useState('');
  const [className, setClassName] = useState('line');

  const onlyOneTypeRegex = /^([a-zA-Z]+|[0-9]+|[^a-zA-Z0-9]+)$/;
  const combinationRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]|(?=.*[A-Za-z])(?=.*[@$!%*#?&\)\(+=._-])[A-Za-z@$!%*#?&\)\(+=._-]|(?=.*\d)(?=.*[@$!%*#?&\)\(+=._-])[\d@$!%*#?&\)\(+=._-]+$/;
  const lettersSymbolsNumbersRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&\)\(+=._-])[A-Za-z\d@$!%*#?&\)\(+=._-]+$/;

  const calculateStrength = useMemo(() => {
    if (password.length <= 8 && password.length > 0) {
      setClassName('line red')
      return 'weak'
    } else if (password.length > 8) {
      if (lettersSymbolsNumbersRegex.test(password)) {
        setClassName('line green')
        return 'strong'
      } else if (combinationRegex.test(password)) {
        setClassName('line yellow')
        return 'medium'
      } else if (onlyOneTypeRegex.test(password)) {
        setClassName('line red')
        return 'easy'
      }
    } else {
      setClassName('line')
      return ''
    }
  }, [password])

  return (
    <Wrapper>
      <div className="title">
        <p>PassGuard</p>
      </div>
      <div className="input-wrapper">
        <label>Please enter your password for verification:</label>
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
