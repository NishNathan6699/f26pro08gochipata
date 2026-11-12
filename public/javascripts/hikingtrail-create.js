document.getElementById('trail-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const button = this.querySelector('button[type="submit"]');
  const error = document.getElementById('form-error');
  button.disabled = true;
  error.textContent = '';
  try {
    const body = Object.fromEntries(new FormData(this));
    body.length = Number(body.length);
    const response = await fetch('/resource/hikingtrails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Unable to save trail');
    window.location.assign('/hikingtrails');
  } catch (err) {
    error.textContent = err.message;
    button.disabled = false;
  }
});
