import React from "react";
import { Box, Typography, AppBar, Toolbar, Button, IconButton, Stack, Grid } from "@mui/material";

export default function Vow() {
    return (
        <Box sx={{ mt: 4, ml: "20%", mr: "20%", flexGrow: 1}}>
			<Grid container spacing={2} columns={2} sx={{ ml: "15%", mr: "15%", alignItems: "center" }}>
				<Grid item xs={1}>
					<Button href="/vow/rhulk">Rhulk</Button>
				</Grid>
			</Grid>
		</Box>
    )
}