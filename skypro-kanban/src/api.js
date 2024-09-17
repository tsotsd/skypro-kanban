const baseHost = "https://wedev-api.sky.pro/api/kanban";

//const userHost = "https://wedev-api.sky.pro/api/user";

// Получить список задач
export async function getTodos() {
    const response = await fetch(baseHost);
    const data = await response.json();
    return data
}