import { Grid } from './components/Grid';
import { Flex } from './components/Flex';
import { Form } from './components/Form';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Menú de Navegación / Índice */}
      <nav className="bg-blue-600 text-white py-4 px-6 shadow-md mb-8">
        <h1 className="text-2xl font-bold text-center mb-2">Portafolio de Componentes Tailwind</h1>
        <div className="flex justify-center gap-6 text-sm font-semibold">
          <a href="#app-section" className="hover:underline">App Principal</a>
          <a href="#flex-section" className="hover:underline">Flex Component</a>
          <a href="#grid-section" className="hover:underline">Grid Component</a>
          <a href="#form-section" className="hover:underline">Form Component</a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto space-y-12 px-4">
        {/* Sección App / Contenedor */}
        <section id="app-section" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-700 mb-4 border-b pb-2">1. Vista General (App)</h2>
          <div className="text-center">
            <button className="bg-sky-700 px-4 py-2 rounded text-white hover:bg-sky-900 cursor-pointer">
              Enviar
            </button>
          </div>
          <div className="border w-1/2 my-5 mx-auto text-center bg-gray-300 rounded p-2 text-gray-700">
            Este es un contenedor
          </div>
        </section>

        {/* Sección Flex */}
        <section id="flex-section" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-700 mb-4 border-b pb-2">2. Componente Flex</h2>
          <Flex />
        </section>

        {/* Sección Grid */}
        <section id="grid-section" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-700 mb-4 border-b pb-2">3. Componente Grid (Responsive con Burbujas)</h2>
          <Grid />
        </section>

        {/* Sección Form */}
        <section id="form-section" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-700 mb-4 border-b pb-2">4. Componente Formulario</h2>
          <Form />
        </section>
      </main>
    </div>
  );
}

export default App;
