const API_URL = 'http://localhost:3001/incidents';

function showOutput(data) {
  document.getElementById('output').innerText = JSON.stringify(data, null, 2);
}

function clearForm() {
  document.getElementById('formArea').innerHTML = '';
}

function showAll() {
  clearForm();
  fetch(API_URL)
    .then(res => res.json())
    .then(showOutput)
    .catch(err => showOutput({ error: err.message }));
}

function showById() {
  clearForm();
  const form = `
    <input id="idInput" placeholder="Enter ID" />
    <button onclick="fetchById()">Fetch</button>
  `;
  document.getElementById('formArea').innerHTML = form;
}

function fetchById() {
  const id = document.getElementById('idInput').value;
  fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(showOutput)
    .catch(err => showOutput({ error: err.message }));
}

function createIncident() {
  clearForm();
  const form = `
    <textarea id="incidentData" rows="6" placeholder='Enter JSON incident'></textarea><br/>
    <button onclick="submitCreate()">Submit</button>
  `;
  document.getElementById('formArea').innerHTML = form;
}

function submitCreate() {
  const data = document.getElementById('incidentData').value;
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data
  })
    .then(res => res.json())
    .then(showOutput)
    .catch(err => showOutput({ error: err.message }));
}

function deleteById() {
  clearForm();
  const form = `
    <input id="deleteId" placeholder="Enter ID to delete" />
    <button onclick="submitDelete()">Delete</button>
  `;
  document.getElementById('formArea').innerHTML = form;
}

function submitDelete() {
  const id = document.getElementById('deleteId').value;
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(showOutput)
    .catch(err => showOutput({ error: err.message }));
}

function updateById() {
  clearForm();
  const form = `
    <input id="updateId" placeholder="Enter ID to update" /><br/>
    <textarea id="updateData" rows="6" placeholder='Enter updated JSON data'></textarea><br/>
    <button onclick="submitUpdate()">Update</button>
  `;
  document.getElementById('formArea').innerHTML = form;
}

function submitUpdate() {
  const id = document.getElementById('updateId').value;
  const data = document.getElementById('updateData').value;
  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: data
  })
    .then(res => res.json())
    .then(showOutput)
    .catch(err => showOutput({ error: err.message }));
}
