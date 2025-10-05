const OPEN_TASK8_MODAL = 'task8Modal/OPEN';
const CLOSE_TASK8_MODAL = 'task8Modal/CLOSE';

const initialState = { isOpen: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_TASK8_MODAL:
      return { ...state, isOpen: true };
    case CLOSE_TASK8_MODAL:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export default reducer;

export const openTask8Modal = () => ({ type: OPEN_TASK8_MODAL });
export const closeTask8Modal = () => ({ type: CLOSE_TASK8_MODAL });
