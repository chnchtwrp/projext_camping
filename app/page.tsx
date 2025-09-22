import { Button } from "@/components/ui/button";

type Props = {};

const homePage = (props: Props) => {
  return (
    <div>
      Home Page
      <Button variant={"outline"} size={"lg"} className="bg-primary">
        Hello Home Page
      </Button>
    </div>
  );
};

export default homePage;
