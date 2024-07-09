import { EntriesState } from ".";

type EntriesActionType = 
| { type: '[Entries]' }

export const entriesReducer = ( state: EntriesState, action: EntriesActionType): EntriesState => {

  switch (action.type) {
    case '[Entries]':
      return {
        ...state,
      }
  
    default: return state
  }
}