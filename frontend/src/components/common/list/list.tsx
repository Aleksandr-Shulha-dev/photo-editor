import { FC } from 'react';

import './styles.scss';

interface Props<Item> {
  data: Item[];
  component: FC<Item>
}
 
function List<Type>({ data, component }: Props<Type>) {
  return (
    <ul className="list">
      {data.map(component)}
    </ul>
  );
}
 
export { List };