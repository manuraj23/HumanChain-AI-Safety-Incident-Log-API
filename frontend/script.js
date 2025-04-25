const API_URL = 'http://localhost:3001/incidents';

function showOutput(data) {
  const container = document.getElementById('output');
  container.innerHTML = '';

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

// Show All Incidents
function showAll() {
  clearForm();
  fetch(API_URL)
    .then(res => res.json())
    .then(showOutput)
    .catch(err => showOutput({ data: [{ title: 'Error', description: err.message }] }));
}

// Get Incident by ID
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

// Create Incident Form
function createIncident() {
  clearForm();
  document.getElementById('formArea').innerHTML = `
    <h3>Create Incident</h3>
    <input id="title" placeholder="Title" /><br/>
    <textarea id="description" rows="4" placeholder="Description"></textarea><br/>
    <select id="severity">
      <option value="">Select Severity</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select><br/>
    <button onclick="submitCreate()">Submit</button>
  `;
}

function submitCreate() {
  const incident = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    severity: document.getElementById('severity').value,
  };

  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(incident)
  })
    .then(res => res.json())
    .then(showOutput)
    .catch(err => showOutput({ data: [{ title: 'Error', description: err.message }] }));
}

// Delete by ID
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

// Update Form
function updateById() {
  clearForm();
  document.getElementById('formArea').innerHTML = `
    <h3>Update Incident</h3>
    <input id="updateId" placeholder="Enter ID to update" /><br/>
    <input id="title" placeholder="Title" /><br/>
    <textarea id="description" rows="4" placeholder="Description"></textarea><br/>
    <select id="severity">
      <option value="">Select Severity</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select><br/>
    <button onclick="submitUpdate()">Update</button>
  `;
}

function submitUpdate() {
  const id = document.getElementById('updateId').value;
  const updatedIncident = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    severity: document.getElementById('severity').value,
  };

  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedIncident)
  })
    .then(res => res.json())
    .then(showOutput)
    .catch(err => showOutput({ data: [{ title: 'Error', description: err.message }] }));
}
