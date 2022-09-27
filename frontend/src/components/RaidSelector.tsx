import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Typography, AppBar, Toolbar, Button, IconButton, Stack, Grid } from "@mui/material";

export default function RaidSelector() {
	return (
		<Box sx={{ mt: 4, ml: "20%", mr: "20%" }}>
			<Grid container spacing={2} columns={2} sx={{ ml: "15%", mr: "15%", alignItems: "center" }}>
				<Grid item xs={1}>
					<Button>Last Wish</Button>
				</Grid>
				<Grid item xs={1}>
					<Button>Garden of Salvation</Button>
				</Grid>
				<Grid item xs={1}>
					<Button>Deep Stone Crypt</Button>
				</Grid>
				<Grid item xs={1}>
					<Button>Vault of Glass</Button>
				</Grid>
				<Grid item xs={1}>
					<Button href="/vow">Vow of the Disciple</Button>
				</Grid>
			</Grid>
		</Box>
	);
}
