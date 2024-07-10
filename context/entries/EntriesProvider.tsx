import { PropsWithChildren, useReducer } from "react";
import { EntriesContext, entriesReducer } from ".";
import type { Entry } from "@/types";
import { uuid } from "@/plugins";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuid(),
      description: 'Pendiente: Planificar un proyecto de OpenJira',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      _id: uuid(),
      description: 'En progreso: Hacer las pruebas de OpenJira',
      status: 'in-progress',
      createdAt: Date.now()
    },
    {
      _id: uuid(),
      description: 'Terminada: Corregir bugs de OpenJira',
      status: 'finished',
      createdAt: Date.now()
    },
  ]
}

export default function EntriesProvider({ children }: PropsWithChildren) {

  const [ state, dispatch ] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{
      ...state,
    }}>
      {children}
    </EntriesContext.Provider>
  )
}