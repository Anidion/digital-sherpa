import React from "react";
import { Stack, Box, Button, Grid, Typography } from "@mui/material";
import light from "../content/light.jpg";
import darkness from "../content/darkness.jpg";
import traveler from "../content/traveler.jpg";
import pyramid from "../content/pyramid.jpg";
import { wait } from "@testing-library/user-event/dist/utils";
import { devNull } from "os";

export default function Rhulk() {
	const [symbols] = React.useState([light, darkness, traveler, pyramid]);
	const [position] = React.useState(["R1", "R2", "L1", "L2"]);
	let [lastSymbol, setSymbol] = React.useState(-1);
	let [lastCorrect, setCorrect] = React.useState<boolean>();
	let [lastAnswer, setAnswer] = React.useState<string>();
	let [firstAnswered, setFirst] = React.useState<boolean>(false);
	let [streak, setStreak] = React.useState<number>(0);
	let [longestStreak, setLongest] = React.useState<number>(0);

	const GetRandomSymbol = () => {
		let randomSymbol: number = Math.floor(Math.random() * symbols.length);
		while (lastSymbol === randomSymbol) {
			randomSymbol = Math.floor(Math.random() * symbols.length);
		}
		setSymbol(randomSymbol);
	};

	React.useEffect(() => {
		GetRandomSymbol();
	}, []);

	const HandleClick = (buttonPressed: number) => {
		if (!firstAnswered) setFirst(true);

		setAnswer(position[buttonPressed]);

		if (buttonPressed === lastSymbol) {
			setCorrect(true);
			GetRandomSymbol();
			setStreak(streak + 1);
			if (streak + 1 > longestStreak) setLongest(streak + 1);
		} else {
			setCorrect(false);
			setStreak(0);
		}
	};

	return (
		<Stack
			sx={{
				mt: 1,
				ml: "15%",
				mr: "15%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				verticalAlign: "center",
			}}
		>
			<Typography variant="h6" color="white" textAlign={"center"} sx={{ mb: 5 }}>
				Your teammate just shot Rhulk's glaive.<br></br>You see the below symbol.<br></br>Call out where they should dunk.
			</Typography>

			<Typography variant="h6" color="white">
				Longest Streak: {longestStreak}
			</Typography>

			<Typography variant="h6" color="white">
				{firstAnswered
					? lastCorrect
						? lastAnswer + " is correct! Streak of " + streak
						: lastAnswer + " is incorrect. Streak reset :("
					: "Choose a dunk position to begin"}
			</Typography>

			<Box sx={{ mt: 3 }}>
				<img src={symbols[lastSymbol]} alt={symbols[lastSymbol]} width="196px" />

				<Grid container spacing={0.5} columns={2} sx={{ width: "200px", height: "200px", alignItems: "center" }}>
					<Grid item xs={1}>
						<Button sx={{ width: "100%", height: "100px" }} variant="contained" onClick={() => HandleClick(3)}>
							L2
						</Button>
					</Grid>
					<Grid item xs={1}>
						<Button sx={{ width: "100%", height: "100px" }} variant="contained" onClick={() => HandleClick(1)}>
							R2
						</Button>
					</Grid>
					<Grid item xs={1}>
						<Button sx={{ width: "100%", height: "100px" }} variant="contained" onClick={() => HandleClick(2)}>
							L1
						</Button>
					</Grid>
					<Grid item xs={1}>
						<Button sx={{ width: "100%", height: "100px" }} variant="contained" onClick={() => HandleClick(0)}>
							R1
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Stack>
	);
}
