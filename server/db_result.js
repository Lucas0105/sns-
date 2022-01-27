import express from 'express'

const router = express.Router();

export default (db) => {
        router.get('/location', async (req, res)=>{
            try{
                        const sqlFind = "SELECT sum(food_like) AS food_like FROM location_table WHERE food_name = '"+req.query.q+"' group by food_location";
                        
                        await db.query(sqlFind, (err, result)=>{
                            if (err){
                                res.send({r:"faile", err:err});
                            }
                            else{
                                res.send({r:"ok", result:result});
                            }
                        })
                    }
                    catch(e){
                        res.send({err:e});
                    }
        });

        router.get('/time', async (req, res)=>{
            try{
                        const sqlFind = "SELECT food_name, date, sum(number) AS num FROM time_table where food_name like '"+req.query.q+"' group by date";
                        
                        await db.query(sqlFind, (err, result)=>{
                            if (err){
                                res.send({r:"faile", err:err});
                            }
                            else{
                                res.send({r:"ok", result:result});
                            }
                        })
                    }
                    catch(e){
                        res.send({err:e});
                    }
        });
        router.get('/sentiment', async (req, res)=>{
            try{
                        const sqlFind = "SELECT * FROM sentiment_table WHERE food_name = '"+req.query.q+"'";
                        
                        await db.query(sqlFind, (err, result)=>{
                            if (err){
                                res.send({r:"faile", err:err});
                            }
                            else{
                                res.send({r:"ok", result:result});
                            }
                        })
                    }
                    catch(e){
                        res.send({err:e});
                    }
        });
    return router;
}