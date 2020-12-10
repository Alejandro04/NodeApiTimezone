const express = require('express');
const moment = require('moment-timezone');
const router = express.Router();

/**
 * @route   GET api/timezone
 * @desc    Get timezone
 * @access  Public
 */

router.post('/api/timezone', async (req, res) => {

  try {
    const today = calculateToday()
    const timezone = calculateTimeZone(req.body.utc)
    const base = moment.tz(`${today} ${req.body.hour}`, "America/Santiago");
    const response = base.clone().tz(timezone)
    res.json({
      "time": response.format().substr(11, 8),
      "timezone": timezone
    });
  } catch (error) {
    res.json(error);
  }
})


function calculateToday() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = yyyy + '-' + dd + '-' + mm;
  return today
}

function calculateTimeZone(UTC) {
  let timezone = ""
  // faltan: +11 +6 -2 -9 -10 -11
  if (UTC === 12) { timezone = "Pacific/Auckland" }
  if (UTC === 10) { timezone = "Pacific/Port_Moresby" }
  if (UTC === 9) { timezone = "Asia/Tokyo" }
  if (UTC === 8) { timezone = "Asia/Shanghai" }
  if (UTC === 7) { timezone = "Asia/Hovd" }
  if (UTC === 5) { timezone = "Asia/Kolkata" }
  if (UTC === 4) { timezone = "Asia/Muscat" }
  if (UTC === 3) { timezone = "Asia/Riyadh" }
  if (UTC === 2) { timezone = "Europe/Helsinki" }
  if (UTC === 1) { timezone = "Europe/Berlin" }
  if (UTC === -3) { timezone = "America/Santiago" }
  if (UTC === -4) { timezone = "America/Caracas" }
  if (UTC === -5) { timezone = "America/Bogota" }
  if (UTC === -6) { timezone = "America/Mexico_City" }
  if (UTC === -7) { timezone = "America/Denver" }
  if (UTC === -8) { timezone = "America/Los_Angeles" }

  return timezone
}


module.exports = router;