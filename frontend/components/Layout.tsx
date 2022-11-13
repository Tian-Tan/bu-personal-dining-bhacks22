import { ReactNode } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './Navibar';

interface Props {
    children?: ReactNode
}

function Layout({ children, ...props } : Props) {
    return (
        <div>
            <Navibar/>
            <div style={{ marginTop: '10vh' }}/>
            {children}
        </div>
    );
}

export default Layout;