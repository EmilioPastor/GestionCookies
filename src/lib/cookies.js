import { cookies } from "next/headers";

const EXPIRE_TIME = 10 * 1000 // ms


export async function getCookie(name) {
  const cookieStore = await cookies()      // IMPORTANTE: await cookies(), a partir de NextJS 15
  const session = cookieStore.get(name)?.value;

  if (!session) return null;
  return await JSON.parse(session);
}



export async function setCookie(name, value) {
  const expires = new Date(Date.now() + EXPIRE_TIME)
  const cookieStore = await cookies()
 
  cookieStore.set({
    name: name,
    value: JSON.stringify({ ...value, expires }),
    expires,
    httpOnly: true,
  })
}


// Devolvemos cookie con nuevo tiempo de expiración
export function updateCookie(name, value) {
  const expires = new Date(Date.now() + EXPIRE_TIME)

  return {
    name: name,
    value: JSON.stringify({ ...value, expires }),
    expires,
    httpOnly: true,
  }
}


export async function deleteCookie(name) {
  const cookieStore = await cookies()
 
  cookieStore.set({
    name,
    value: "",
    maxAge: 0,
    httpOnly: true
  });
}
