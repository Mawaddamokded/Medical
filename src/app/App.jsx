import { Helmet } from 'react-helmet';

//Custom Components

import HomePage from '../pages/home';

function App() {
    return (
        <div className='App'>
            <Helmet>
                <link 
                    href='https://fonts.googleapis.com/css2?family=Comfortaa:ital,wght@0,100;0,300;0,400;0,700;1,500&display=swap' 
                    rel='stylesheet'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,700&display=swap'
                    rel='stylesheet'
                />
            </Helmet>

            <HomePage />
        </div>
    );
}

export default App;
