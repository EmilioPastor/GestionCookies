import { getCookie } from "@/lib/cookies";
import { Logout } from "@/components/forms";
import { logout } from "@/lib/actions";
import Link from "next/link";


async function AcercaPage() {    
    const session = await getCookie('session');

    return (
        <>
            <div className="text-4xl font-bold text-blue-300 text-center">
                <Link href="/acerca" className="font-bold hover:underline" >
                    Acerca de ...
                </Link>
            </div>
            <div className="text-center">
                <Link href="/" className="font-bold  text-blue-600 hover:underline" >
                    Ir a Página principal
                </Link>
            </div>

            <div className='mt-20 mx-auto flex flex-col gap-4 max-w-[450px]'>
                VALOR DE LA COOKIE
                <pre className="p-4 bg-slate-100 rounded-md">
                    {JSON.stringify(session, null, 2)}
                </pre>
                { session && <Logout action={logout} /> }
            </div>
        </>

    );
}

export default AcercaPage;