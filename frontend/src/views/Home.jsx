/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment_count, decrement_count } from "../redux/count";
import { Box, Grid, Button, ButtonGroup, TextField } from "@mui/material";

function Home() {
	const dispatch = useDispatch();
	const contador = useSelector((store) => store.count.count);
	const [modify, setModify] = React.useState(0);

	const increse = () => {
		modify === 0
			? dispatch(increment_count(1))
			: dispatch(increment_count(parseInt(modify)));
	};
	const decrese = () => {
		modify === 0
			? dispatch(decrement_count(1))
			: dispatch(decrement_count(parseInt(modify)));
	};
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container>
					<Grid item xs={12} md={6}>
						<h1>Page 1</h1>
						<h1>{contador}</h1>
						<Grid container>
							<Grid item xs={12}>
								<TextField
									id="outlined-name"
									label="Value to + o -"
									type="number"
									value={modify}
									onChange={(e) => {
										setModify(e.target.value);
									}}
								/>
							</Grid>
							<Grid item xs={12}>
								<ButtonGroup
									variant="contained"
									aria-label="outlined primary button group"
									sx={{ marginTop: 2 }}
								>
									<Button onClick={increse}>Increse</Button>
									<Button onClick={decrese}>Decrese</Button>
								</ButtonGroup>
							</Grid>
							<Grid item xs={12}>
								<ButtonGroup
									variant="contained"
									aria-label="outlined primary button group"
									sx={{ marginTop: 2 }}
								>
									<Button component={RouterLink} to="/">
										Home
									</Button>
									<Button component={RouterLink} to="/page1">
										Page1
									</Button>
								</ButtonGroup>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={6}></Grid>
				</Grid>
			</Box>
		</>
	);
}

export default Home;
