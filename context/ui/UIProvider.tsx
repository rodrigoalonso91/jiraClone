import { PropsWithChildren, useReducer } from "react";
import { UIContext, uiReducer } from ".";

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false
}


export default function UIProvider({ children }: PropsWithChildren) {

  const [ state, dispatch ] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidebar  = () => dispatch({ type: 'UI_OPEN_SIDEBAR' });
  const closeSidebar = () => dispatch({ type: 'UI_CLOSE_SIDEBAR' });

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: 'UI_SET_IS_ADDING_ENTRY', payload: isAdding });
  }

  const startDragging = () => {
    dispatch({ type: 'UI_START_DRAGGING' });
  }

  const endDragging = () => {
    dispatch({ type: 'UI_END_DRAGGING' });
  }

  return (
    <UIContext.Provider value={{
      ...state, openSidebar, closeSidebar,
      setIsAddingEntry, startDragging, endDragging
      }}
    >
      {children}
    </UIContext.Provider>
  )
}