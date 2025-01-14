import type { Entry } from '@/types';
import { createContext } from 'react';

export interface EntriesContextProps {
  entries: Entry[]
  addEntry: (description: string) => void
  updateEntry: (entry: Entry, showSnackbar?: boolean) => void
}

export const EntriesContext = createContext<EntriesContextProps>({} as EntriesContextProps);