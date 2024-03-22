import { FC, useState, useEffect } from 'react';
import { Position } from '../service';
import { useDispatch, useSelector } from 'react-redux';
import { hideBtnCancel, setFormValues } from '../redux/actionCreators';

type FormProps = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>,
  formVal: Position,
}

const Form: FC<FormProps> = ({ handleSubmit, formVal }) => {

  type RootState = {
    btnCancel: {
      visibilityBtnCancel: boolean,
    },
    form: { formValues: Position},
  }

  const { visibilityBtnCancel } = useSelector((state: RootState) => state.btnCancel);
  const { formValues } = useSelector((state: RootState) => state.form);

  const dispatch = useDispatch();

  const [data, setData] = useState<Position>({work: '', price: ''});

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.currentTarget;
    setData(data => {
      return {
        ...data,
        [name]: value
      } as Position
    });
  }

  useEffect(() => {
    setData(formVal);
  }, [formVal]);

  useEffect(() => {
    if (data.work === '' && data.price === '' && (formValues.work != '' || formValues.price != '')) {
      dispatch(hideBtnCancel());
      dispatch(setFormValues({work: '', price: ''}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleCancel: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(hideBtnCancel());
    dispatch(setFormValues({work: '', price: ''}));
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
          dispatch(setFormValues({work: '', price: ''}));
        }}
        className='form'
      >
        <input onChange={handleChange} type='text' name='work' value={data.work} className='form__input' required />
        <input onChange={handleChange} type='text' name='price' value={data.price} className='form__input' required />
        <button type='submit' className='form__btn'>Save</button>
        {visibilityBtnCancel && <button onClick={handleCancel} type='reset' className='form__btn'>Cancel</button>}
      </form>
    </>

  );
}

export default Form;