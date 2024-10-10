// Sample service providers for demo
const providers = ["Therapist John Doe", "Speech Therapist Jane Smith", "Occupational Therapy Clinic", "Behavioral Health Center"];

function searchService() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const providerList = document.getElementById('providerList');
    providerList.innerHTML = '';

    const filteredProviders = providers.filter(provider => provider.toLowerCase().includes(input));

    if (filteredProviders.length === 0) {
        providerList.innerHTML = '<li>No providers found.</li>';
    } else {
        filteredProviders.forEach(provider => {
            const li = document.createElement('li');
            li.textContent = provider;
            providerList.appendChild(li);
        });
    }
}

function addAppointment() {
    const provider = document.getElementById('appointmentProvider').value;
    const date = document.getElementById('appointmentDate').value;

    if (provider && date) {
        const appointmentList = document.getElementById('appointmentList');
        const li = document.createElement('li');
        li.textContent = `${provider} on ${new Date(date).toLocaleDateString()}`;
        appointmentList.appendChild(li);

        // Clear input fields
        document.getElementById('appointmentProvider').value = '';
        document.getElementById('appointmentDate').value = '';
    } else {
        alert('Please provide both provider and date.');
    }
}

function addProgress() {
    const note = document.getElementById('progressNote').value;

    if (note) {
        const progressList = document.getElementById('progressList');
        const li = document.createElement('li');
        li.textContent = note;
        progressList.appendChild(li);

        // Clear input field
        document.getElementById('progressNote').value = '';
    } else {
        alert('Please add a progress note.');
    }
}
