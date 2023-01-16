import { ToastActionKind, useToastDispatchContext } from '../../ToastContext'
import { ToastType } from '../Toast'

export function useToast(delay: number = 2000) {
  const dispatch = useToastDispatchContext()

  function toast(type: ToastType, message: string) {
    if (dispatch) {
      const id = Math.random().toString(36).substr(2, 9)
      dispatch({
        type: ToastActionKind.ADD_TOAST,
        toast: {
          type,
          message,
          id,
        },
      })

      setTimeout(() => {
        dispatch({ type: ToastActionKind.DELETE_TOAST, id })
      }, delay)
    }
  }

  return toast
}
