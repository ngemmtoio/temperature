import { Display } from '../Display';
import { NumericOperation } from '../NumericOperation';
import { Wrapper, WrapperButtons } from './index.styles';

interface ILayout {}

export function Layout() {
  return (
    <Wrapper>
      <Display temperature={0}></Display>
      <WrapperButtons>
        <NumericOperation sign="-" />
        <NumericOperation sign="+" />
      </WrapperButtons>
    </Wrapper>
  );
}
