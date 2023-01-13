import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from 'react'
import { ToastProps } from './toast/Toast'

export enum ToastActionKind {
  ADD_TOAST = 'ADD_TOAST',
  DELETE_TOAST = 'DELETE_TOAST',
}

const ToastStateContext = createContext<ToastState>({ toasts: [] })
const ToastDispatchContext = createContext<Dispatch<ToastAction> | null>(null)

// An interface for our actions
interface ToastAction {
  type: ToastActionKind
  toast?: ToastProps
  id?: string
}

// An interface for our state
interface ToastState {
  toasts: ToastProps[]
}

function ToastReducer(state: ToastState, action: ToastAction): ToastState {
  const { type, toast, id } = action
  switch (type) {
    case ToastActionKind.ADD_TOAST: {
      return {
        ...state,
        toasts: [...state.toasts, toast as ToastProps],
      }
    }
    case ToastActionKind.DELETE_TOAST: {
      const updatedToasts = state.toasts.filter((e) => e.id != id)
      return {
        ...state,
        toasts: updatedToasts,
      }
    }
    default: {
      throw new Error('unhandled action')
    }
  }
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(ToastReducer, {
    toasts: [],
  })

  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  )
}

export const useToastStateContext = () => useContext(ToastStateContext)
export const useToastDispatchContext = () => useContext(ToastDispatchContext)
