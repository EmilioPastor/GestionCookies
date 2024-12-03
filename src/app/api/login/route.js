import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Manejar solicitud POST en la ruta
export async function POST(req) {
    try {
        // Parsear el cuerpo de la solicitud
        const { email, password } = await req.json();

        // Leer el archivo users.json
        const filePath = path.join(process.cwd(), 'lib', 'users.json');
        const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        // Buscar el usuario por email y password
        const user = users.find((u) => u.email === email && u.password === password);

        if (!user) {
            // Respuesta si el usuario no se encuentra o la contraseña es incorrecta
            return NextResponse.json({ message: 'Usuario o contraseña incorrectos' }, { status: 401 });
        }

        // Crear una cookie de sesión (usamos base64 para codificar el email)
        const token = Buffer.from(email).toString('base64');
        const response = NextResponse.json({ message: 'Inicio de sesión exitoso', user: { name: user.name, email: user.email } });

        // Configurar la cookie en la respuesta
        response.cookies.set('session', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Solo en HTTPS en producción
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 1 día
            path: '/',
        });

        return response;
    } catch (error) {
        // Manejo de errores generales
        return NextResponse.json({ message: 'Error en el servidor' }, { status: 500 });
    }
}
