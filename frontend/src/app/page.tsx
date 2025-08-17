"use client";


import { useState } from "react";
import Image from "next/image";
import { logo, google } from "../img/index";


export default function LoginPage() {
  const [tab, setTab] = useState<'login' | 'register' | 'forgot'>('login');
  // Login states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Register states
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  // Forgot password states
  const [forgotEmail, setForgotEmail] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        // Guarda el token en localStorage
        localStorage.setItem("token", data.token);
        alert(`Bienvenido, ${data.usuario}!`);
        // Redirige o realiza otra acción
      } else {
        alert(data.error || "Error al iniciar sesión");
      }
    } catch {
      alert("Error de conexión");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (regPassword !== regConfirm) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: regEmail, password: regPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        // Guarda el token en localStorage
        localStorage.setItem("token", data.token);
        alert(`Usuario registrado: ${data.usuario}`);
        // Aquí puedes redirigir o limpiar el formulario
      } else {
        alert(data.error || "Error al registrar");
      }
    } catch {
      alert("Error de conexión");
    }
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message || `Se envió un correo a: ${forgotEmail}`);
      } else {
        alert(data.error || "Error al enviar el correo");
      }
    } catch {
      alert("Error de conexión");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md min-h-[540px] bg-white border border-gray-200 rounded-lg shadow-lg p-8 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">
          <Image src={logo} alt="logoProyecto" width={120} height={120} />
        </div>

        {/* Social Buttons */}
        <div className="w-full flex flex-col gap-3 mb-6">
          <button className="flex items-center justify-center gap-2 w-full py-2 rounded-full border border-gray-400 text-gray-700 font-semibold hover:bg-gray-100 transition">
            <Image src={google} alt="logoGoogle" width={30} height={30} />
            Continuar con Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center w-full mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400 font-semibold">O</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Login Form */}
        {tab === 'login' && (
          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Correo electrónico o usuario</label>
              <input
                type="email"  
                placeholder="Correo electrónico o usuario"
                className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white placeholder-gray-400 text-gray-900"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white placeholder-gray-400 text-gray-900"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember" type="checkbox" className="accent-green-500 mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-700">Recuérdame</label>
              </div>
              <button type="button" className="text-xs text-green-700 hover:underline" onClick={() => setTab('forgot')}>
                ¿Olvidaste tu contraseña?
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-full font-bold hover:bg-green-600 transition"
            >
              Iniciar sesión
            </button>
          </form>
        )}

        {/* Register Form */}
        {tab === 'register' && (
          <form onSubmit={handleRegister} className="w-full flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Correo electrónico</label>
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white placeholder-gray-400 text-gray-900"
                value={regEmail}
                onChange={e => setRegEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white placeholder-gray-400 text-gray-900"
                value={regPassword}
                onChange={e => setRegPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Confirmar contraseña</label>
              <input
                type="password"
                placeholder="Confirmar contraseña"
                className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white placeholder-gray-400 text-gray-900"
                value={regConfirm}
                onChange={e => setRegConfirm(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-full font-bold hover:bg-green-700 transition"
            >
              Registrarse
            </button>
          </form>
        )}

        {/* Forgot Password Form */}
        {tab === 'forgot' && (
          <form onSubmit={handleForgot} className="w-full flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Correo electrónico</label>
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white placeholder-gray-400 text-gray-900"
                value={forgotEmail}
                onChange={e => setForgotEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-full font-bold hover:bg-green-700 transition"
            >
              Recuperar contraseña
            </button>
            <span
              className="text-sm text-green-700 hover:underline cursor-pointer text-center mt-2"
              onClick={() => setTab('login')}
            >
              ¿Recordaste tu contraseña? Iniciar sesión
            </span>
          </form>
        )}

        {/* Divider */}
        <div className="flex items-center w-full my-6">
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Switch between login/register */}
        {tab === 'login' && (
          <div className="w-full flex flex-col items-center gap-2">
            <span
              className="text-sm text-green-700 hover:underline cursor-pointer"
              onClick={() => setTab('register')}
            >
              ¿No tienes una cuenta? Regístrate gratis
            </span>
          </div>
        )}
        {tab === 'register' && (
          <div className="w-full flex flex-col items-center gap-2">
            <span
              className="text-sm text-green-700 hover:underline cursor-pointer"
              onClick={() => setTab('login')}
            >
              ¿Ya tienes una cuenta? Iniciar sesión
            </span>
          </div>
        )}
      </div>
    </section>
  );
}