import { createRoot } from 'react-dom/client';
import RouterComponent from './components/Router';
import './index.scss';

const root = createRoot(document.getElementById('root'));
root.render(<RouterComponent />);