import type { FC } from 'preact/compat';

type Props = { name: string; };

const Greeting: FC<Props> = ({ name }) => {
  return <p>Hello, {name}!</p>;
};

Greeting.defaultProps = { name: 'World' };

export default Greeting;
