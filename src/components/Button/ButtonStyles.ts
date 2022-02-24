import { styled } from "../../stitches.config";

export const Button = styled("button", {
  borderRadius: "12px",

  textAlign: "center",
  fontWeight: "bold",
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",

  variants: {
    color: {
      primary: {
        background: "$primary",
        border: "2px solid $primary",
        color: "white",

        "&:hover": {
          background: "$primary700",
          border: "2px solid $primary700",
        },

        "&:disabled": {
          background: "$primary100",
          border: "2px solid $primary100",
          color: "$primary300",
        },
      },
      secondary: {
        background: "white",
        border: "2px solid $primary600",
        color: "$primary",

        "&:hover": {
          border: "2px solid $primary500",
          background: "$primary100",
          color: "$primary700",
        },

        "&:disabled": {
          background: "white",
          border: "2px solid $primary100",
          color: "$primary300",
        },
      },
    },
    size: {
      small: {
        fontSize: "13px",
        padding: "8px 16px",
      },
      medium: {
        fontSize: "16px",
        padding: "16px 32px",
      },
      large: {
        fontSize: "16px",
        padding: "24px 48px",
      },
    },
    fullWidth: {
      true: {
        width: "80vw",
      },
    },
  },
});

export const ButtonLoading = styled("button", {
  borderRadius: "12px",

  textAlign: "center",
  fontWeight: "bold",
  transition: "all 0.2s ease-in-out",

  variants: {
    color: {
      primary: {
        background: "$primary",
        border: "2px solid $primary",
        color: "white",
      },
      secondary: {
        background: "white",
        border: "2px solid $primary600",
        color: "$primary",
      },
    },
    size: {
      small: {
        padding: "8px 20px",
      },
      medium: {
        padding: "12px 20px",
      },
      large: {
        padding: "20px 50px",
      },
    },
    fullWidth: {
      true: {
        width: "80vw",
      },
    },
  },
});
