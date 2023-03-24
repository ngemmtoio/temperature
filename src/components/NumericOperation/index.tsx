import { Button } from './index.styles';

interface INumericOperation {
  sign: string;
}

export function NumericOperation({ sign }: INumericOperation) {
  return <Button>{sign}</Button>;
}
