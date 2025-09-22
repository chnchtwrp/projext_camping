import { Input } from "../ui/input";

type Props = {};

const Search = (props: Props) => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Search Location"
        className="max-w-lg bg-white text-center"
      />
    </div>
  );
};

export default Search;
