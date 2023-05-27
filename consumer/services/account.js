const account = require("../module/account");
const datetime = require("./formatDate");

const handle = async (topic, data) => {
    let res = {}
    
    switch(topic) {
        case "OpenAccountEvent":
            res = await account.save(data);
                if(!res?.affectedRows){
                    console.log(datetime, topic, res);
                    break;
                }
            console.log(datetime, topic, data);
            break;
        case "DepositFundEvent":
            res = await account.findById(data.id);
            data.total = res[0]?.balance + data.balance
            
            res = await account.editBalance(data);
                if(!res?.affectedRows){
                    console.log(datetime, topic, res);
                    break;
                }
            
            delete data.total;   
            console.log(datetime, topic, data);
            break;
        case "WithdrawFundEvent":
            res = await account.findById(data.id);

            if(res[0]?.balance < data.balance ) console.log(datetime, topic, data, "ไม่สามารถทำรายการนี้ได้");

            data.total = res[0]?.balance - data.balance
            res = await account.editBalance(data);
                if(!res?.affectedRows){
                    console.log(datetime, topic, res);
                    break;
                }
            
            delete data.total;   
            console.log(datetime, topic, data);
            break;
        case "CloseAccountEvent":
            if(!data.id) { 
                console.log(datetime, topic, data, "id is not empty!");
                break;
            }

            res = await account.delete(data);
                if(!res?.affectedRows){
                    console.log(datetime, topic, res);
                    break;
                }
            
            delete data.total;   
            console.log(datetime, topic, data);
            break;
        default:
            break;
    }
}

module.exports = handle;