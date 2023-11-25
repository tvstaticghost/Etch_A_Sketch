const board = document.getElementById('etch-board');
const reset = document.getElementById('reset-btn');

const radioButtons = document.querySelectorAll('input[name="size"]');
const radioButtonsColor = document.querySelectorAll('input[name="color"]');
let myColor = '';

function getRandomColor() {
    let numberValue = Math.floor(Math.random() * 7 + 1);
    if (numberValue === 1) {
        return 'var(--clr-blue)';
    }
    else if (numberValue === 2) {
        return 'var(--clr-lightred)';
    }
    else if (numberValue === 3) {
        return 'hotpink';
    }
    else if (numberValue === 4) {
        return 'var(--clr-darkred)';
    }
    else if (numberValue === 5) {
        return 'var(--clr-purple)';
    }
    else if (numberValue === 6) {
        return 'var(--clr-lightpurple)';
    }
    else if (numberValue === 7) {
        return 'green';
    }
}

function initialBoxes() {
    for (let i = 0; i < 210; i++) {
        const firstDiv = document.createElement('div');
        board.appendChild(firstDiv);
        firstDiv.style.width = '1rem';
        firstDiv.style.height = '1rem';
        firstDiv.style.border = '1px solid black';
        board.style.maxWidth = '15rem';

        firstDiv.addEventListener('mouseover', () => {
            firstDiv.style.backgroundColor = 'black';
        })
    }
}

radioButtons.forEach((radio) => {
    radio.addEventListener('change', function() {
        let size = this.value;
        let color = getSelectedColor();
        boxes(size, color);
    });
});

radioButtonsColor.forEach((radio) => {
    radio.addEventListener('change', function() {
        changeBoxColor(this.value);
    })
})

function getSelectedColor() {
    for (let radio of radioButtonsColor) {
        if (radio.checked && radio.value === 'Black') {
            return 'black';
        }
        else if (radio.checked && radio.value === 'Blue') {
            return '#7743DB';
        }
        else if (radio.checked && radio.value === 'Red') {
            return 'var(--clr-darkred)';
        }
        else if (radio.checked && radio.value === 'Rainbow') {
            return `${getRandomColor()}`;
        }
    }
    return 'defaultColor';
}

function changeBoxColor(color) {
    let childDivs = board.querySelectorAll('div');
    childDivs.forEach((div) => {
        if (color === 'Black') {
            div.style.border = '1px solid black';
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            })
        } else if (color === 'Blue') {
            div.style.border = '1px solid black';
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = '#7743DB';
            })
        } else if (color === 'Red') {
            div.style.border = '1px solid black';
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'var(--clr-darkred)';
            })
        } else if (color === 'Rainbow') {
            div.style.border = `1px solid black`;
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = getRandomColor();
            })
        }
    });

}


function boxes(value, color) {
    if (value === 'Small') {
        board.innerHTML = '';
        board.style.maxWidth = '15rem';
        for (let i = 0; i < 210; i++) {
            const div = document.createElement('div');
            board.appendChild(div);
            div.style.width = '1rem';
            div.style.height = '1rem';
            div.style.border = `1px solid black`;
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = `${getSelectedColor()}`;
            })
        }
    }
    else if (value === 'Medium') {
        board.innerHTML = '';
        board.style.maxWidth = '20rem';
        console.log(color);
        for (let i = 0; i < 400; i++) {
            const div = document.createElement('div');
            board.appendChild(div);
            div.style.width = '1rem';
            div.style.height = '1rem';
            div.style.border = `1px solid black`;
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = `${getSelectedColor()}`
            })
        }
    }
    else if (value === 'Large'){
        board.innerHTML = '';
        board.style.maxWidth = '25rem';
        for (let i = 0; i < 600; i++) {
            const div = document.createElement('div');
            board.appendChild(div);
            div.style.width = '1rem';
            div.style.height = '1rem';
            div.style.border = `1px solid black`;
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = `${getSelectedColor()}`;
            })
        }
    }
}

reset.addEventListener('click', () => {
    board.innerHTML = '';
    initialBoxes();
})

initialBoxes();

getRandomColor();