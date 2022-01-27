import express from 'express'

const router = express.Router();

export default (db) => {


    router.get('/insert', async (req, res)=>{
        try{
            const sqlInsert = "INSERT INTO board_table (title, ID, regday, view, content) VALUES(?, ?, ?, ?, ?)"
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
    
    router.get('/find', async (req, res)=>{
        try{
            console.log('find');
            console.log('adsf',req.query.p)
            const sqlFind = "SELECT *  FROM board_table WHERE title LIKE '%"+req.query.q+"%' ORDER BY boardNo DESC LIMIT "+ (req.query.p-1)*10 +" , 10"
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
    router.get('/findFirst', async (req, res)=>{
        try{
            console.log('find');
            const sqlFind = "SELECT COUNT(*) AS contentNumber FROM board_table WHERE title LIKE '%"+req.query.q+"%'"
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
    router.get('/detaile', async (req, res)=>{
        try{
            const sqlFind = "UPDATE board_table SET view = view + 1 WHERE boardNo ="+req.query.q
            await db.query(sqlFind)
        }
        catch(e){
            res.send({err:e});
        }
        try{
            console.log('detaile');
            const sqlFind = "SELECT * FROM board_table WHERE boardNo ="+req.query.q
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

    
    router.get('/insertData', async (req, res)=>{
        console.log('insert')

        let today = new Date();   
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        let regday = year+"-"+month+"-"+date;
        console.log(req.query.title)
        try{
            const sqlInsert = "INSERT INTO board_table (title, ID, regday, content) VALUES(?, ?, ?, ?)"

            await db.query(sqlInsert, [req.query.title, req.query.name, regday, req.query.content])
        }
        catch(e){
            res.send({err:e});
        }
    })
    
    return router;
}

