document.addEventListener('DOMContentLoaded', () => {
    const utrInput = document.getElementById('utr');
    const submitButton = document.getElementById('submit-utr');
    const errorMessage = document.getElementById('error-message');
    const uploadSection = document.getElementById('upload-section');
    const shareButton = document.getElementById('share-screenshot');

    submitButton.addEventListener('click', function() {
        const utrValue = utrInput.value.trim();

        if (utrValue.length !== 12 || !/^\d+$/.test(utrValue)) {
            errorMessage.textContent = 'Error: UTR 12 digits ka hona chahiye aur sirf numbers hone chahiye.';
            uploadSection.classList.add('hidden');
        } else {
            errorMessage.textContent = '';
            utrInput.disabled = true; 
            submitButton.disabled = true;
            submitButton.style.backgroundColor = '#28a745'; 
            submitButton.textContent = 'UTR Verified!';
            uploadSection.classList.remove('hidden');
        }
    });

    shareButton.addEventListener('click', function() {
        window.location.href = 'login.html'; 
    });
});
