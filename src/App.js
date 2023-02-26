import { Wrapper } from './style';

function App() {
  return (
    <Wrapper>
      <div className="title">
        <p>PassGuard</p>
      </div>
      <div className="input">
        <label>Please enter your password for verification:</label>
        <input type="text" />
        <div className="line-wrapper">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
