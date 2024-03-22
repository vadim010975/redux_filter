import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPosition, removePosition, setFormValues, showBtnCancel, hideBtnCancel } from './redux/actionCreators';
import Form from './components/Form';
import List from './components/List';
import EntryField from './components/EntryField';
import { Pricelist, Position } from './service';

export default function App() {

  type RootState = {
    list: { pricelist: Pricelist},
    form: { formValues: Position},
  }

  const { pricelist } = useSelector((state: RootState) => state.list);

  const { formValues } = useSelector((state: RootState) => state.form);

  const dispatch = useDispatch();
  

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData);
    const work = data.work as string;
    const price = data.price as string;
    dispatch(addPosition({work, price}));
    dispatch(hideBtnCancel());
  }

  const handleEdit = (position: Position) => {
    dispatch(setFormValues(position));
    dispatch(showBtnCancel());
  }

  const handleRemove = (position: Position) => {
    dispatch(removePosition(position));
  }

  return (
    <>
      <EntryField />
      <Form handleSubmit={handleSubmit} formVal={formValues} />
      <List pricelist={pricelist} handleEdit={handleEdit} handleRemove={handleRemove} />
    </>
  )
}
