## ** 2048 Clone with Minimax Algorithm and Alpha-Beta Pruning **

This is a repository containing a clone of the popular game 2048, implemented in Python. What makes this project unique is its incorporation of AI algorithms, specifically Minimax with Alpha-Beta Pruning, to allow the game to be played automatically by the computer.
## **About the Project**

The primary goal of this project is to showcase the implementation of artificial intelligence techniques in playing the game of 2048. By utilizing Minimax with Alpha-Beta Pruning, we aim to create an AI that can make optimal moves in the game, achieving higher scores and potentially winning the game.
AI Implementation (In Progress)

The AI implementation is currently in progress. I am actively working on integrating the Minimax algorithm with Alpha-Beta Pruning into the game logic to enable intelligent decision-making by the computer player.

## **1. Minimax Algorithm**

The Minimax algorithm is a decision-making algorithm commonly used in two-player turn-based games. It explores the game tree to determine the best move by minimizing the possible loss while maximizing the potential gain. In the context of 2048, the AI will simulate future game states for each possible move and select the move that leads to the highest score.
## **2. Alpha-Beta Pruning**

Alpha-Beta Pruning is an optimization technique used with the Minimax algorithm to reduce the number of nodes evaluated in the game tree. By pruning branches of the tree that are determined to be irrelevant to the final decision, Alpha-Beta Pruning can significantly improve the efficiency of the search process, allowing for deeper exploration of the game tree within a reasonable time frame.
## **3. Evaluation Function**

To determine the value of each game state during the Minimax search, an evaluation function is required. This function assigns a numerical value to each game state based on various factors such as the arrangement of tiles, the presence of high-value tiles, and the potential for future merges. The AI uses this evaluation function to assess the desirability of each possible move.


To get started with the game, follow these steps:

    Clone the repository to your local machine.
    Ensure you have Python installed.
    Navigate to the project directory and run python game.py to start the game.

## **Credits**

This project is inspired by the original 2048 game created by Gabriele Cirulli. The AI implementation is based on concepts from artificial intelligence and game theory. Also special thanks to WebDev Simplified and Kenny Yip coding on Youtube for providing
excellent explanations on coding the 2048 base clone.

## **License**
This project is licensed under the MIT License - see the LICENSE file for details.

Note: This README will be updated as the AI implementation progresses. Stay tuned for further developments!
