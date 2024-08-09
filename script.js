document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('colorPicker');
    const applyColorBtn = document.getElementById('applyColor');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorValue = document.getElementById('colorValue');

    applyColorBtn.addEventListener('click', function() {
        const selectedColor = colorPicker.value;
        colorDisplay.style.backgroundColor = selectedColor;
        colorValue.textContent = selectedColor;
        
        // Adjust text color for better contrast
        const r = parseInt(selectedColor.substr(1,2), 16);
        const g = parseInt(selectedColor.substr(3,2), 16);
        const b = parseInt(selectedColor.substr(5,2), 16);
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        colorDisplay.style.color = (yiq >= 128) ? 'black' : 'white';
    });
});