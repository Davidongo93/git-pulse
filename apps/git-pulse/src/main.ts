/*
  _______  __  .___________.      .______    __    __   __          _______. _______ 
 /  _____||  | |           |      |   _  \  |  |  |  | |  |        /       ||   ____|
|  |  __  |  | `---|  |----`______|  |_)  | |  |  |  | |  |       |   (----`|  |__   
|  | |_ | |  |     |  |    |______|   ___/  |  |  |  | |  |        \   \    |   __|  
|  |__| | |  |     |  |           |  |      |  `--'  | |  `----.----)   |   |  |____ 
 \______| |__|     |__|           | _|       \______/  |_______|_______/    |_______|
                                                                                    
*/


import express from 'express';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
