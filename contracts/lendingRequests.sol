pragma solidity ^0.4.2;

contract lendingRequests{


	// Data Structures for storage
	struct Person{
		string name;
		string addres;
		uint256 aadhar;
		uint pan;
		address Blockaddr;
	}
	// Unique TransactionId
	// Transaction History
	struct transactionId{
		uint amount;
		uint tid;
		bool cleared;
		uint duration;
		uint amountRemaining;
		bool defaultStatus;
	}

	// Mapping of Transaction with History
	mapping(address => transactionId[]) TransactionHistory;
	Person[] public registeredParticipants;

	// VerificationStatus DataStructures used for total status at every status
	struct verificationStatus{
		bool GovernmentAgencyCheck;
		uint CreditRating;
		bool GrantStatus;
	}

	// Mapping with each address
	mapping(address => verificationStatus) Status;
	// Count the lenders in the total Blockchain
	uint lenderCount = 0;
	Person public p;
	function lendingRequests() public{

	}
	// 
	function addLender(string name ,string addres,uint aadhar,uint pan) public {
		Person memory p = Person({
			name : name,
			addres : addres,
			aadhar : aadhar,
			pan : pan,
			Blockaddr : msg.sender
			});
		registeredParticipants.push(p);
	}

	// Getter function to give the list of Lenders to the Government
	function DetailsLenderGovt () public returns(Person[]){
		return registeredParticipants;
	}

	// Getter function to give the list of lender to the Government
	function DetailsLenderCredit (address adr) public returns(transactionId){
		// Return mapping for the transaction Details
		return TransactionHistory[adr];
	} 

	function DetailstoBank (address adr)public returns(VerificationStatus){
		return Status[adr];
	}

	//GrantStatus by the Bank 
	function GrantStatusforBank (address adr,bool Grant)public{
		Status[adr].GrantStatus = Grant;
	}

	function CreditRate (address adr,uint Rating) public{
		Status[adr].CreditRate  = Rating;
	}

	function ValidGovtId (address adr, bool check) public{
		Status[adr].GovernmentAgencyCheck = check;
	}

	function GrantStatusCheck (address adr) public return(bool){
		return Status[adr].GrantStatus;
	}
	
}