import express from 'express'

const router = express.Router();

export default (db) => {
        router.get('/find', async (req, res)=>{
            try{
                        const sqlFind = "SELECT * FROM food_table WHERE food_place LIKE '%"+req.query.q+"%' ORDER BY food_like DESC LIMIT "+ (req.query.page-1)*10 +", 10"
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
        router.get('/allPlace', async (req, res)=>{
            try{
                        const sqlFind = "SELECT food_name, SUM(food_like) as food_like FROM food_table GROUP BY food_name ORDER BY SUM(food_like) DESC LIMIT 10;"
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
        router.get('/seoulPlace', async (req, res)=>{
            try{
                const sqlFind = "SELECT food_name, SUM(food_like) as food_like FROM food_table WHERE food_place LIKE '%서울%' GROUP BY food_name ORDER BY SUM(food_like) DESC LIMIT 10;"
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
        router.get('/queryPlace', async (req, res)=>{
            try{
                const sqlFind = "SELECT food_name, SUM(food_like) as food_like FROM food_table WHERE food_place LIKE '%"+req.query.q+"%' GROUP BY food_name ORDER BY SUM(food_like) DESC LIMIT 10;"
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