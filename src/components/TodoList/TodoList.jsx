import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo } from '../../Redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { todosRemaining } from '../../Redux/selectors';

export default function TodoList() {
	const [todoName, setTodoName] = useState('');
	const [priority, setPriority] = useState('Medium');

	const dispatch = useDispatch();

	const todoList = useSelector(todosRemaining);
	console.log(todoList);
	const handleInputChange = (e) => {
		setTodoName(e.target.value);
	};

	const handleAddTodo = () => {
		dispatch(
			addTodo({
				id: uuidv4(),
				name: todoName,
				priority: priority,
				completed: false,
			}),
		);
		setTodoName('');
		setPriority('Medium');
	};

	const handlePriorityChange = (value) => {
		console.log(value);
		setPriority(value);
	};

	return (
		<Row style={{ height: 'calc(100% - 40px)' }}>
			<Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
				{todoList.map((todo) => (
					<Todo
						key={todo.id}
						id={todo.id}
						name={todo.name}
						prioriry={todo.priority}
						completed={todo.completed}
					/>
				))}
			</Col>
			<Col span={24}>
				<Input.Group style={{ display: 'flex' }} compact>
					<Input value={todoName} onChange={handleInputChange} />
					<Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
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
					<Button type="primary" onClick={handleAddTodo}>
						Add
					</Button>
				</Input.Group>
			</Col>
		</Row>
	);
}
