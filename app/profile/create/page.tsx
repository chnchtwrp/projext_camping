import { createProfileAction } from "@/actions/actions";
import { SubmitButtons } from "@/components/Form/Buttons";
import FormContainer from "@/components/Form/FormContainer";
import FormInput from "@/components/Form/FormInput";

type Props = {};

const createProfile = (props: Props) => {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 capitalize">New User</h1>
      <div className="border px-6 py-4 rounded-lg">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="firstName"
              label="First Name"
              type="text"
              placeholder="First Name"
            />
            <FormInput
              name="lastName"
              label="Last Name"
              type="text"
              placeholder="Last Name"
            />

            <FormInput
              name="userName"
              label="User Name"
              type="text"
              placeholder="User Name"
            />
          </div>
          <SubmitButtons text="create profile" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default createProfile;
