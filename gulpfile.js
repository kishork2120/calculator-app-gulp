const testfunction = (cb)=>{
  setTimeout(()=>{
    cb();
  },3000)
}

exports.default = testfunction;