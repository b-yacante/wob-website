import { FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default async function WoBFooter() {
  return (
    <footer className="bg-dark py-6 text-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <!-- Flex Container --> */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* <!-- Sección de información de contacto --> */}
          <div className="mb-6 flex flex-col items-center md:mb-0 md:items-start">
            <h1 className="mb-4 text-lg font-semibold">Contacto</h1>
            <ul className="flex flex-col items-center space-y-2 md:items-start">
              <li>
                Email:{' '}
                <a href="mailto:info@example.com" className="hover:underline">
                  info@example.com
                </a>
              </li>
              <li>
                Teléfono:{' '}
                <a href="tel:+123456789" className="hover:underline">
                  +1 234 567 89
                </a>
              </li>
              {/* <li>Dirección: Calle Falsa 123, Ciudad, País</li> */}
            </ul>
          </div>

          {/* <!-- Sección de redes sociales --> */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Síguenos</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <FiTwitter />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FiInstagram />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Línea de separación --> */}
        <hr className="my-4 border-gray-700" />

        {/* <!-- Derechos de autor --> */}
        <div className="text-center">
          <p className="text-sm">
            &copy; 2024 WoB Sofware. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
