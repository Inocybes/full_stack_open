import { useState } from "react";
import "./App.css";

import React from "react";

const Header = ({anecdoteName}) => <h2>{anecdoteName}</h2>

const Anecdote = ({text, allVotes}) => (
  <div>
    <p>{text}</p>
    <p>has {allVotes} votes</p>
  </div>
);

const CountVotes = ({ anecdotes, allVotes }) => {
  const maxNumVotes = Math.max(...allVotes);
  const anecdoteVotes = allVotes.findIndex(vote => vote === maxNumVotes);
  const mostVotedAnecdote = anecdotes[anecdoteVotes]
  console.log(anecdoteVotes, maxNumVotes);


  if (maxNumVotes === 0) {
    return (
      <p>No votes yet</p>
    )
  }

  return (
    <div>
      <p>{mostVotedAnecdote}</p>
      <p>has {maxNumVotes} votes</p>
    </div>
  )
};


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
);

const App = () => {

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [allVotes, setAllVotes] = useState(Array(anecdotes.length).fill(0))

  const handleVoteClick = () => {
    const newAllVotes = [...allVotes]
    newAllVotes[selected] += 1
    setAllVotes(newAllVotes)
  }

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };


  return (
    <div>
      <Header anecdoteName="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} allVotes={allVotes[selected]} />
      <Button onClick={randomAnecdote} text="next anecdote" />
      <Button onClick={handleVoteClick} text="vote"/>

      <Header anecdoteName="Anecdote with most votes" />
      <CountVotes anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  );
};

export default App;
