import axios from "axios";

const todosApi = axios.create({
    baseURL: "http://localhost:3500"
})

export const getTodos = async () => {
    const response = await todosApi.get("/todos");
    return response.data
}

export const addTodo = async (todo) => {
    return await todosApi.post("/todos", todo);
}

export const updateTodo = async ({id}) => {
    return await todosApi.patch(`/todos/${id}`, id);
}

export default todosApi;

export const deleteTodo = async (todo) => {
    return await todosApi.delete(`/todos/${todo.id}`, todo);
}