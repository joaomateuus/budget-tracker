import React, {useState} from 'react'

export const AddSpend = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    
    return (
    <>
        <h3>Add Spend</h3>
        <form>
            <div className="form-control">
            <label for="text">Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount">Enter Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..." />
            </div> 
            <button className="btn">Add transaction</button>
        </form>
    </>
  )
}
