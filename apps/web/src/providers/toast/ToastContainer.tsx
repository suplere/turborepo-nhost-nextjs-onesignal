import Toast from './Toast'
import { useToastStateContext } from '../ToastContext'
import ToastTailwind from './ToastTailwind'

export default function ToastContainer() {
  const { toasts } = useToastStateContext()

  return (
    <div className="fixed bottom-10 z-50 w-full">
      <div className="mx-auto max-w-xl">
        {toasts &&
          toasts.map((toast) => (
            <ToastTailwind
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
            />
          ))}
      </div>
    </div>
  )
}
