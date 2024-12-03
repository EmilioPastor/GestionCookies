// Ejemplo de Cookie y JWT: https://github.com/balazsorban44/auth-poc-next
import { Login, Logout } from "@/components/forms";
import { login, logout } from "@/lib/actions";
import { getCookie } from "@/lib/cookies";
import Link from "next/link";



export default async function Page({ searchParams }) {
  const session = await getCookie('session');
  const { callbackUrl } = await searchParams


  return (
    <>
      <div className="text-4xl font-bold text-blue-300 text-center">
        <Link href="/" className="font-bold hover:underline" >
          Página principal
        </Link>
      </div>
      <div className="text-center">
        <Link href="/dashboard" className="font-bold text-blue-600 hover:underline" >
          Ir a Dashboard
        </Link>
      </div>

      <div className='mt-20 mx-auto flex flex-col gap-4 max-w-[450px]'>
        VALOR DE LA COOKIE
        <pre className="p-4 bg-slate-100 rounded-md">
          {JSON.stringify(session, null, 2)}
        </pre>
        { !session && <Login action={login} callbackUrl={callbackUrl} /> }
        { session && <Logout action={logout} /> }
      </div>
    </>
  );
}
