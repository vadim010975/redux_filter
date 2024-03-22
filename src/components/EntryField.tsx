import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterList } from '../redux/actionCreators';

const EntryField = () => {

  const [data, setData] = useState<{text: string}>({text: ''});

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.currentTarget;
    setData(data => {
      return {
        ...data,
        [name]: value
      }
    });
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterList(data.text));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <form className='form-filter'>
        <input onChange={handleChange} type='text' name='text' value={data.text} className='form-filter__input' />
      </form>
    </>
  );
}

export default EntryField;