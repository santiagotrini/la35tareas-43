import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
  div {
    border: 1px solid black;
    margin: 5px auto;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
`;

const Task = () => {

  const [done, setDone] = useState(false);

  const handleClick = () => {
    setDone(!done);
  };

  const estilo = done ?
  { textDecoration: 'line-through' }
  : { textDecoration: 'none' };

  return (
    <Wrapper>
      <div>
        <p style={estilo}>Tarea de ejemplo</p>
        <input onClick={handleClick} type="checkbox" />
        <button>X</button>
      </div>
    </Wrapper>
  );
}

export default Task;
