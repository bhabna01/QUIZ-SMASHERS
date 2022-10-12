import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5'>
            <div className='container-fluid question w-50 border mb-5 shadow-lg p-3 bg-body rounded'>
                <h1>What is the purpsose of react router?</h1>
                <p>React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
            </div>
            <div  className='container-fluid question w-50 border mb-5 shadow-lg p-3 bg-body rounded'>
                <h1>How does context api works?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
            </div>
            <div  className='container-fluid question w-50 border mb-5 shadow-lg p-3 bg-body rounded'>
                <h1>Explain userRef Hook in React js.</h1>
                <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 

Syntax:

const refContainer = useRef(initialValue);

The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>
        </div>
    );
};

export default Blog;