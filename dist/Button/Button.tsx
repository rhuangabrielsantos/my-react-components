import React from "react";
import Lottie from "react-lottie";

import { Button, ButtonLoading } from "./ButtonStyles";

import animationData from "./loading_animation.json";

export interface ButtonProps {
  label: string;
  color: "primary" | "secondary";
  size: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export function ButtonComponent({ label, loading, ...props }: ButtonProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lottieSize = {
    height: ["large", "medium"].includes(props.size) ? 26 : 15,
    width: ["large", "medium"].includes(props.size) ? 46 : 30,
  };

  return loading ? (
    <ButtonLoading {...props}>
      <Lottie
        options={defaultOptions}
        height={lottieSize.height}
        width={lottieSize.width}
        isStopped={loading}
        isPaused={loading}
        isClickToPauseDisabled={true}
      />
    </ButtonLoading>
  ) : (
    <Button {...props}>{label}</Button>
  );
}
