const lands = require('../data/lands');

exports.verifyLands = async (req, res) => {
    const { title_id, registration_no } = req.body;

    if (!title_id || !registration_no) {
        return res.status(400).json({ error: "title_id and registration_no are required" });
    }

    try {
        const land = lands.find(
            (m) =>
                m.title_id.toLowerCase() === title_id.toLowerCase() &&
                m.registration_no === registration_no
        );

        if (!land) {
            return res.status(404).json({ error: "Land does not exist" });
        }

        if (!land.verified) {
            return res.status(400).json({ error: "Land is not verified" });
        }

        res.status(200).json({
            message: "Land registered and verified",
            verified: true,
            details: land,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// module.exports = verifyLands;
