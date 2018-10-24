pragma solidity ^0.4.2;

contract lendingRequest{


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

	mapping(address => transactionId[]) TransactionHistory;
	Person[] public registeredParticipants;

	struct verificationStatus{
		bool GovernmentAgencyCheck;
		bool CreditRating;
		bool GrantStatus;
	}


	mapping(address => verificationStatus) Status;


	Person public p;
	function lendingRequest() public{
	}

	function addLender(string name ) public{

	}

	function lendersList (address adr) public{

	}

	function DetailsLenderGovt (address adr) public{

	}

	function DetailsLenderCredit (address adr) public{

	} 

	function DetailstoBank (address adr)public{

	}

	function GrantStatusforBank (address adr)public{

	}

	function CreditRate (address adr) public{

	}

	function ValidGovtId (address adr) public{

	}

	function GrantStatusCheck (address adr) public{
		

	}
	
}