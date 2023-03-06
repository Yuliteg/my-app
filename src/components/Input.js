import { useGlobalContext } from '../passContext';

const Input = () => {
  const {password, setPassword, className, message, calculateStrength} = useGlobalContext();

  return (
    <>
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
    </>
  )
}

export default Input
