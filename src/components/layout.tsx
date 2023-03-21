import { Padding } from "@mui/icons-material";
import { Box, CssBaseline, Paper } from "@mui/material";
import React from "react";
import { PropsWithChildren } from "react";
import LabelBottomNavigation from "./bottom_navbar";
import TopNavigation from "./top_navbar";

export default function Layout({ children }: PropsWithChildren) {

  return (
    <Box sx={{ pb: 7 }} >
      <CssBaseline />
      <TopNavigation />
      <main style={{ padding: "0px 10px" }}>{children}</main>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <LabelBottomNavigation />
      </Paper>
    </Box >
  )
}