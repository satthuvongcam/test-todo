// Action creators
export const addTodo = (data) => {
	return {
		type: 'todoList/addTodo',
		payload: data,
	};
};

export const toggleTodoStatus = (todoId) => {
	return {
		type: 'todoList/toggleTodoStatus',
		payload: todoId,
	};
};

export const searchChange = (text) => {
	return {
		type: 'filters/searchChange',
		payload: text,
	};
};

export const statusChange = (status) => {
	return {
		type: 'filters/statusChange',
		payload: status,
	};
};

export const prioritiesChange = (priorities) => {
	return {
		type: 'filters/prioritiesChange',
		payload: priorities,
	};
};
