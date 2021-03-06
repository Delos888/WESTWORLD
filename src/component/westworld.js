import serojs from 'serojs'
import seropp from 'sero-pp'
import BigNumber from 'bignumber.js'
import {decimals} from './utils'
import {Toast} from 'antd-mobile'

const config = {
    name: "WESTWORLD",
    contractAddress: "3cbvmyHmypQ5TFqJBB9jSVxxDUeFWQc3dwiJ4GwxJWfxPqtdkodSDjvyHtXBRhyU3EQoPLijDp7w8RjcqoFWrgcK",
    github: "https://github.com/Delos888/WESTWORLD",
    author: "Delos888",
    url: document.location.href,
    logo: document.location.protocol + '//' + document.location.host + '/westworld/logo.png'
}

const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "subordinateInfo",
		"outputs": [
			{
				"name": "codes",
				"type": "string"
			},
			{
				"name": "counts",
				"type": "uint256[]"
			},
			{
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"name": "rewards",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "code",
				"type": "string"
			}
		],
		"name": "invest",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "info",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "registerNode",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newMarketAddr",
				"type": "address"
			}
		],
		"name": "transferMarketship",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "code",
				"type": "string"
			}
		],
		"name": "details",
		"outputs": [
			{
				"name": "selfCode",
				"type": "string"
			},
			{
				"name": "parentCode",
				"type": "string"
			},
			{
				"name": "canWithdraw",
				"type": "uint256"
			},
			{
				"name": "values",
				"type": "uint256[]"
			},
			{
				"name": "timestamps",
				"type": "uint256[]"
			},
			{
				"name": "returnIndex",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_marketAddr",
				"type": "address"
			},
			{
				"name": "_codeServiceAddr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousMarketAddr",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newMarketAddr",
				"type": "address"
			}
		],
		"name": "MarketshipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
];
const caddress = config.contractAddress;
const contract = serojs.callContract(abi, caddress);

class WestWorld {

    constructor() {
        let self = this;
        self.OnInit = new Promise(
            (resolve, reject) => {
                seropp.init(config, function (rest) {
                    if (rest === 'success') {
                        console.log("init success");
                        return resolve()
                    } else {
                        return reject(rest)
                    }
                })
            }
        )
    }

    accountDetails(pk, callback) {
        seropp.getAccountDetail(pk, function (item) {
            let balance = "0";
            if (item.Balance.has("SERO")) {
                balance = decimals(new BigNumber(item.Balance.get("SERO")));
            }
            callback({pk: item.PK, mainPKr: item.MainPKr, name: item.Name, balance: balance})
        });
    }

    accountList(callback) {
        seropp.getAccountList(function (data) {
            let accounts = [];
            data.forEach(function (item, index) {
                let balance = "0";
                if (item.Balance.has("SERO")) {
                    balance = decimals(new BigNumber(item.Balance.get("SERO")));
                }
                accounts.push({pk: item.PK, mainPKr: item.MainPKr, name: item.Name, balance: balance})
            });
            callback(accounts)
        });
    }


    details(code, from, callback) {
        let self = this;
        this.callMethod('details', from, [code], function (vals) {
            let detail;
            if (vals === "0x0") {
                detail = {
                    code: "",
                    parentCode: "",
                    childCodes: [],
                    canWithdraw: "0",
                    records: [],
                    returnIndex: 0
                }
            } else {
                let records = [];
                for (let i = vals[3].length - 1; i >= 0; i--) {
                    records.push({
                        value: new BigNumber(vals[3][i]),
                        timestamp: parseInt(vals[4][i]),
                    });
                }
                detail = {
                    code: vals[0],
                    parentCode: vals[1],
                    canWithdraw: decimals(vals[2]),
                    records: records,
                    returnIndex: parseInt(vals[5])
                }
            }
            self.subordinateInfo(from, function (info) {
                detail.subordinateInfo = info;
                callback(detail);
            });
        });
    }

    info(from, callback) {
        this.callMethod('info', from, [], function (vals) {
            callback({
                closureTime: vals[0].toNumber(),
                balance: vals[1],
                fundAmount: vals[2],
                investorCount: parseInt(vals[3]),
                luckyCodes: vals[4].split(" ")
            });
        });
    }

    subordinateInfo(from, callback) {
        this.callMethod('subordinateInfo', from, [], function (vals) {
            let codes = [];
            let items = new Array();
            if (vals !== "0x0") {
                if (vals[0] !== "") {
                    codes = vals[0].split(" ");
                }

                for (let i = 0; i < 10; i++) {
                    let count = vals[1][i];
                    if (count.isZero()) {
                        break;
                    }
                    items.push({count: count.toString(), amount: vals[2][i].toString()});
                }
            }
            callback({
                childsCode: codes,
                items: items
            });
        });
    }

    invest(from, mainPKr, value, code, callback) {
        this.executeMethod('invest', from, mainPKr, [code], value, callback);
    }

    withdraw(from, mainPKr, callback) {
        this.executeMethod('withdraw', from, mainPKr, [], 0, callback);
    }

    callMethod(_method, from, _args, callback) {
        let that = this;
        let packData = contract.packData(_method, _args);
        let callParams = {
            from: from,
            to: caddress,
            data: packData
        }

        seropp.call(callParams, function (callData) {
            if (callData !== "0x") {
                let res = contract.unPackData(_method, callData);
                if (callback) {
                    callback(res);
                }
            } else {
                callback("0x0");
            }
        });
    }


    executeMethod(_method, from, mainPKr, args, value, callback) {
        let that = this;

        let packData = contract.packData(_method, args);
        let executeData = {
            from: from,
            to: caddress,
            value: "0x" + value.toString(16),
            data: packData,
            gasPrice: "0x" + new BigNumber("1000000000").toString(16),
            cy: "SERO",
        };
        let estimateParam = {
            from: mainPKr,
            to: caddress,
            value: "0x" + value.toString(16),
            data: packData,
            gasPrice: "0x" + new BigNumber("1000000000").toString(16),
            cy: "SERO",
        }
        seropp.estimateGas(estimateParam, function (gas,err) {
            if (err) {
                Toast.fail("Unknow Gas Limit")
            } else {
                executeData["gas"] = gas;
                seropp.executeContract(executeData, function (res) {
                    if (callback) {
                        callback(res)
                    }
                })
            }
        });
    }
}

const westworld = new WestWorld();
export default westworld;
