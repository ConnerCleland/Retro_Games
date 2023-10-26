// app/static/tetris.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    const canvas = document.getElementById('tetrisCanvas');
    const ctx = canvas.getContext('2d');

    const blockWidth = 20;
    const blockHeight = 20;

    // Define the game grid
    const grid = {
        rows: 10,
        columns: 10,
    };

    // Placeholder for the current active block
    let activeBlock = null;

    // 2D array to represent the grid state
    const gameGrid = Array.from({ length: grid.rows }, () => Array(grid.columns).fill(null));

    function drawBlock(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
    }

    function drawGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the grid
        for (let row = 0; row < grid.rows; row++) {
            for (let col = 0; col < grid.columns; col++) {
                if (gameGrid[row][col]) {
                    drawBlock(col, row, 'red');
                } else {
                    drawBlock(col, row, 'lightgray');
                }
            }
        }

        // Draw the active block
        if (activeBlock) {
            drawBlock(activeBlock.x, activeBlock.y, 'red');
        }
    }

    function moveBlock(direction) {
        if (!activeBlock) {
            // Create a new block if none exists
            activeBlock = { x: 0, y: 0 };
        }

        switch (direction) {
            case 'ArrowRight':
                if (activeBlock.x < grid.columns - 1 && !checkCollision(1, 0)) {
                    activeBlock.x += 1;
                }
                break;
            case 'ArrowLeft':
                if (activeBlock.x > 0 && !checkCollision(-1, 0)) {
                    activeBlock.x -= 1;
                }
                break;
            case 'ArrowDown':
                if (canMoveDown() && !checkCollision(0, 1)) {
                    activeBlock.y += 1;
                } else {
                    lockBlock();
                }
                break;
            case 'ArrowUp':
                rotateBlock();
                break;
        }

        drawGrid();
    }

    function canMoveDown() {
        if (!activeBlock) {
            return false;
        }

        // Check if there's space below the block
        return activeBlock.y < grid.rows - 1;
    }

    function checkCollision(dx, dy) {
        if (!activeBlock) {
            return false;
        }

        const newX = activeBlock.x + dx;
        const newY = activeBlock.y + dy;

        // Check for collision with the game grid boundaries
        if (newX < 0 || newX >= grid.columns || newY < 0 || newY >= grid.rows) {
            return true;
        }

        // Check for collision with existing blocks in the grid
        if (gameGrid[newY][newX]) {
            return true;
        }

        return false;
    }

    function rotateBlock() {
        if (!activeBlock) {
            return;
        }

        const oldX = activeBlock.x;
        const oldY = activeBlock.y;

        // Calculate new coordinates after rotation
        const newX = grid.columns - 1 - oldY;
        const newY = oldX;

        // Check for collision after rotation
        if (!checkCollision(newX - activeBlock.x, newY - activeBlock.y)) {
            activeBlock.x = newX;
            activeBlock.y = newY;
        }
    }

    function lockBlock() {
        // Lock the active block in the game grid
        gameGrid[activeBlock.y][activeBlock.x] = true;

        // Clear completed rows (to be implemented)
        clearCompletedRows();

        // Reset the active block
        activeBlock = null;
    }

    function clearCompletedRows() {
        // Check each row for completeness
        for (let row = grid.rows - 1; row >= 0; row--) {
            if (isRowComplete(row)) {
                // Remove the completed row
                gameGrid.splice(row, 1);

                // Add a new empty row at the top
                gameGrid.unshift(Array(grid.columns).fill(null));
            }
        }
    }

    function isRowComplete(row) {
        // Check if every cell in the row is filled
        return gameGrid[row].every((cell) => cell);
    }

    function updateGame() {
        if (canMoveDown() && !checkCollision(0, 1)) {
            // Move the block down if possible
            activeBlock.y += 1;
        } else {
            // Lock the block in place if it can't move down
            lockBlock();
        }
    }

    function gameLoop() {
        updateGame();
        drawGrid();
        requestAnimationFrame(gameLoop);
    }

    // Start the game loop
    gameLoop();

    document.addEventListener('keydown', (event) => {
        const directionKeys = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'];

        if (directionKeys.includes(event.key)) {
            moveBlock(event.key);
        }
    });
});
