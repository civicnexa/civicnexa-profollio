"use client";

import { pxToRem } from "@/common/utils";
import { Button, styled } from "@mui/material";

export const BaseButton = styled(Button)(() => ({
  borderRadius: "4px",
  textTransform: "none",
  padding: "10px 24px",
  fontSize: pxToRem(14),
  boxShadow: "none",
  fontWeight: 500,
  border: "none",
}));
