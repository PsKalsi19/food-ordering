import { useNavigate } from "react-router-dom"

const Home=()=>{
    const navigate=useNavigate()
    return(
        <div>
            <main><h3>Welcome to neoG Food Ordering App</h3></main>
            <div>
                <button className="btn btn-secondary" onClick={()=>navigate('/menu')}>See Menu</button>
            </div>
        </div>
    )
}

export default Home 