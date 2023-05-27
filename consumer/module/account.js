const connection = require("../config/mysql");

const methods = {
    save({ account_holder = '',account_type = 0, balance = 0}){
        return new Promise(async (resolve, reject) => {
            try {
              const [rows, fields] = await connection.execute('INSERT INTO `bank_account` ( account_holder, account_type, balance ) VALUES ( ?, ?, ? )', [account_holder, account_type, balance]);
              resolve(rows)
            } catch (error) {
              reject(error)
            }
          })   
    },

    findAll(){
        return new Promise(async (resolve, reject) => {
            try {
              const [rows, fields] = await connection.execute('SELECT * FROM `bank_account`');
              resolve(rows)
            } catch (error) {
              reject(error)
            }
          })
    },

    delete({id}){
        return new Promise(async (resolve, reject) => {
            try {
              const [rows, fields] = await connection.execute('DELETE FROM `bank_account` WHERE `id` = ?', [id]);
              resolve(rows)
            } catch (error) {
              reject(error)
            }
          })
    },

    findById(id){
        return new Promise(async (resolve, reject) => {
            try {
              const [rows, fields] = await connection.execute('SELECT * FROM `bank_account` WHERE `id` = ? ', [id]);
              resolve(rows)
            } catch (error) {
              reject(error)
            }
          })
    },

    editBalance({ id, total }){
      return new Promise(async (resolve, reject) => {
          try {
            const [rows, fields] = await connection.execute('UPDATE `bank_account` SET `balance` = ? WHERE `id` = ? ', [total, id]);
            resolve(rows)
          } catch (error) {
            reject(error)
          }
        })
    },
}

module.exports = { ...methods }