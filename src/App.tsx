import React from 'react';
import TableViewer from 'components/table';
import { WrapperApp } from 'components/elementsIndexPage';
import Footer from 'components/footer';
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { rootReducer } from "utils/my-redux/rootReducer";
import { devToolsEnhancer } from 'redux-devtools-extension';
import Auth from 'components/auth';

const store = createStore(rootReducer, devToolsEnhancer({}));

const App = () => {
    return (
        <ReduxProvider store={store}>
            <WrapperApp>
                <TableViewer/>
                <Auth/>
                <Footer />
            </WrapperApp>
        </ReduxProvider>
    );
};

export default App;