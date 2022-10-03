import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { prioritiesChange, searchChange, statusChange } from '../../Redux/actions';

const { Search } = Input;

export default function Filters() {
	const [searchText, setSearchText] = useState('');
	const [filtersStatus, setFiltersStatus] = useState('All');
	const [filterPriorities, setFilterPriorities] = useState([]);

	const dispatch = useDispatch();

	const handleSearchChange = (e) => {
		setSearchText(e.target.value);
		dispatch(searchChange(e.target.value));
	};

	const handleStatusChange = (e) => {
		setFiltersStatus(e.target.value);
		dispatch(statusChange(e.target.value));
	};

	const handlePrioritiesChange = (value) => {
		setFilterPriorities(value);
		dispatch(prioritiesChange(value));
	};

	return (
		<Row justify="center">
			<Col span={24}>
				<Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
					Search
				</Typography.Paragraph>
				<Search placeholder="Input search text" value={searchText} onChange={handleSearchChange} />
			</Col>

			<Col sm={24}>
				<Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
					Filter By Status
				</Typography.Paragraph>
				<Radio.Group value={filtersStatus} onChange={handleStatusChange}>
					<Radio value="All">All</Radio>
					<Radio value="Completed">Completed</Radio>
					<Radio value="Todo">To do</Radio>
				</Radio.Group>
			</Col>

			<Col sm={24}>
				<Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
					Filter By Priority
				</Typography.Paragraph>
				<Select
					mode="multiple"
					allowClear
					placeholder="Please select"
					style={{ width: '100%' }}
					value={filterPriorities}
					onChange={handlePrioritiesChange}
				>
					<Select.Option value="High" label="High">
						<Tag color="red">High</Tag>
					</Select.Option>
					<Select.Option value="Medium" label="Medium">
						<Tag color="blue">Medium</Tag>
					</Select.Option>
					<Select.Option value="Low" label="Low">
						<Tag color="gray">Low</Tag>
					</Select.Option>
				</Select>
			</Col>
		</Row>
	);
}
