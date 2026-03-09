import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, X, Trophy } from "lucide-react";
import { Button } from "./ui/button";

const GAMES = [
  { id: "ttt", name: "Tic Tac Toe" },
  { id: "snake", name: "Snake" },
  { id: "2048", name: "2048" },
];

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(i: number) {
    if (winner || board[i]) return;
    const newBoard = [...board];
    newBoard[i] = isX ? "X" : "O";
    setBoard(newBoard);
    setIsX(!isX);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-3 gap-2 bg-white/5 p-2 rounded-lg">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-16 h-16 bg-white/10 rounded flex items-center justify-center text-2xl font-bold hover:bg-white/20 transition-colors"
          >
            {cell}
          </button>
        ))}
      </div>
      <div className="text-sm font-medium">
        {winner ? `Winner: ${winner}` : `Next: ${isX ? "X" : "O"}`}
      </div>
      <Button size="sm" variant="outline" onClick={() => setBoard(Array(9).fill(null))}>Reset</Button>
    </div>
  );
}

function calculateWinner(squares: any[]) {
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
  }
  return null;
}

export function GameWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGame, setActiveGame] = useState<string | null>(null);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 w-80 glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="p-4 bg-primary/20 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Gamepad2 size={18} className="text-primary" />
                <span className="font-bold text-sm">Rahul's Arcade</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              {!activeGame ? (
                <div className="grid gap-3">
                  {GAMES.map((game) => (
                    <button
                      key={game.id}
                      onClick={() => setActiveGame(game.id)}
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all text-left flex items-center justify-between group"
                    >
                      <span className="text-sm font-medium">{game.name}</span>
                      <Trophy size={14} className="opacity-0 group-hover:opacity-100 text-primary transition-opacity" />
                    </button>
                  ))}
                </div>
              ) : (
                <div>
                  <button onClick={() => setActiveGame(null)} className="text-xs text-primary mb-4 hover:underline">← Back to Menu</button>
                  {activeGame === "ttt" && <TicTacToe />}
                  {activeGame !== "ttt" && <div className="text-center py-8 text-white/50 italic">Coming Soon!</div>}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 flex items-center justify-center hover:shadow-primary/60 transition-all"
      >
        <Gamepad2 size={28} />
      </motion.button>
    </div>
  );
}
