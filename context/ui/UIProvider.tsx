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

  return (
    <UIContext.Provider value={{
      sidemenuOpen: false
    }}>
      {children}
    </UIContext.Provider>
  )
}