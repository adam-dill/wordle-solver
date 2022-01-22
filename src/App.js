/*
https://www.powerlanguage.co.uk/wordle/

Green - the letter is in the correct spot
Yellow - the letter is in the word, but in the incorrect spot
Grey - the letter is not in the word
*/
import React, {useState} from 'react';
import bank from "./WordBank";
import PositionFilter from './PositionFilter';
const words = bank.split(' ');

function App() {
    const [contains, setContains] = useState([]);
    const [excludes, setExcludes] = useState([]);
    const [positions, setPositions] = useState(['','','','','']);
    
    return (
        <div className="app row">
            <div className="column">
                Excludes:
                <input type="text" onChange={e => {
                    setExcludes(e.target.value.toLowerCase().split(''));
                }}></input>
                Includes:
                <input type="text" onChange={e => {
                    setContains(e.target.value.toLowerCase().split(''));
                }}></input>
                <PositionFilter positions={positions} onChange={setPositions} />
            </div>
            <div className="column">
                <div className="word-list">
                    {words
                        .filter(word => {
                            const result = contains.every(c => word.toLowerCase().includes(c));
                            return result;
                        })
                        .filter(word => {
                            const result = excludes.every(c => !word.toLowerCase().includes(c));
                            return result;
                        })
                        .filter(word => {
                            const result = positions.every((p, index) => {
                                return p === '' || word.toLowerCase().charAt(index) === p.toLowerCase();
                            })
                            return result;
                        })
                        .map((word, index) => <p key={index}>{word}</p>)}
                </div>
            </div>
        </div>
    );
}

export default App;
