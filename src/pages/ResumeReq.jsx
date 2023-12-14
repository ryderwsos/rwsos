import resume from "../assets/resume.pdf"
import './ResumeReq.css'

export const ResumeReq = () => {
  return (
    <>
    <div className="main-info">
        <h1>Resume</h1>
        <form>
          <label>
            Email
          <input type="text"/>
          </label>
        </form>
        <button><a href={resume} download="resume.pdf">Request</a></button>
    </div>
    </>
  )
}
