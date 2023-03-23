import { Text, Wrapper } from './index.styles';

interface IDisplay {
  temperature: number;
}

export function Display({ temperature }: IDisplay) {
  return (
    <Wrapper>
      <Text>{temperature}°C</Text>
    </Wrapper>
  );
}
