const lightElements = document.querySelectorAll('.treeDisplay div');
const lightSwitch = document.getElementById('lightSwitch');
const colorSelect = document.getElementById('lightColor');

lightSwitch.addEventListener('change', () => {
    const isOn = lightSwitch.value === 'on';
    lightElements.forEach(light => {
        light.style.display = isOn ? 'block' : 'none';
    });
});

colorSelect.addEventListener('change', () => {
    const selectedColor = colorSelect.value;
    lightElements.forEach(light => {
        light.style.backgroundColor = selectedColor;
    });
});

