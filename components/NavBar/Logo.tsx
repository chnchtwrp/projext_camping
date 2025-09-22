import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href={"/"} className="font-bold text-2xl">
      Logo
    </Link>
  );
};

export default Logo;
