/*
  _______  __  .___________.      .______    __    __   __          _______. _______ 
 /  _____||  | |           |      |   _  \  |  |  |  | |  |        /       ||   ____|
|  |  __  |  | `---|  |----`______|  |_)  | |  |  |  | |  |       |   (----`|  |__   
|  | |_ | |  |     |  |    |______|   ___/  |  |  |  | |  |        \   \    |   __|  
|  |__| | |  |     |  |           |  |      |  `--'  | |  `----.----)   |   |  |____ 
 \______| |__|     |__|           | _|       \______/  |_______|_______/    |_______|
                                                                                    
*/
import app from './app';

const host: string = process.env.HOST ?? 'localhost';
const port: number = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

export default app;
