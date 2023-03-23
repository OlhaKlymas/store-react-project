import { Children } from 'react';
import Header from '../components/Header';

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <main className='container main'>
                {Children.map(children, child =>
                    <section>{child}</section>
                )}
            </main>
        </>
    )
}

export default MainLayout;