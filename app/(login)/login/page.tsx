import MailIcon from "@icons/mail-01.svg";

export default async function Page() {
  return (
    <div className="grid grid-cols-2">
      <div className="w-full flex flex-col justify-between p-8">
        <div className="flex gap-4">
          <img src="logo.png" className="max-h-12" alt="" />
          <div>
            <p className="text-xl font-semibold mt-[-2px]">
              Universidad Católica de Santiago del Estero
            </p>
            <p>Sistema autogestión alumnos</p>
          </div>
        </div>
        <div className="flex flex-col mx-auto w-full max-w-sm gap-8">
          <div>
            <p className="text-4xl font-semibold">Ingresar</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="">Documento</label>
              <input
                type="text"
                className="border px-[14px] py-[10px] rounded-md"
                placeholder="Ingrese su documento"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="">Contraseña</label>
              <input
                type="text"
                className="border px-[14px] py-[10px] rounded-md"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <button className="bg-blue-700 px-[14px] py-[10px] rounded-md text-white">
              Ingresar
            </button>
          </div>
          <div>
            <p>
              Olvidaste tu contaseña?{" "}
              <span className="text-blue-700 hover:underline font-semibold">
                Recuperala
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-between text-slate-600">
          <p>© UCSE 2023</p>
          <div className="flex gap-2 items-center">
            <MailIcon className="w-4 h-4" />
            <p>soporteautogestion@ucse.edu.ar</p>
          </div>
        </div>
      </div>
      <div className="h-screen w-full py-4 pr-4 max-h-screen">
        <div className="h-full w-full rounded-2xl grid grid-rows-4 truncate">
          <div className="h-full bg-cover bg-center bg-[url('/rafaela.png')] grid place-content-center">
            <p className="text-2xl text-white font-semibold">Sede Rafaela</p>
          </div>
          <div className="h-full bg-cover bg-center bg-[url('/baires.png')] grid place-content-center">
            <p className="text-2xl text-white font-semibold">
              Sede Buenos Aires
            </p>
          </div>
          <div className="h-full bg-cover bg-center bg-[url('/santiago.png')] grid place-content-center">
            <p className="text-2xl text-white font-semibold">
              Sede Santiago del Estero
            </p>
          </div>
          <div className="h-full bg-cover bg-center bg-[url('/jujuy.png')] grid place-content-center">
            <p className="text-2xl text-white font-semibold">
              Sede San Salvador de Jujuy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
