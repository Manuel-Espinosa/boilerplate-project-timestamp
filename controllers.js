exports.handleDateRequest = (req, res) => {
    let dateString = req.params.date;
    let date;

    if (!dateString) {
        date = new Date();
    } else {
        if (!isNaN(dateString)) {
            date = new Date(parseInt(dateString));
        } else {
            date = new Date(dateString);
        }
    }

    if (isNaN(date.getTime())) {
        res.json({ error: "Invalid Date" });
    } else {
        res.json({ 
            unix: date.getTime(), 
            utc: date.toUTCString() 
        });
    }
};