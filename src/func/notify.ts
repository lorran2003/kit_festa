import { toast } from "react-toastify"

export const notify = () => {
    const success = (msg: string) => {
        toast.success(msg,{
            position:"top-left",
            autoClose:2000,
            hideProgressBar:true,
            closeOnClick:true,
            pauseOnHover:false,
            draggable:true,
            progress:undefined,
            theme:"light"
        })
    }

    const error = (msg: string) => {
        toast.error(msg, {
            position:"top-left",
            autoClose:2000,
            hideProgressBar:true,
            closeOnClick:true,
            pauseOnHover:false,
            draggable:true,
            progress:undefined,
            theme:"light"
        })
    }

    return {success, error}
}