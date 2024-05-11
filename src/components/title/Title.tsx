type AnimatedTitleProperties = {
  children: React.ReactNode;
};

const AnimatedTitle = ({ children }: AnimatedTitleProperties) => {
  return (
    <h1 className="text-5xl font-bold inline-flex animate-text-gradient bg-gradient-to-r from-main-blue via-main-pink to-main-blue bg-[200%_auto] bg-clip-text text-transparent">
      {children}
    </h1>
  );
};

export default AnimatedTitle;
