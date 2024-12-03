import { LogIn, LogOut } from "lucide-react";


export function Login({ action, callbackUrl }) {

    return (
        <form action={action} className="flex flex-col gap-4">
            <input type='hidden' name='callbackUrl' defaultValue={callbackUrl} />
            <input name="name" placeholder="Nombre"
                className="p-2 rounded-md ring-1 ring-slate-300 hover:ring-blue-300 focus:outline-none" />
            <input name="email" placeholder="Email"
                className="p-2 rounded-md ring-1 ring-slate-300 hover:ring-blue-300 focus:outline-none" />
            <button type="submit"
                className="px-4 py-2 bg-blue-100 hover:bg-blue-200 ring-1 ring-slate-300 hover:ring-blue-300 rounded-lg text-center">
                <LogIn className="inline p-1"/> Login
            </button>
        </form>
    )
}

export function Logout({ action }) {
 
    return (
        <form action={action} className="flex flex-col gap-4">
            <button type="submit"
                className="px-4 py-2 bg-blue-100 hover:bg-blue-200 ring-1 ring-slate-300 hover:ring-blue-300 rounded-lg text-center">
                <LogOut className="inline p-1"/> Logout
            </button>
        </form>
    )
}

