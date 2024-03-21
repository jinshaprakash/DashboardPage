import React,{useState} from 'react'
import DashboardTeam from './DashboardTeam';
const DashboardData = () => {
  
  const [showData, setShowData] = useState(true);
  const [displayText, setDisplayText] = useState('Initial Text');
  const [count, setCount] = useState(1)
  const [counter, setCounter] = useState(3)
  const [isActive, setIsActive] = useState(false);
 
  const handleDataButtonClick = () => {
    setShowData(false);
    setDisplayText('Data Displayed');
    setIsActive(!isActive);
    
    
  };

  const handleTextButtonClick = () => {
    setShowData(true);
    setDisplayText('Some Text');
    
  };

  const increment = () => {
    setCount(count + 1)
  }
  const incrementCount = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const decrementCount = () => {
    setCounter(counter - 1)
  }

  
  return (
    <div className='container'>
      <div className='dropdown mt-2'>
        <p className='dropdown-toggle' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Qualified(0)</p>
        <ul className='dropdown-menu'>
          <li><a className='dropdown-item'>Qualified</a></li>
        </ul>
      </div>
      <div className='footerSection'>
        <img src='dashboard.png'/>
        <p>Add teams to Qualified list manually</p>
        <div className="form-check form-switch ">
          <input className="form-check-input position-absolute" type="checkbox" id="flexSwitchCheckChecked" checked/>
          <label className="form-check-label" for="flexSwitchCheckChecked">or Turn on
          <b>Registrations</b></label>
          <hr/>
        </div>
        
        <div className='d-grid '>
          <button className='bg-dark text-white p-2 btnSection' data-bs-toggle="modal" data-bs-target="#regModal">Registration Settings</button>
          <button className='bg-dark p-2 text-white mt-2 btnSection'>Invite Participants</button>
        </div>
        
      </div>
      <div className="modal fade" id="regModal"  aria-labelledby="dashboardModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content regModal">
            <div className="modal-header">
              <h5>Setup Team Size</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='modal-body '>
              <p className='text-center'>You may edit these settings later.</p>
              <div className='d-flex gap-2  justify-content-center mt-3'>
                
              <button onClick={handleDataButtonClick} className='btn btn-sm '><img src='Team.png'/></button>
              
              <button onClick={handleTextButtonClick} className='btn btn-sm '>
                <img
                src={isActive ? 'Solo.png' : 'Solo1.png'}
                />
              </button>
              </div>

              {showData ? (
                <div>
                  <div className="form-check form-switch mt-3 ">
                    <input className="form-check-input " type="checkbox" id="flexSwitchCheckChecked" checked/>
                    <label className="form-check-label" for="flexSwitchCheckChecked">
                      Require participants to register by choosing from unassigned participant codes (1)
                    </label>
                    <div className="d-flex gap-2  justify-content-center mt-3">
                      <button className="btn  buttonSection border" type="button">Cancel</button>
                      <button className="btn  btn-dark buttonSection1" type="button" >Done</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  
                <div className='row mt-3'>
                  <div className='col-6'>
                    <p>Min Team Size</p>
                    <div className='d-flex gap-3 '>
                      <button onClick={decrement} className='btn counter'>-</button>
                      <p className='mt-2'>{count}</p>
                      <button onClick={increment} className='btn counter'>+</button>
                    </div>
                  </div>
                  <div className='col-6 '>
                    <p >Max Team Size</p>
                    <div className='d-flex gap-3'>
                      <button onClick={decrementCount} className='btn counter'>-</button>
                      <p className='mt-2'>{counter}</p>
                      <button onClick={incrementCount} className='btn counter'>+</button>
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch mt-3">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                  <label className="form-check-label" for="flexSwitchCheckChecked">Set min/max team size</label>
                </div>
                <hr/>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                  <label className="form-check-label" for="flexSwitchCheckChecked">
                  Require participants within a team to belong to the same Organisation/Institute
                  </label>
                </div>
                <hr/>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                  <label className="form-check-label" for="flexSwitchCheckChecked">
                  Require teams to register by choosing from unassigned team (1)
                  </label>
                </div>

                <div className="d-flex gap-2  justify-content-center mt-3">
                  <button className="btn  buttonSection border" type="button">Cancel</button>
                  <button className="btn  btn-dark buttonSection1" type="button" >Done</button>
                </div>
                
              </div>
              )}
            </div>
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default DashboardData