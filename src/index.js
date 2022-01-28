import { config } from 'dotenv';
import app from './App';
import { development } from './database/config/config'

config(); // This enables dotenv configulations

const port = 4000;
const server = app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
export default app;