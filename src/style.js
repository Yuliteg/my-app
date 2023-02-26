import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75vh;

   .title {
    margin-top: 5rem;
    margin-bottom: 4rem;

    p {
      font-size: 40px;
      font-weight: 600;
      font-family: Verdana;
      color: #006400; 
    }
  }

  input[type="password" i] {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 18px;
  margin-top: 2.5rem;
  display: flex;
  border: 1px solid #C0C0C0;
  border-radius: 20px;
  font-family: 'Apercu Arabic Pro';
  font-size: 18px;
  color: #2D2D2D;
  }

  *:focus {
    outline: none !important;
    border-color: #719ECE;
    box-shadow: 0 0 5px #719ECE;
}

  label {
  font-size: 20px;
  font-family: Verdana;
  }

.line-wrapper {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
}

.line {
    width: 100px;
    height: 6px;
    background-color: #555868;
    border-radius: 5px;
}

.red {
  background-color: #C70000;
}
.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}
`
