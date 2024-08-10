document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('colorPicker');
    const applyColorBtn = document.getElementById('applyColor');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorValue = document.getElementById('colorValue');
    const copyColorBtn = document.getElementById('copyColor');
    const colorInput = document.getElementById('colorInput');
    const showColorBtn = document.getElementById('showColor');
    const colorBox = document.getElementById('colorBox');

    // Functionality for the first section (Choose a Color)
    applyColorBtn.addEventListener('click', function() {
        const selectedColor = colorPicker.value;
        colorDisplay.style.backgroundColor = selectedColor;
        colorValue.textContent = selectedColor;

        // Adjust text color for better contrast
        const r = parseInt(selectedColor.substr(1, 2), 16);
        const g = parseInt(selectedColor.substr(3, 2), 16);
        const b = parseInt(selectedColor.substr(5, 2), 16);
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        colorDisplay.style.color = (yiq >= 128) ? '#2c3e50' : '#ecf0f1';
    });

    // Copy color to clipboard
    copyColorBtn.addEventListener('click', function() {
        const selectedColor = colorValue.textContent;
        navigator.clipboard.writeText(selectedColor).then(function() {
            alert('Color copied to clipboard: ' + selectedColor);
        }, function(err) {
            alert('Failed to copy color: ', err);
        });
    });

    // Functionality for the second section (Input a Color Value)
    showColorBtn.addEventListener('click', function() {
        const colorValue = colorInput.value;
        if (/^#[0-9A-F]{6}$/i.test(colorValue)) {
            colorBox.style.backgroundColor = colorValue;
        } else {
            alert('Please enter a valid hex color code.');
            colorBox.style.backgroundColor = 'transparent';
        }
    });
});
