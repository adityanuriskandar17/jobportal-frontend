import React from 'react'
import Navbar from '../components/Navbar'

const Applications = () => {

  // const [isEdit, setIsEdit] = useState()
  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh]'>
        <h2>Your Resume</h2>
        <div>
          {
            isEdit ?
              <>

              </> :
              <div>
                <a href="">
                  Resume
                </a>
                <button>
                  Edit
                </button>
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default Applications