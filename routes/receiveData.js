const express = require('express');
const router = express.Router();

// Get Articles Page
router.get('/receivedata', function(req, res){



  // https://www.customercontactinfo.com/user_callback.jsp#
  //     access_token=00Dx0000000BV7z%21AR8AQBM8J_xr9kLqmZIRyQxZgLcM4HVi41aGtW0qW3JCzf5xd
  // TGGGSoVim8FfJkZEqxbjaFbberKGk8v8AnYrvChG4qJbQo8&
  // refresh_token=5Aep8614iLM.Dq661ePDmPEgaAW9Oh_L3JKkDpB4xReb54_pZfVti1dPEk8aimw4Hr9ne7VXXVSIQ%3D%3D&
  // instance_url=https://yourInstance.salesforce.com&
  // id=https://login.salesforce.com%2Fid%2F00Dx0000000BV7z%2F005x00000012Q9P&
  // issued_at=1278448101416&
  // signature=miQQ1J4sdMPiduBsvyRYPCDozqhe43KRc1i9LmZHR70%3D&
  // scope=id+api+refresh_token&
  // token_type=Bearer&
  // state=mystate

  const accessToken = req.params.access_token;
  const refreshToken = req.params.refresh_token;
  const instanceUrl = req.params.instance_url;
  const id = req.params.id;
  const issuesAt = req.params.issued_at;
  const signature = req.params.signature;
  const scope = req.params.scope;
  const tokenType = req.params.token_type;
  const state = req.params.state;



  res.render('receivedData', {accessToken:accessToken,refreshToken:refreshToken,instanceUrl,id,issuesAt,signature,scope,tokenType,state});
});

module.exports = router;