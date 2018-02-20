/**
 * @param {org.acme.model.ApproveReject} approveReject
 * @transaction
 */
function verifyContract(approveReject) {
    if (approveReject.company.emissions > approveReject.ngo.maxEmissions) {
        approveReject.contract.satisfied = false;
    } else {
        approveReject.contract.satisfied = true; 
    }
    
    return getAssetRegistry('org.acme.model.Contract')
        .then(function (assetRegistry) {
            
            return assetRegistry.update(approveReject.contract);
        });
}

/**
 * @param {org.acme.model.TransferCoin} transferCoin
 * @transaction
 */
function writeContract(transferCoin) {
  
  if (transferCoin.contract.satisfied == true) {
        transferCoin.company.walletValue += transferCoin.contract.payout;
        transferCoin.escrow.value = transferCoin.escrow.value - transferCoin.contract.payout;
        getAssetRegistry('org.acme.model.Escrow')
            .then(function (assetRegistry) {
                assetRegistry.update(transferCoin.escrow);
        });
        getParticipantRegistry('org.acme.model.Company')
            .then(function (participantRegistry) {
                participantRegistry.update(transferCoin.company);
        }); 
  }
  
}

/*
* @param {org.acme.model.addEscrow} addEscrow
* @transaction
*/
function addToEscrow(addEscrow) {
    addEscrow.escrow.value += 500
    getAssetRegistry('org.acme.model.Escrow')
        .then(function (assetRegistry) {
            assetRegistry.update(addEscrow.escrow);
    });
}

  
  
    



