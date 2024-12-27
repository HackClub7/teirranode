const lands = require('../data/lands');

exports.verifyLands = async (req, res) => {
    const { land_id, registration_no } = req.body;

    try {
        const land = lands.find(
            (m) =>
                m.land_id.toLowerCase() === land_id.toLowerCase() &&
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
