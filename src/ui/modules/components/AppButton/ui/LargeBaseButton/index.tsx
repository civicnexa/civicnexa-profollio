"use client";

import { pxToRem } from "@/common/utils";
import { Button, styled } from "@mui/material";

export const LargeBaseButton = styled(Button)(() => ({
  borderRadius: "4px",
  textTransform: "none",
  padding: "14px 32px",
  fontSize: pxToRem(16),
  boxShadow: "none",
  fontWeight: 600,
  border: "none",
}));
