// Fetch all users
fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => {
    console.log('Users:', data);
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML += '<h2>Users:</h2>';
    data.forEach(user => {
      contentDiv.innerHTML += `<p>${user.name} - ${user.email}</p>`;
    });
  })
  .catch(error => console.error('Error fetching users:', error));

// Fetch all tasks
fetch('http://localhost:3000/tasks')
  .then(response => response.json())
  .then(data => {
    console.log('Tasks:', data);
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML += '<h2>Tasks:</h2>';
    data.forEach(task => {
      contentDiv.innerHTML += `<p>${task.title} - ${task.description}</p>`;
    });
  })
  .catch(error => console.error('Error fetching tasks:', error));

// Handle form submission
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o comportamento padrão do formulário

  const title = document.getElementById('taskTitle').value;
  const description = document.getElementById('taskDescription').value;

  fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(task => {
    console.log('Task created:', task);
    // Atualiza a lista de tarefas
    document.getElementById('content').innerHTML += `<p>${task.title} - ${task.description}</p>`;
    taskForm.reset(); // Limpa o formulário
  })
  .catch(error => console.error('Error creating task:', error));
});
