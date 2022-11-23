import './text.css'

const Text = ({color,text}) =>{
  return (
    <div className='styling-text'>
      <h1 className='title'>Título</h1>
      <p style={{color:color}}>{text.toUpperCase()}</p>
    </div>
  )
}


export default Text