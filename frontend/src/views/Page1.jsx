/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Grid, Button, ButtonGroup } from "@mui/material";

function Page1() {
	const contador = useSelector((store) => store.count.count);
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container>
					<Grid item xs={12} md={6}>
						<h1>Page 2</h1>
						<h2>Contador: {contador}</h2>
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
			</Box>
		</>
	);
}

export default Page1;
