const API_URL = 'http://localhost:3001/incidents';

function showOutput(data) {
  const container = document.getElementById('output');
  container.innerHTML = ''; // Clear previous content

  // Normalize data structure
  const incidents = Array.isArray(data.data) ? data.data : [data.data];

  incidents.forEach(incident => {
    const card = document.createElement('div');
    card.className = 'incident-card';

    const reportedAt = incident.reportedAt
      ? new Date(incident.reportedAt).toLocaleString()
      : new Date(parseInt(incident._id?.substring(0, 8), 16) * 1000).toLocaleString();

    card.innerHTML = `
      <h3>${incident.title || 'No Title'}</h3>
      <p><strong>ID:</strong> ${incident.id || 'N/A'}</p>
      <p><strong>Description:</strong> ${incident.description || 'No description'}</p>
      <p><strong>Severity:</strong> ${incident.severity || 'Unknown'}</p>
      <p><strong>Reported At:</strong> ${reportedAt}</p>
    `;

    container.appendChild(card);
  });
}

function clearForm() {
  document.getElementById('formArea').innerHTML = '';
}

function showAll() {
  clearForm();
  fetch(API_URL)
    .then(res => res.json())
    .then(showOutput)
    .catch(err => showOutput({ data: [{ title: 'Error', description: err.message }] }));
}

function showById() {
  clearForm();
  document.getElementById('formArea').innerHTML = `
    <input id="idInput" placeholder="Enter ID" />
    <button onclick="fetchById()">Fetch</button>
  `;
}

function fetchById() {
  const id = document.getElementById('idInput').value;
  fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(showOutput)
    .catch(err => showOutput({ data: [{ title: 'Error', description: err.message }] }));
}

function createIncident() {
  clearForm();
  document.getElementById('formArea').innerHTML = `
    <textarea id="incidentData" rows="6" placeholder='Enter JSON incident'></textarea><br/>
    <button onclick="submitCreate()">Submit</button>
  `;
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
    .catch(err => showOutput({ data: [{ title: 'Error', description: err.message }] }));
}

function deleteById() {
  clearForm();
  document.getElementById('formArea').innerHTML = `
    <input id="deleteId" placeholder="Enter ID to delete" />
    <button onclick="submitDelete()">Delete</button>
  `;
}

function submitDelete() {
  const id = document.getElementById('deleteId').value;
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(showOutput)
    .catch(err => showOutput({ data: [{ title: 'Error', description: err.message }] }));
}

function updateById() {
  clearForm();
  document.getElementById('formArea').innerHTML = `
    <input id="updateId" placeholder="Enter ID to update" /><br/>
    <textarea id="updateData" rows="6" placeholder='Enter updated JSON data'></textarea><br/>
    <button onclick="submitUpdate()">Update</button>
  `;
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
    .catch(err => showOutput({ data: [{ title: 'Error', description: err.message }] }));
}
