import { createContext } from 'react';

export interface UIContextProps {
  sidemenuOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps);