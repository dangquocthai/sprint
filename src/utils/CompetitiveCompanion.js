import express from 'express';
// import CodeManager from '@/utils/CodeManager';
// import CodeFile from '@/utils/CodeFile';

const app = express();

app.use(express.json());

class CompetitiveCompanion {

    constructor(){

        this._port = 10301; // 10501, 10601, 11311 :)
        
        app.post('/', (req, res) => {

            
            this.parseTasks(req.body);
        
            res.sendStatus(200);
        
        });
        
        app.listen(this._port, (err) => {
        
            if (err) {
                process.exit();
            }
        
        
        });

    }

    setPort(port){
        this._port = port;
    }

}

export default new CompetitiveCompanion();
