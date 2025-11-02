"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonsProps = {
  className?: string;
  size?: btnSize;
  text: string;
};

export const SubmitButtons = ({
  className,
  size,
  text,
}: SubmitButtonsProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      size={size}
      className={`${className} capitalize`}
      type="submit"
      disabled={pending}
    >
      {pending ? <LoaderCircle className="animate-spin" /> : text}
    </Button>
  );
};
