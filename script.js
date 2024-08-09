document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('colorPicker');
    const applyColorBtn = document.getElementById('applyColor');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorValue = document.getElementById('colorValue');
    const copyColorBtn = document.createElement('button');

    copyColorBtn.id = 'copyColor';
    copyColorBtn.textContent = 'Copy Color';
    colorDisplay.appendChild(copyColorBtn);

    applyColorBtn.addEventListener('click', function() {
        const selectedColor = colorPicker.value;
        colorDisplay.style.backgroundColor = selectedColor;
        colorValue.textContent = selectedColor;

        // Adjust text color for better contrast
        const r = parseInt(selectedColor.substr(1, 2), 16);
        const g = parseInt(selectedColor.substr(3, 2), 16);
        const b = parseInt(selectedColor.substr(5, 2), 16);
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        colorDisplay.style.color = (yiq >= 128) ? 'black' : 'white';
    });

    copyColorBtn.addEventListener('click', function() {
        const selectedColor = colorValue.textContent;
        navigator.clipboard.writeText(selectedColor).then(function() {
            alert('Color copied to clipboard: ' + selectedColor);
        }, function(err) {
            alert('Failed to copy color: ', err);
        });
    });
});
