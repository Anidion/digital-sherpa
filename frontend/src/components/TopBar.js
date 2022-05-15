import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Typography, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function TopBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" align="center" sx={{ flexGrow: 1 }}>
						Digital Sherpa
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
