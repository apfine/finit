import './Home.css'
import { useState  , useEffect , useRef} from 'react'
import { useNavigate } from 'react-router-dom'







function Home(){
const [count, setCount] = useState(0)
  
const stackRef = useRef(null)
const aboutMe = useRef(null)
const [hasTyped, setHasTyped] = useState(false)
const [stackText, setStackText] = useState('')
const [showSurvey, setShowSurvey] = useState(false);

const navigate = useNavigate()
  useEffect( ()=>{
    const mouse = document.getElementById('CursorGlow')
    const handleMouse = (e)=>{
      if(mouse){
        mouse.style.top = `${e.clientY}px`
        mouse.style.left= `${e.clientX}px`
      }
    }
    document.addEventListener('mousemove' , handleMouse)

    return () => {
      document.removeEventListener('mousemove' , handleMouse)
    } }, []
  )

  let isTyping = false
  function type(ref, text, speed) {
    if(isTyping) return
    isTyping = true
    let index =0
    if (!ref.current) return;
    ref.current.textContent = ''

    function typing() {
        if (index < text.length) {
            if (ref.current) {
                ref.current.textContent += text.charAt(index)
                index++;
                setTimeout(typing, speed)
            }
        }
        else isTyping=false
    }

    typing();
}
 
useEffect(() => {
   const stack = 'We are committed to make a financially educated India . As a relatively new society we plan to teach the new engineers how to contribute in Nations wealth building and manage personal finances . Join our society to make the new whale in fintech.'
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasTyped) {
                type(stackRef, stack, 100)
                setHasTyped(true)
            }
        });
    }, { threshold: 0.2 });

    if (stackRef.current) {
        observer.observe(stackRef.current)
    }

    return () => {
        if (stackRef.current) {
            observer.unobserve(stackRef.current)
        }
    }
}, [hasTyped])



  useEffect(()=>{
    const text=" We teach engineers to monetize their skills and to invent new FINTECH."
    const speed = 100
    type(aboutMe , text , 10)
  } , [])



  
  


  return (
    <>
      <div id='CursorGlow'></div>
      
      <div id='app'>
        <div id="titleBar">
          <div className="title">
          <p className="titleButton" onClick={()=> navigate('/survey')}>Survey</p>
          </div>
          <div className="title">
            <a href="#terminal-body" className="titleButton">About us</a>
          </div>
        
          <div className="title">
            <a onClick={()=> navigate('/team')} className="titleButton">Team</a>
          </div>
          <div className="title">
            <a onClick={()=> navigate('/events')} className="titleButton">Events</a>
          </div>
          <div className="title">
            <a onClick={()=> navigate('/contact')} className="titleButton">Contact</a>
          </div>
          
        </div>
        <div id='about'>
          <div id="me">
            <div id='profile-photo'></div>
          </div>
            <div id='name'><p>FINIT</p></div>
            <div id='about-me'><p><span id='typed-text' ref={aboutMe}></span><span className='cursor'>|</span></p></div>
        </div>
        <div id='stack-pre'>
          <div id="stack">
              
          <section className="terminal">
             <div className="terminal-header">
               <span className="red"></span>
               <span className="yellow"></span>
               <span className="green"></span>
             </div>
             <div className="terminal-body" id="terminal-body">
               <p className="command"> echo "About us"</p>
               <p className="output"><span id="tech-stack" ref={stackRef}><span className='cursor'>|</span></span></p>
              </div>
          </section>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home