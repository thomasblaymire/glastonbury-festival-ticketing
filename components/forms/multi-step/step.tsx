import { Button } from "@chakra-ui/react";

export const Step = ({
  form: FormComponent,
  onNext,
  onPrev,
  onSubmit,
}: {
  form: React.ComponentType;
  onNext?: () => void;
  onPrev?: () => void;
  onSubmit?: () => void;
}) => (
  <>
    <FormComponent />
    {onPrev && (
      <Button
        onClick={onPrev}
        colorScheme="teal"
        variant="solid"
        w="7rem"
        mr="5%"
      >
        Back
      </Button>
    )}
    {onNext && (
      <Button onClick={onNext} colorScheme="teal" variant="outline" w="7rem">
        Next
      </Button>
    )}
    {onSubmit && (
      <Button w="7rem" colorScheme="red" variant="solid" onClick={onSubmit}>
        Submit
      </Button>
    )}
  </>
);
