import { Button } from './index.styles';

interface INumericOperation {
  sign: string;
  onClick: () => void;
}

export function NumericOperation({ sign, onClick }: INumericOperation) {
  return <Button onClick={onClick}>{sign}</Button>;
}
