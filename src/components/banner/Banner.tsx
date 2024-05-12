const Banner = () => {
  return (
    <div className="fixed top-0 left-0 z-10 w-screen h-12">
      <div className="flex items-center justify-center size-full">
        <p className="text-center text-pretty">
          <span className="hidden sm:inline-flex animate-background-shine bg-[linear-gradient(110deg,#144EE3,45%,#1e293b,55%,#EB568E)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">
            {"  This web is a live demo. It is not intended to be used."}
          </span>
          <span className="inline-flex sm:hidden animate-background-shine bg-[linear-gradient(110deg,#144EE3,45%,#1e293b,55%,#EB568E)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">
            This web is a live demo.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
