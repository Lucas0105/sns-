import express from 'express'

const router = express.Router();

export default (db) => {


    router.post('/insertData', async (req, res)=>{
        try{
            const sqlInsert = "INSERT INTO user_table (uId, password, name, gender, phone, address, birthday, agreeLocation) VALUES(?, ?, ?, ?, ?, ?, ?, ?)"
            await db.query(sqlInsert, [req.body.uId, req.body.password, req.body.name, req.body.gender, req.body.phone, req.body.address, req.body.birthday, req.body.agreeLocation], (err, result)=>{
                console.log(result);
                console.log(err);
            })
            res.json({r:'ok', uId: req.body.uId, password:req.body.password, agree:req.body.agreeLocation})
        }
        catch(e){
            res.send({err:e});
        }
    });
    
    router.post('/find', async (req, res)=>{
        try{
            console.log('find');
            const sqlFind = "SELECT * FROM user_table WHERE uId='"+req.body.uId+"' AND password='"+req.body.password + "'"
            await db.query(sqlFind, (err, result)=>{
                console.log(result);
                console.log(err);
                res.send({r:"ok", result:result});
            })
        }
        catch(e){
            res.send({err:e});
        }
    })

    return router;
}

