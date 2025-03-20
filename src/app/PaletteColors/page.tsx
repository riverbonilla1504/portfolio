export default function PaletteColors() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen bg-accent-foreground ">
      <h1 className="text-5xl font-poppins font-bold text-foreground mb-8">River Alejandro Bonilla Florez</h1>
      <section className="flex flex-row items-center justify-center w-240 h-100 rounded-3xl shadow-lg p-4 bg-white">
        <section className="flex flex-col items-center justify-center w-60 h-72">
          <figure className="shadow-lg bg-background size-50 rounded-3xl border border-border ring-2 ring-ring shadow-accent animate-wiggle">
          </figure>
          <h1 className="font-poppins text-xl text-primary mt-2  p-1 mb-1 font-semibold">background</h1>
        </section>
        <section className="flex flex-col items-center justify-center w-60 h-72">
          <figure className="shadow-lg  bg-secondary size-50 rounded-3xl flex shadow-primary-hover items-center justify-center border-2 border-border">
          </figure>
          <h1 className="font-poppins text-xl text-primary mt-2 p-1 mb-1 font-semibold">secondary</h1>
        </section>
        <section className="flex flex-col items-center justify-center w-60 h-72">   
          <figure className="shadow-lg bg-accent size-50 rounded-3xl shadow-border">
          </figure>
          <h1 className="font-poppins text-xl text-primary mt-2 p-1 mb-1 font-semibold">accent</h1>
        </section>
        <section className="flex flex-col items-center justify-center w-60 h-72"> 
          <figure className=" size-50 bg-primary rounded-3xl shadow-lg shadow-input">
          </figure> 
          <h1 className="font-poppins text-xl text-primary mt-2 p-1 mb-1 font-semibold  ">primary</h1>
        </section>
      </section>
    </main>
  );
}
