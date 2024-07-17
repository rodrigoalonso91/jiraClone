import { PropsWithChildren, useEffect, useReducer } from "react";
import { EntriesContext, entriesReducer } from ".";
import type { Entry } from "@/types";
import { entriesApi } from "@/apis";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: []
}

export default function EntriesProvider({ children }: PropsWithChildren) {

  const [ state, dispatch ] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addEntry = async ( description: string ) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description });
    dispatch({ type: '[Entry] Add Entry', payload: data })
  }

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] Update Entry', payload: entry })
  }

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: '[Entry] Refresh Entries', payload: data })
  }

  useEffect(() => {
    refreshEntries();
  }, [])


  return (
    <EntriesContext.Provider value={{
      ...state,
      addEntry,
      updateEntry
    }}>
      {children}
    </EntriesContext.Provider>
  )
}