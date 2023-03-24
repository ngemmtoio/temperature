import { useState } from 'react';
import { Display } from '../Display';
import { NumericOperation } from '../NumericOperation';
import { Wrapper, WrapperButtons } from './index.styles';

interface ILayout {}

export function Layout() {
  let [temperature, setTemperature] = useState(0);
  return (
    <Wrapper>
      <Display temperature={temperature}></Display>
      <WrapperButtons>
        <NumericOperation
          onClick={() => setTemperature((temperature) => temperature - 1)}
          sign="-"
        />
        <NumericOperation
          onClick={() => setTemperature((temperature) => temperature + 1)}
          sign="+"
        />
      </WrapperButtons>
    </Wrapper>
  );
}
