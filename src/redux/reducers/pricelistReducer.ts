import { ADD_POSITION, REMOVE_POSITION, FILTER_LIST } from '../actions';
import { Position } from '../../service';

const initialState = {
  pricelist: [
    {
      work: 'Замена стекла',
      price: '21000',
    },
    {
      work: 'Замена дисплея',
      price: '25000',
    },
    {
      work: 'Замена аккумулятора',
      price: '4000',
    },
    {
      work: 'Замена микрофона',
      price: '2500',
    },
  ]
}

type Action = {
  type: string,
  payload: Position | string,
}

const pricelistReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_POSITION:
      // eslint-disable-next-line no-case-declarations
      const arr = [...state.pricelist] as Position[];
      arr.push({...action.payload as Position, visibility: true});
      return {
        ...state,
        pricelist: arr,
      }
      case REMOVE_POSITION:
        return {
          ...state,
          pricelist: state.pricelist.filter(el => el != action.payload as Position),
        }
      case FILTER_LIST:
        // eslint-disable-next-line no-case-declarations
        const str = (action.payload as string).trim().toLowerCase();
        return {
          ...state,
          pricelist: state.pricelist.map(el => {
            if (str === '' || el.work.toLowerCase().includes(str)) {
              return {...el, visibility: true};
            }
            return {...el, visibility: false};
          }),
        }
    default:
      return state;
  }
}

export default pricelistReducer;