const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundary {
    static width = 40
    static height = 40
    constructor({ position }) {
        this.position = position;
        this.width = 40;
        this.height = 40;
    }

    draw() {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height); // Fix: Specify both width and height
    }
}
class PacMan {
    constructor() {
        position(),
        velocity()
        this.position = position
        this.velocity = velocity
        this.radius = 15
    }
    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius,0, Math.PI * 2)
        c.fillStyle = 'yellow'
        c.fill()
        c.closePath()
    }
}
const map = [
    ['-','-','-','-','-','-','-','-','-','-'],
    ['-',' ',' ',' ',' ',' ',' ',' ',' ','-'],
    ['-',' ','-','-',' ',' ','-',' ',' ','-'],
    ['-',' ',' ',' ',' ','-','-',' ',' ','-'],
    ['-',' ',' ','-',' ',' ',' ',' ',' ','-'],
    ['-',' ','-','-','-',' ','-','-',' ','-'],
    ['-',' ',' ','-',' ',' ','-','-',' ','-'],
    ['-',' ',' ',' ',' ',' ',' ',' ',' ','-'],
    ['-','-','-','-','-','-','-','-','-','-']
];

const boundaries = [];
const player = new PacMan({
    position: {
        x: Boundary.width + Boundary.width / 2,
        y:Boundary.height + Boundary.height / 2,
    },
    velocity: {
        x: 0,
        y: 0,
    }
})

map.forEach((row, index) => { 
    row.forEach((symbol, j) => { 
        switch(symbol) {
            case '-': 
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j, //makes the blocks for the game
                            y: Boundary.height * index //also blocks
                        }
                    })
                );
                break;
        }
    });
});

boundaries.forEach((boundary) => {
    boundary.draw();
});
player.draw()
window.addEventListener('keydown', () => {
    console.log("Yes")
})
