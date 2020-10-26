import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {makeStyles} from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

function SelectField(props) {
	const classes = useStyles();
	const {input, label, variant, options, fullWidth} = props

	return (
		<div className={classes.wrapper}>
			<FormControl variant="outlined" fullWidth={fullWidth} className={classes.formControl}>
				<InputLabel id={label}>{label}</InputLabel>
				<Select
					{...input}
					label={label}
					variant={variant}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{options.map(option => {
						return (
							<MenuItem value={option.value}>
								{option.value}
							</MenuItem>
						)
					})}
					<MenuItem value={10}>Ten</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

export default SelectField;