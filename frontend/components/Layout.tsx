import { ReactNode } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './Navibar';

interface Props {
    children?: ReactNode
}

function Layout({ children, ...props } : Props) {
    return (
        <div style={{height: '120vh'}} className="bg-secondary">
            <Navibar/>
            {children}
        </div>
    );
}

export default Layout;