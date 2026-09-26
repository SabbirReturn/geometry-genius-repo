let btns = document.querySelectorAll('button');
for(let btn of btns){
    btn.style.backgroundColor = '#1090D8'
    btn.style.border = 'none'
}

// let triangleCalculateValue = ''
let calculateValue = document.getElementById('result')


let triangleCalculate = document.getElementById('triangleCalculate');
triangleCalculate.addEventListener('click', function(){
    let triangleFirstInput = document.getElementById('triangleFirstInput');
    let triangleSecondInput = document.getElementById('triangleSecondInput');
    let triangleCalculateValue = 0.5 * triangleFirstInput.value * triangleSecondInput.value;
    
    let p = document.createElement('p');
    p.innerHTML = `
        <p>Triangle Value:${triangleCalculateValue}</p>

    `
    calculateValue.appendChild(p);
})

document.getElementById('rectangleCalculate').addEventListener('click', function(){
    let rectangleFirstInput = document.getElementById('rectangleFirstInput')
    let rectangleSecondInput = document.getElementById('rectangleSecondInput');
    let rectangleCalculateValue = rectangleFirstInput.value * rectangleSecondInput.value;

    let p = document.createElement('p');
    p.innerHTML = `
        <p>Rectangle Value:${rectangleCalculateValue}</p>

    `
    calculateValue.appendChild(p);
    
})

// Parallelogram 

document.getElementById('parallelogramCalculate').addEventListener('click', function(){
    let parallelogramFirstInput = document.getElementById('parallelogramFirstInput');

    let parallelogramSecondInput = document.getElementById('parallelogramSecondInput');
    let parallelogramCalculateValue = parallelogramFirstInput.value * parallelogramSecondInput.value;

    let p = document.createElement('p');
    p.innerHTML = `
        <p>Parallelogram Value:${parallelogramCalculateValue}</p>

    `
    calculateValue.appendChild(p);
})

// Rhombus
document.getElementById('rhombusCalculate').addEventListener('click', function(){
    let rhombusFirstInput = document.getElementById('rhombusFirstInput')
    let rhombusSecondInput = document.getElementById('rhombusSecondInput');
    let rhombusCalculateValue = 0.5 * rhombusFirstInput.value * rhombusSecondInput.value;

    let p = document.createElement('p');
    p.innerHTML = `
        <p>Rhombus Value:${rhombusCalculateValue}</p>

    `
    calculateValue.appendChild(p);
})


// Pentagon

document.getElementById('pentagonCalculate').addEventListener('click', function(){
    let pentagonFirstInput = document.getElementById('pentagonFirstInput');
    let pentagonSecondInput = document.getElementById('pentagonSecondInput');

    let pentagonCalculateValue = 0.5 * pentagonFirstInput.value * pentagonSecondInput.value;

    let p = document.createElement('p');
    p.innerHTML = `
        <p>Pentagon Value:${pentagonCalculateValue}</p>

    `
    calculateValue.appendChild(p);
})


// Ellipse
document.getElementById('ellipseCalculate').addEventListener('click', ()=>{
    let ellipseFirstInput = document.getElementById('ellipseFirstInput');
    let ellipseSecondInput = document.getElementById('ellipseSecondInput');
    let ellipseCalculateValue = 0.5 * ellipseFirstInput.value * ellipseSecondInput.value;

    let p = document.createElement('p');
    p.innerHTML = `
        <p>Ellipse Value:${ellipseCalculateValue}</p>

    `
    calculateValue.appendChild(p);
})