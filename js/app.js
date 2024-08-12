// Get Value from input field
function getValueFromInputField(baseField, heightField, displayField, asideDiplayField, name, btnName) {
    const baseElement = document.getElementById(baseField);
    const heightElement = document.getElementById(heightField);

    const base = parseFloat(baseElement.value);
    const height = parseFloat(heightElement.value);

    if(isNaN(height) || isNaN(base) || height < 1 || base < 1) {
        alert(`Please enter valid values for ${name} (base and height must be positive numbers)`);
        return;
    }

    // Area Calculate Button Disabled
    document.getElementById(btnName).className = 'btn-disabled border-2 border-blue-500 btn rounded w-full mt-5 mb-2';

    const area = areaCalculate(base, height, name);

    const areaDisplay = document.getElementById(displayField);
    areaDisplay.innerText = area;
    baseElement.value = ''
    heightElement.value = ''


    // Aside 

    // Test
    const asideOl = document.getElementById('aside-ol');
    const li = document.createElement('li');


    li.innerHTML = `
                <p class="font-bold">${name}</p>
                <p><span id=${asideDiplayField}>25</span>cm<sup>2</sup></p>
                <button 
                  class="w-24 h-7 text-xs rounded bg-blue-700 font-bold text-white hover:bg-blue-300 hover:text-black"
                >
                  Convert to m<sup>2</sup>
                </button>
    `;
    
    li.className = 'flex flex-row gap-5 justify-start items-start';

    asideOl.appendChild(li);
    const asideDiplay = document.getElementById(asideDiplayField);
    asideDiplay.innerText = area;
}


// Area Calculations
function areaCalculate(x, y, name) {
  if(name === 'Triangle') {
      return 0.5 * x * y;
  } else if(name === 'Rectangle' || name === 'Parallelogram') {
      return x * y;
  }
}


// Triangle Area calculation
document.getElementById('triangle-area-calculate').addEventListener('click', function() {
  getValueFromInputField('triangle-base', 'triangle-height', 'triangle-area-display', 'triangle-aside-area-display', 'Triangle', 'triangle-area-calculate');
})


// Rectangle Area calculation
document.getElementById('rectangle-area-calculate').addEventListener('click', function() {
  getValueFromInputField('rectangle-base', 'rectangle-height', 'rectangle-area-display', 'rectangle-aside-area-display', 'Rectangle', 'rectangle-area-calculate');
})


// Parallelogram Area calculation
document.getElementById('parallelogram-area-calculate').addEventListener('click', function() {
  getValueFromInputField('parallelogram-base', 'parallelogram-height', 'parallelogram-area-display', 'parallelogram-aside-area-display', 'Parallelogram', 'parallelogram-area-calculate');
})
