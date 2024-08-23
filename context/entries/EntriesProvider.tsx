import { PropsWithChildren, useEffect, useReducer } from "react";
import { EntriesContext, entriesReducer } from ".";
import type { Entry } from "@/types";
import { entriesApi } from "@/apis";
import { useSnackbar } from "notistack";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: []
}

export default function EntriesProvider({ children }: PropsWithChildren) {

  const [ state, dispatch ] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();

  const addEntry = async ( description: string ) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description });
    dispatch({ type: '[Entry] Add Entry', payload: data })
  }

  const updateEntry = async ({ _id, description, status }: Entry, showSnackbar = false) => {

    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });
      dispatch({ type: '[Entry] Update Entry', payload: data })

      if (showSnackbar) {
        enqueueSnackbar('Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    }
    catch (error: any) {
      console.log(error);
    }
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