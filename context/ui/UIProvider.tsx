import { PropsWithChildren, useReducer } from "react";
import { UIContext, uiReducer } from ".";

export interface UIState {
  sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false
}


export default function UIProvider({ children }: PropsWithChildren) {

  const [ state, dispatch ] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidebar  = () => dispatch({ type: 'UI_OPEN_SIDEBAR' });
  const closeSidebar = () => dispatch({ type: 'UI_CLOSE_SIDEBAR' });

  return (
    <UIContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </UIContext.Provider>
  )
}