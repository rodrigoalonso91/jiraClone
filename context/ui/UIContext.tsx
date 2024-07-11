import { createContext } from 'react';

export interface UIContextProps {
  sidemenuOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;

  isAddingEntry: boolean;
  setIsAddingEntry: (isAdding: boolean) => void;

  startDragging: () => void;
  endDragging: () => void;
  isDragging: boolean;
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps);