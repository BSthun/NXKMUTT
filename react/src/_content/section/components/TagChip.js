import { Chip } from '@mui/material';
import { useState } from 'react';

const TagChip = ({ item, setSelected }) => {
	const [active, setActive] = useState(false);
	
	const handleClick = () => {
		if (active) {
			setSelected((selected) => {
				const slugs = selected.map((el) => el.slug);
				return selected.filter((el) => !slugs.includes(el.slug));
			});
		} else {
			setSelected((selected) => [...selected, item]);
		}
		setActive(!active);
	};
	
	return (
		<Chip style={{ marginLeft: 0 }}
		      label={item.name}
		      color={active ? 'secondary' : 'default'}
		      onClick={handleClick}
		      variant={active ? 'filled' : 'outlined'}
		/>
	);
};

export default TagChip;