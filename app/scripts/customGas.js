// For token sale holders:
// 1. Add the address users are sending to
// 2. Add the gas limit users should use to send successfully (this avoids OOG errors)
// 3. Add any data if applicable
// 4. Add a message if you want.

// Token Calendar:
// http://www.tokensalecalendar.com/
// If you aren't on the above, you should get on it.

//   msg:        '⚠ The Status.im Contribution Period has ENDED. Please stop clogging the blockchain with your FOMO. Thanks! 🤗'


module.exports = [
{
  // DCORP
  to:         '0xD42433A8a0A1CEB73c8ff4e432463e2ee109039d',
  gasLimit:   100000,
  data:       '',
  msg:        'DCORP. Ends June 30, 2017.'
},
{
  // Status
  to:         '0x55d34b686aa8C04921397c5807DB9ECEdba00a4c',
  gasLimit:   200000,
  data:       '',
  msg:        'DONT SEND UNTIL BLOCK 3903900!!!! Status.im https://contribute.status.im ______________________________________________________________________________________________________________________ STARTS: Block 3903900______________________________________________________________________ GAS_PRICE:_50 GWEI. Change via slider in the footer_____________________________________________________________________ GAS_LIMIT:_200000___________________________________________________________________________________________________ NOT_LOADING:_Change the node in upper right corner to ETH (Etherscan.io)_____________________________________________ SUPPORT:_https://www.reddit.com/r/statusim/   https://twitter.com/ethstatus'
},
{
  // Status
  to:         '0x0000',
  gasLimit:   200000,
  data:       '',
  msg:        'Fun Fair. Starts June 22, 2017'
},
{
  // TenX PAY
  to:         '0xd43d09ec1bc5e57c8f3d0c64020d403b04c7f783',
  gasLimit:   130000,
  data:       '',
  msg:        'TenX PAY Token Sale. Start: June 24, 2017, 1pm UTC'
},
{
  // OpenANX
  to:         '0x0000',
  gasLimit:   200000,
  data:       '',
  msg:        'OpenANX. Starts June 22, 2017.'
},
{
  // Adchain
  to:         '0x0000',
  gasLimit:   200000,
  data:       '',
  msg:        'Adchain. Starts June 26, 2017.'
},
{
  // OmiseGo
  to:         '0x0000',
  gasLimit:   200000,
  data:       '',
  msg:        'OmiseGo. Starts June 27, 2017.'
},
{
  // Santiment
  to:         '0x0000',
  gasLimit:   200000,
  data:       '',
  msg:        'Santiment. Starts June 30, 2017.'
},
{
  // Moeda
  to:         '0x4870E705a3def9DDa6da7A953D1cd3CCEDD08573',
  gasLimit:   200000,
  data:       '',
  msg:        'Moeda. Ends at block 4,111,557.'
},
{
  // FAKE STATUS
  to:         '0xc9f32ce1127e44c51cbd182d6364f3d707fd0d47',
  gasLimit:   -1,
  data:       '',
  msg:        '⚠ DO NOT SEND. THIS IS *** NOT *** THE ADDRESS FOR STATUS!!'
},
]

