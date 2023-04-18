import React, { useState } from "react";
import { Box, Progress, useToast } from "@chakra-ui/react";
import { TicketsForm } from "./tickets";
import { PersonalDetailsForm } from "./details";
import { AccountForm } from "./account";
import { Step } from "./step";

export const RegistrationForm = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);

  const handleSubmit = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const stepComponents = [
    <Step key={1} form={AccountForm} onNext={() => setStep(2)} />,
    <Step
      key={2}
      form={PersonalDetailsForm}
      onNext={() => setStep(3)}
      onPrev={() => setStep(1)}
    />,
    <Step
      key={3}
      form={TicketsForm}
      onPrev={() => setStep(2)}
      onSubmit={handleSubmit}
    />,
  ];

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={(step / 3) * 100}
          mb="5%"
          mx="5%"
          isAnimated
        />
        {stepComponents[step - 1]}
      </Box>
    </>
  );
};
