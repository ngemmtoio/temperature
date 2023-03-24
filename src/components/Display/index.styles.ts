import styled from '@emotion/styled';

interface IWrapper {
  temperature: number;
}

function getBackgroundColor(temperature: number) {
  if (temperature === 0) {
    return 'gray';
  }
  if (temperature > 15) {
    return 'red';
  }
  if (temperature > 0) {
    return 'blue';
  }
  if (temperature < 0) {
    return 'black';
  }
}

export let Wrapper = styled.div<IWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin-top: 50px;
  background-color: ${({ temperature }) => getBackgroundColor(temperature)};
  border-radius: 50%;
`;

export let Text = styled.p`
  font-size: 70px;
  color: white;
`;
