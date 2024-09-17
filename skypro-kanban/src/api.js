const baseHost = "https://wedev-api.sky.pro/api";

//const userHost = "https://wedev-api.sky.pro/api/user";

// Получить список задач
export async function getTodos(token) {
    const response = await fetch(baseHost + "/kanban", {method:"GET", headers:{Authorization: `Bearer ${token}`}});
    const data = await response.json();
    return data.tasks
}

export async function auth({login, password}) {
    const response = await fetch(baseHost + "/user/login", {method:"POST", body: JSON.stringify({
    login, password})});
    const data = await response.json();
    return data.user
}