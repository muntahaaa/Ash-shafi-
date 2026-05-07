const STORAGE_KEY = 'ash-shafi-admin-api-base';
const DEFAULT_API_BASE = 'http://localhost:4000';

const apiBaseInput = document.getElementById('apiBase');
const saveApiBaseButton = document.getElementById('saveApiBase');
const doctorForm = document.getElementById('doctorForm');
const doctorIdInput = document.getElementById('doctorId');
const specialtyInput = document.getElementById('specialty');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const timeInput = document.getElementById('time');
const submitButton = document.getElementById('submitButton');
const statusText = document.getElementById('statusText');
const countText = document.getElementById('countText');
const doctorList = document.getElementById('doctorList');
const resetFormButton = document.getElementById('resetForm');
const refreshListButton = document.getElementById('refreshList');

function getApiBase() {
  return (localStorage.getItem(STORAGE_KEY) || DEFAULT_API_BASE).replace(/\/$/, '');
}

function setStatus(message, isError = false) {
  statusText.textContent = message;
  statusText.style.color = isError ? '#b64646' : '#5f6f66';
}

function getFormPayload() {
  return {
    specialty: specialtyInput.value.trim(),
    name: nameInput.value.trim(),
    description: descriptionInput.value.trim(),
    time: timeInput.value.trim(),
  };
}

function clearForm() {
  doctorIdInput.value = '';
  doctorForm.reset();
  submitButton.textContent = 'Create doctor';
  setStatus('Ready');
}

function saveApiBase() {
  const value = apiBaseInput.value.trim();

  if (!value) {
    setStatus('Please enter a backend API URL.', true);
    return;
  }

  localStorage.setItem(STORAGE_KEY, value.replace(/\/$/, ''));
  setStatus(`Saved API base: ${getApiBase()}`);
}

function createText(label, value) {
  const paragraph = document.createElement('p');
  paragraph.className = 'meta';
  paragraph.textContent = `${label}: ${value || '—'}`;
  return paragraph;
}

function renderDoctors(doctors) {
  doctorList.innerHTML = '';
  countText.textContent = `${doctors.length} record${doctors.length === 1 ? '' : 's'}`;

  if (!doctors.length) {
    const empty = document.createElement('p');
    empty.className = 'status';
    empty.textContent = 'No doctors found.';
    doctorList.appendChild(empty);
    return;
  }

  doctors.forEach((doctor) => {
    const card = document.createElement('article');
    card.className = 'card';

    const head = document.createElement('div');
    head.className = 'card-head';

    const titleWrap = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = doctor.name;
    titleWrap.appendChild(title);
    titleWrap.appendChild(createText('Specialty', doctor.specialty));
    titleWrap.appendChild(createText('Time', doctor.time));

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => loadDoctorIntoForm(doctor));

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'danger';
    deleteButton.addEventListener('click', () => deleteDoctor(doctor.id));

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    head.appendChild(titleWrap);
    head.appendChild(actions);

    const description = document.createElement('p');
    description.className = 'desc';
    description.textContent = doctor.description;

    card.appendChild(head);
    card.appendChild(description);
    doctorList.appendChild(card);
  });
}

async function fetchJson(path, options = {}) {
  const response = await fetch(`${getApiBase()}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.error || `Request failed with status ${response.status}`);
  }

  return data;
}

async function loadDoctors() {
  setStatus('Loading doctors...');

  try {
    const result = await fetchJson('/doctors');
    renderDoctors(result.data || []);
    setStatus('Loaded doctors');
  } catch (error) {
    doctorList.innerHTML = '';
    const message = document.createElement('p');
    message.className = 'status';
    message.textContent = `Unable to load doctors: ${error.message}`;
    doctorList.appendChild(message);
    countText.textContent = '0 records';
    setStatus(error.message, true);
  }
}

function loadDoctorIntoForm(doctor) {
  doctorIdInput.value = doctor.id;
  specialtyInput.value = doctor.specialty || '';
  nameInput.value = doctor.name || '';
  descriptionInput.value = doctor.description || '';
  timeInput.value = doctor.time || '';
  submitButton.textContent = 'Update doctor';
  setStatus(`Editing ${doctor.name}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function deleteDoctor(id) {
  if (!confirm('Delete this doctor?')) {
    return;
  }

  try {
    await fetchJson(`/doctors/${id}`, { method: 'DELETE' });
    await loadDoctors();
    clearForm();
  } catch (error) {
    setStatus(error.message, true);
  }
}

async function submitDoctor(event) {
  event.preventDefault();
  const payload = getFormPayload();
  const id = doctorIdInput.value.trim();

  if (!payload.specialty || !payload.name || !payload.description) {
    setStatus('Specialty, name, and description are required.', true);
    return;
  }

  submitButton.disabled = true;
  setStatus(id ? 'Updating doctor...' : 'Creating doctor...');

  try {
    if (id) {
      await fetchJson(`/doctors/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload),
      });
    } else {
      await fetchJson('/doctors', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
    }

    await loadDoctors();
    clearForm();
  } catch (error) {
    setStatus(error.message, true);
  } finally {
    submitButton.disabled = false;
  }
}

apiBaseInput.value = getApiBase();
apiBaseInput.addEventListener('change', saveApiBase);
saveApiBaseButton.addEventListener('click', saveApiBase);
doctorForm.addEventListener('submit', submitDoctor);
resetFormButton.addEventListener('click', clearForm);
refreshListButton.addEventListener('click', loadDoctors);

clearForm();
loadDoctors();
