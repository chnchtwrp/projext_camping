"use client";
import { useActionState } from "react";
import { toast } from "sonner";
import { useEffect } from "react";
import { actionFunction } from "@/types/ActionFunction";
type Props = {};

const initialState = {
  message: "",
};

// อ่านเพิ่มเติม Promise,Resolve คืออะไร

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useActionState(action, initialState);
  //   console.log("FormContainer State:", state);
  useEffect(() => {
    if (state.message) {
      toast.success("", {
        description: state.message,
        duration: 4000,
        action: {
          label: "OK",
          onClick: () => {
            toast.dismiss();
          },
        },
        position: "top-right",
        richColors: true,
      });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
