import { Chip } from '@mui/material';
import { useState } from 'react';

const TagChip = ({ name, value, setValue }) => {
	const [active, setActive] = useState(value.includes(name));
	
	const handle = () => {
		setActive(!active);
		if (value.includes(name)) {
			setValue(value.filter(item => name !== item));
		} else {
			setValue([...value, name]);
		}
	};
	
	return (
		<Chip style={{ marginLeft: 0 }}
		      label={name}
		      color={active ? 'secondary' : 'default'}
		      onClick={handle}
		      variant={active ? 'filled' : 'outlined'}
		/>
	);
};

export default TagChip;