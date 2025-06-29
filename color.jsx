//Color changing 

function App(){
const [r,setR]=useState(0);
const [g,setG]=useState(0);
const [b,setB]=useState(0);
const save=()=>{
localStorage.setItem("color",JSON.stringify({r,g,b}))
}
    return(
 <div>
<h1 style={{color:"purple"}} > Color Mixer</h1>
<div style={{backgroundColor:"rgb("+r+","+g+","+b+")",height:"200px",width:"200px",borderRadius:"20px"}}>
    
</div>
 <label htmlFor="">Red</label>
<input type="range"
value={r}
onChange={(event)=>setR(event.target.value)}
  min={0} max={255}/>
<br /><br /> 
<label htmlFor="">Green</label>
<input type="range"
value={g} 
 onChange={(event)=>setG(event.target.value)} min={0} max={255}/>
<br /><br />

<label htmlFor="Blue">Blue</label>
<input type="range"
value={b} 
onChange={(event)=>setB(event.target.value)} min={0} max={255}/>
<br /><br />
<button  style={{border:"1px solid black",padding:5,backgroundColor:"lightgray",borderRadius:"5px"}}onClick={save}>Save Color Combination</button>
 </div> 
)
 }
export default App;


