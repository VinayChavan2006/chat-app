const getUserDetailFromToken = require('../Utils/getUserDetailFromToken')


const userDetails = async (req,res) => {

    try {
        const token = req.cookies.token || ""

        const user = await getUserDetailFromToken(token)
        return res.status(200).json({
            data : user
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

module.exports = userDetails