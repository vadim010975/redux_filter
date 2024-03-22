import { FC } from 'react';
import { Position, Pricelist } from '../service';

type ListProps = {
  pricelist: Pricelist,
  handleEdit: (position: Position) => void,
  handleRemove: (position: Position) => void,
}

const List: FC<ListProps> = ({ pricelist, handleEdit, handleRemove }) => {


  return (
    <>
      <ul className='list'>
        {pricelist.map((position, key) => {
          if (position.visibility) {
            return (
              <li className='position' key={key}>
                <div className='position__work'>{position.work}</div>
                <div className='position__price'>{position.price}</div>
                <button onClick={() => { handleEdit(position) }} className='position__btn'>edit</button>
                <button onClick={() => { handleRemove(position) }} className='position__btn'>X</button>
              </li>
            );
          }
        })}
      </ul>
    </>

  );
}

export default List;