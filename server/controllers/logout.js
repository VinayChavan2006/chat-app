

const logout = async (req,res) => {
    try {
        return res.cookie("token","",{
            httpOnly:true,
            secure : true
        }).json({
            message : "logout success"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = logout