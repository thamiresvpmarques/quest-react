import './button.css'

const Button = () =>{
    return (
        <>
         <button className ='btn' onClick={()=>{
            alert ('A label desse botão é Baixar CV')
         }}>
            <label className='text-btn'>Baixe aqui CV</label>
         </button>
            
         
        </>
    )
}

export default Button