

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen bg-accent-foreground dark">
      <h1 className="text-3xl font-poppins font-bold text-foreground mb-8">Paleta de colores</h1>
      <section className="flex flex-row items-center justify-center w-120 rounded-lg shadow-lg gap-6 p-8 bg-white">
        <section className="flex flex-col items-center justify-center rounded-lg w-24 h-32">
          <figure className="shadow-lg bg-background w-24 h-24 rounded-xl border border-border ring-2 ring-ring shadow-accent">
          </figure>
          <h1 className="font-poppins text-xs text-primary mt-2  rounded-xl p-1 mb-1 font-semibold">background</h1>
        </section>
        <section className="flex flex-col items-center justify-center rounded-lg w-24 h-32">
          <figure className="shadow-lg  bg-secondary w-24 h-24 rounded-xl flex shadow-primary-hover items-center justify-center border-2 border-border">
          </figure>
          <h1 className="font-poppins text-xs text-primary mt-2  rounded-xl p-1 mb-1 font-semibold">secondary</h1>
        </section>
        <section className="flex flex-col items-center justify-center rounded-lg w-24 h-32">   
          <figure className="shadow-lg bg-accent w-24 h-24 rounded-xl shadow-border">
          </figure>
          <h1 className="font-poppins text-xs text-primary mt-2 rounded-xl p-1 mb-1 font-semibold">accent</h1>
        </section>
        <section className="flex flex-col items-center justify-center rounded-lg w-24 h-32 "> 
          <figure className=" w-24 h-24 bg-primary rounded-xl shadow-lg shadow-input">
          </figure>
          <h1 className="font-poppins text-xs text-primary mt-2 rounded-xl p-1 mb-1 font-semibold  ">primary</h1>
        </section>
      </section>

      
    </main>
  );
}