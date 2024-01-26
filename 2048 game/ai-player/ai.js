import { canMoveUp, canMoveDown, canMoveLeft, canMoveRight } from "./script.js";

function makeRandomMove() {
    const moves = [];
    if (canMoveUp()) moves.push("ArrowUp");
    if (canMoveDown()) moves.push("ArrowDown");
    if (canMoveLeft()) moves.push("ArrowLeft");
    if (canMoveRight()) moves.push("ArrowRight");
    
    if (moves.length > 0) {
        const randomIndex = Math.floor(Math.random() * moves.length);
        return moves[randomIndex];
    }
}

export { makeRandomMove };
