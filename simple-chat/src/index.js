import './index.css';
import { handleRouteChange } from './utils/navigation';

window.addEventListener('popstate', handleRouteChange);
window.onload = handleRouteChange;
