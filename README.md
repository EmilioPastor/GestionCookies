# Uso de cookies

**Aplicación de ejemplo de uso de cookies y gestión de sesión**

Se hace uso de **NextJS 15**.

```js
// A partir de NextJS 15, el acceso a cookies es asíncrono

import { cookies } from 'next/headers'
 
export default async function Page() {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')
  return '...'
}
```