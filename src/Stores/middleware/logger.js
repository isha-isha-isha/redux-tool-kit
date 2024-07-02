const logger=(store)=>(next)=>(action)=>{
    console.log("this is logger stoere",store)
    console.log("this is logger stoere",next)
    console.log("this is logger stoere",action)
    next(action)

}
export default logger;
console.log('this is loggser',logger)