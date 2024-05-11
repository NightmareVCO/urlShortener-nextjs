import Link from "next/link";

interface CreditsProperties {
  className?: string;
}

const Credits = ({ className }: CreditsProperties) => {
  const currentYear = new Date().getFullYear();

  return (
    <p className={className}>
      © {currentYear}{" "}
      <Link
        className="text-blue-500 underline"
        href="https://github.com/NightmareVCO"
      >
        Vladimir Curiel
      </Link>{" "}
      &nbsp;& &nbsp;
      <Link
        className="text-blue-500 underline"
        href="https://github.com/Natashalopez05"
      >
        Natasha López
      </Link>{" "}
      &nbsp;|&nbsp;&nbsp;
      <Link
        className="text-blue-500 underline"
        href="https://www.figma.com/@mohammedhijas"
      >
        Mohi
      </Link>
    </p>
  );
};

export default Credits;
