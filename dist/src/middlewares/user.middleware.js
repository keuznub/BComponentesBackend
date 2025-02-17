/*export function isAuthenticate(req:Request, res:Response, next:NextFunction){
    const tokenReceived = req.cookies.token
    if(!tokenReceived) next(new HttpException(403, "Access Denied"))
    try{
        const tokenDecodificado = jwt.verify(tokenReceived,TOKEN_PASSWORD)
        req.user = tokenDecodificado as CustomJwtPayload
        next()
    }catch(error){
        next(error)
    }
}

*/ 
//# sourceMappingURL=user.middleware.js.map