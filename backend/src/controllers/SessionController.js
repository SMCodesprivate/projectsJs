const user = require("../models/ModelUser");

module.exports = {
    async destroy(req, res) {
        const { mail } = req.body;
        var userInfo = await user.findOne({ mail });
        if(!userInfo) return res.json({ returno: "Não existe esse usuário" });
        userInfo = await user.findOneAndRemove({ mail });
        return res.json(userInfo);
    },
    async update(req, res) {
        const { mail, curse } = req.body;
        var infoUser = await user.findOne({ mail });
        if(infoUser) {
            var { curses } = infoUser;
            var teste = curses.indexOf(curse);
            if(teste != -1) return res.json({ returno: "Já tem esse curso" });
            var newCurses = curses.push(curse);
            infoUser = await user.findOneAndUpdate({ mail }, {
                curses,
                active: true
            });
            teste = await user.findOne({ mail });
            return res.json(teste);
        } else {
            return res.json({ retorno: "Não tem uma conta" });
        }
    },
    async store(req, res) {
        const { mail } = req.body;
        var teste = await user.findOne({ mail });
        if(!teste) {
            teste = await user.create({
                mail,
                active: false
            });
            return res.json(teste);
        } else {
            return res.json(teste);
        }
    }
};