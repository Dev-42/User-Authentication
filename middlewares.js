const authPage = (permissions) => {
    return (req,res,next) => {
        const userRole = req.body.role
        if(permissions.includes(userRole)){
            next()
        }else{
            return res.status(401).send("You don't have permission to access this page")
        }
    }
}
const authCourse = (req,res,next) => {
    const courseNumber = parseInt(req.params.number)

    if(req.body.courses.includes(courseNumber)){
        next()
    }else{
        return res.status(401).send("You don't have permission to access this page")
    }
}
module.exports = {authPage,authCourse}