const createError = require("http-errors");


//404 not found handler

function notFoundHandler(req,res,next){    
    next(createError(404,"Requested content is not found"));
}

//default error handler

function errorHandler(err,req,res,next){
    res.locals.error=process.env.NODE_ENV === "development"? err : {message:err.message}

    if(!res.locals.html){
        //html response
        res.render("error",{
            title:"error page",
            dekhbo:res.statu
        })
    }else{
        return res.json(res.locals.error)
    }
}

module.exports ={
    notFoundHandler,errorHandler
}