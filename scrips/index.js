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