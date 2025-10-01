import React from 'react';


export default function App(){
  return (
    <main className ="page">
      <div className="card">
      <h1>Hey love</h1>
      <p className ="message"> I just wanted to say: </p>
      <div className="heart">❤️</div>
      <h2 className="i love"> I LOVE YOU </h2>
      <p className="small"> from kabir hehe </p>
      <button className="btn" onClick={() => alert("You made my day💝")}>Click Me</button>
      </div>
      <footer>Made with ❤️ by Kabir</footer>
    </main>
  )
}


