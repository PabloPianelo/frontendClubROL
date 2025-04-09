import React from 'react';

const ErrorBibliotecaPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-center p-6">
            <div className="space-y-6">
                <h1 className="text-5xl font-bold animate__animated animate__bounce">¡No puedes pasar! 🚫</h1>
                <img 
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjdnNHlmdzEzN2Fibm04czA0cjN0dzVjMjBzYjUybGk2bnQ2YjQ3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/njYrp176NQsHS/giphy.gif" 
                    alt="No Puedes Pasar"
                    className="max-w-full h-auto rounded-xl shadow-2xl animate__animated animate__fadeIn"
                />
                <p className="text-xl font-semibold mt-4">¡Parece que necesitas permiso para entrar! 🚪</p>
            </div>
        </div>
    );
};

export default ErrorBibliotecaPage;
