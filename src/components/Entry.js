import React from 'react'

export default function Men() {
  return (
<div className='container entry'>
  <div className="modal_container">
    <div className="modal">
    </div>
  </div>
  <div className="score-list">
    <div value='open' className='open_scores third'>
      <h3>Open Scores</h3>
      <div>No Results</div>
    </div>
    <div className='masters_scores third'>
      <h3>Master's Scores</h3>
      <div>No Results</div>
    </div>
    <div className='grandmasters_scores third'>
      <h3>Grandmaster's Scores</h3>
      <div>No Results</div>
    </div>
  </div>

  <form id="info">
  <div className="container cont">

    <div className="form_entry">
      <br />
      <input type="text" id="results" required />
      <br />
    </div>

    <div className="races">
      <br/>

      <select type="text" id="race_run" required>
        <option value='coogans'>Coogans</option>
        <option value='cp_4miler'>CP 4miler</option>
        <option value='bk_Half'>Brooklyn Half</option>
        <option value='queens'>Queens</option>
        <option value='team_Champs'>Team Champs</option>
        <option value='harlem'>Harlem 5k</option>
        <option value='fifth_ave'>5th Avenue Mile</option>
        <option value='bk'>Bronx 10 Miler</option>
        <option value='si'>Staten Island</option>
        <option value='nyc'>NYC Marathon</option>
        <option value='corbitt'>Ted Corbitt</option>
      </select>
    </div>

    <div className="age_groups">
      <div className="groups">
        <input type="radio" className="age" value="open" id="open" name="age" />
        <label for="open" value="open">Open</label>
      </div>
      <div className="groups">
        <input type="radio" className="age" value="masters" id="masters" name="age" />
        <label for="masters" value="masters">Masters</label>
      </div>
      <div className="groups">
        <input type="radio" className="age" value="grandmasters" id="grandmasters" name="age" />
        <label for="grandmasters" value="grand_masters">Grandmasters</label>
      </div>
    </div>

    <div className="button_container">
      <button className="button" type="submit">Submit</button>
    </div>
    <div className="button_container clearButton">
      <button id="clear">Clear All</button>
    </div>

  </div>
  </form>

</div>

  )
}

//
//   <form id="info">
//   <div className="container cont">
//     <div className="form_entry">
//
//       <br/>
//       <input type="text" id="results" required />
//       <br />
//     </div>
//     <div className="races">
//       <br/>
//       <select type="text" id="race_run" required>
//         <option value='coogans'>Coogans</option>
//         <option value='cp_4miler'>CP 4miler</option>
//         <option value='bk_Half'>Brooklyn Half</option>
//         <option value='queens'>Queens</option>
//         <option value='team_Champs'>Team Champs</option>
//         <option value='harlem'>Harlem 5k</option>
//         <option value='fifth_ave'>5th Avenue Mile</option>
//         <option value='bk'>Bronx 10 Miler</option>
//         <option value='si'>Staten Island</option>
//         <option value='nyc'>NYC Marathon</option>
//         <option value='corbitt'>Ted Corbitt</option>
//       </select>
//     </div>
//     <div className="age_groups">
//       <div className="groups">
//         <input type="radio" className="age" value="open" id="open" name="age" />
//         <label for="open" value="open">Open</label>
//       </div>
//       <div className="groups">
//         <input type="radio" className="age" value="masters" id="masters" name="age" />
//         <label for="masters" value="masters">Masters</label>
//       </div>
//       <div className="groups">
//         <input type="radio" className="age" value="grandmasters" id="grandmasters" name="age" />
//         <label for="grandmasters" value="grand_masters">Grandmasters</label>
//       </div>
//     </div>
//     <div className="button_container">
//       <button className="button" type="submit">submit</button>
//     </div>
//     <div className="button_container clearButton">
//       <button id="clear">Clear All</button>
//     </div>
//   </form>
// </div>
// </div>
