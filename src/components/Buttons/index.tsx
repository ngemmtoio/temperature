import { ButtonMin, ButtonPlus, Wrapper } from './index.styles';

interface IButtons {}

export function Buttons() {
  return (
    <Wrapper>
      <ButtonMin>-</ButtonMin>
      <ButtonPlus>+</ButtonPlus>
    </Wrapper>
  );
}
