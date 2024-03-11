
const Mole = () => {
  return (
    <div className="mole-animation" style={{ width: "120px", height: "130px", borderRadius: "45% 45% 0 0", position: "absolute"}}>
        <div className="eye" style={{ width: "10px", height: "10px", background: "#000", borderRadius: "50%", position: "absolute", left: "30px", top: "30px"}}></div>
        <div className="eye" style={{ width: "10px", height: "10px", background: "#000", borderRadius: "50%", position: "absolute", right: "30px", top: "30px"}}></div>
        <div className="nose" style={{ width: "30px", height: "30px", background: "#000", borderRadius: "50%", position: "absolute", right: "45px", top: "40px", zIndex: 2}}></div>
        <div className="lips" style={{ width: "40px", height: "40px", background: "#fdba95", borderRadius: "50%", position: "absolute", right: "25px", top: "50px", zIndex: 1}}></div>
        <div className="lips" style={{ width: "40px", height: "40px", background: "#fdba95", borderRadius: "50%", position: "absolute", left: "25px", top: "50px", zIndex: 1}}></div>
    </div>
  )
}

export default Mole