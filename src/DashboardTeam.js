import React,{useState} from 'react'

const DashboardTeam = ({text}) => {
  const [showData, setShowData] = useState(true);
  const [displayText, setDisplayText] = useState('Initial Text');
  const [count, setCount] = useState(1)
  const [counter, setCounter] = useState(3)
  const [click, setClick] = useState(false)

  const handleDataButtonClick = () => {
    setShowData(false);
    setDisplayText('Data Displayed');
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
    <div className='container '>
      <div className='qualifiedDropdown mt-1'>
        <div className='dropdown position-static'>
          <p className='dropdown-toggle' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Qualified(1)</p>
          <ul className='dropdown-menu'>
            <li><a className='dropdown-item'>Qualified(1)</a></li>
            <hr/>
            <li><a className='dropdown-item'>DisQualified(0)</a></li>
            <hr/>
            <div className='d-flex'>
            <i class="bi bi-plus"></i>
              <p>Add section</p>
            </div>
          </ul>
        </div>
        <div className='qualifiedSearch'>
          <i class="bi bi-search"></i>
          <button className='btn btn-sm border checkBtn'><i class="bi bi-check2"></i></button>
          <button className='btn btn-sm border checkBtn'><i class="bi bi-sort-up"></i></button>

        </div>
      </div> 

      <div className=' dashboardData container'>
        <div className='row w-100 d-flex align-items-center justify-content-center'>
          <div className='col'>
            <img src='avatar.png' className='rounded-circle'  style={{width:'50px', height:'62px'}}/>
          </div>
          <div className='col'>
            <div className='mt-2'>
            <p className='text-white'>{text}(Unassigned)</p>
            <p className='text-white'>0.00 points</p>
            </div>
          </div>
          <div className='col'>
            <i className="bi bi-arrow-90deg-left text-white"></i>
            <i className="bi bi-grid text-white gridIcon" ></i>
          </div>
        </div>

      </div>

      <div className='regBox container'>
        <p className='regText'>Resistration is on</p>
        <div className='d-flex align-items-center'>
          <span className='iconSection'><i class="bi bi-link"></i></span>
          <span className='iconSection' data-bs-toggle="modal" data-bs-target="#dashboardModal" ><i class="bi bi-gear-fill"></i></span>
          <div className="form-check form-switch" style={{paddingLeft:'3.5rem'}}>
            <input className="form-check-input " type="checkbox" id="flexSwitchCheckChecked" checked/>
          </div>
        </div>
      </div>
     

      <div className="modal fade" id="dashboardModal"  aria-labelledby="dashboardModalLabel" aria-hidden="true">
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
              
              <button onClick={handleTextButtonClick} className='btn btn-sm '><img src='Solo.png'/></button>
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

export default DashboardTeam