export default function ContactForm() {
  return (
    <form>
      <div className="space-y-12 sm:min-w-[600px]">
        <div className="rounded-md backdrop-blur-sm bg-slate-400/15 p-6 border-[.5px] border-slate-200/15 pb-12">
          <h2 className="text-base font-semibold leading-7">Informacion de contacto</h2>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                Nombre
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="text-indigo-950 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6">
                Apellido
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  placeholder="job@mail.com"
                  className="text-indigo-950 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6">
                Email
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-indigo-950 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="company" className="block text-sm font-medium leading-6">
                Organizacion
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="text-indigo-950 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="site" className="block text-sm font-medium leading-6">
                Pagina web
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="site"
                  id="site"
                  className="text-indigo-950 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div> */}

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6">
                Comentarios
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="text-indigo-950 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-600 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">Todo comentario sera bienvenido.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6">
          Limpiar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}