const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const crypto = require('crypto');
const {exec} = require('child_process')

router.post('/payload', (req,res)=> {
  const payload = req.body;

  if (payload.ref === 'refs/heads/main') {
    const cmd = 'cd /home/hwanginho/dev/api-docs && git pull && sudo systemctl restart redoc.service'
    exec(cmd, { env: { ...process.env, HOME: '/home/hwanginho' } }, (error, stdout, stderr) => {
      if (error) {
          console.error(`exec error: ${error}`);
          res.status(500).send(`exec error: ${error}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      res.status(200).json({ status: 'success' });
  });
  }
})

router.use((err,req,res,next)=> {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

module.exports = router;