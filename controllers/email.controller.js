class EmailController{
    async email(req, res) {
        return res.send('hello')
    }
}

module.exports = new EmailController()