import './text.css'

const ColorText = ({color,children}) =>{
  return (
    <div className='styling-text'>
      <h1 className='title'>Título</h1>
      <p style={{color:color}}>{children.toUpperCase()}</p>
    </div>
  )
}


export default ColorText