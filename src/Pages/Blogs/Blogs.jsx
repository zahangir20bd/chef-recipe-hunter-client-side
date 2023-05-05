import React from "react";

const Blogs = () => {
  return (
    <div className="bg-base-200 rounded-2xl">
      <div className="max-w-6xl mx-auto px-2 py-10 my-10">
        <div className=" mb-10 px-3 py-5">
          <h2 className="text-3xl font-semibold mb-3">
            Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p className="ps-2 pt-3 pb-3 text-justify">
            Uncontrolled components, also known as uncontrolled inputs, are UI
            components that have their own internal state and manage it
            themselves. For example, a text input field that has its own value
            state, and can be edited by the user without being explicitly
            controlled by the application.
          </p>
          <p className="ps-2 pt-3 pb-3 text-justify">
            On the other hand, controlled components are UI components that have
            their state managed by the parent component or application. The
            parent component or application passes down the current state of the
            component as a prop, and the component can only update its state
            when instructed to do so by the parent.
          </p>
          <p className="ps-2 pt-3 pb-3 text-justify">
            The main differences between the two types of components are:
          </p>
          <li className="ps-4">
            <span className="font-semibold">State management:</span>{" "}
            Uncontrolled components manage their state internally, while
            controlled components have their state managed by the parent
            component or application.
          </li>
          <li className="ps-4">
            <span className="font-semibold">Data flow:</span> Uncontrolled
            components can send data to the parent component or application
            through events, while controlled components can only update their
            state when instructed to do so by the parent.
          </li>
          <li className="ps-4">
            <span className="font-semibold">Predictability:</span> Controlled
            components offer greater predictability and consistency because
            their state is always synchronized with the parent component or
            application. In contrast, uncontrolled components can have
            unpredictable behavior if their internal state is not properly
            managed.
          </li>

          <p className="pt-3 text-justify">
            In summary, Controlled components are generally recommended as they
            provide better predictability and state control. However,
            uncontrolled components can be useful for simple form inputs where
            state management is not critical.
          </p>
        </div>
        <div className=" mb-10 px-3 py-5 rounded-lg ">
          <h2 className="text-3xl font-semibold mb-3">
            How to validate React props using PropTypes?
          </h2>
          <p className="pt-3 text-justify">
            React's PropTypes library is a powerful tool for validating the
            types and shapes of the props passed to the React components. To use
            PropTypes, first import it into the component using the statement
            import PropTypes from 'prop-types';. Then, define the PropTypes for
            the component by specifying the expected types and shapes of the
            props. For example, Developer can define a name prop that is
            expected to be a string and a age prop that is expected to be a
            number by using the following code:
          </p>

          <div className="mt-3">
            <p className="ps-10">{"MyComponent.propTypes = {"}</p>
            <p className="ps-12">{"name: PropTypes.string.isRequired,"}</p>
            <p className="ps-12">{"age: PropTypes.number.isRequired"}</p>
            <p className="ps-10">{"};"}</p>
          </div>
          <p className="pt-3 text-justify">
            Developer can also use PropTypes to define more complex shapes for
            their props. For instance, if their component expects an object with
            a name property that is a string and an age property that is a
            number, they can define the PropTypes like this:
          </p>
          <div className="mt-3">
            <p className="ps-10">{"MyComponent.propTypes = {"}</p>
            <p className="ps-12">{"person: PropTypes.shape({"}</p>
            <p className="ps-14">{"name: PropTypes.string.isRequired,"}</p>
            <p className="ps-14">{"age: PropTypes.number.isRequired"}</p>
            <p className="ps-12">{"}).isRequired"}</p>
            <p className="ps-10">{"};"}</p>
          </div>
          <p className="pt-3 text-justify">
            Using PropTypes can help you catch bugs early on in your development
            process by ensuring that your components receive the correct props.
            It also makes your code more readable by making it clear what types
            of props each component expects.
          </p>
        </div>
        <div className=" mb-10 px-3 py-5 rounded-lg">
          <h2 className="text-3xl font-semibold mb-3">
            Tell us the difference between nodejs and express js.
          </h2>
          <p className="pt-3 text-justify">
            Node.js and Express.js are both technologies used in web
            development, but they serve different purposes.
          </p>
          <p className="pt-3 text-justify">
            Node.js is a JavaScript runtime built on the V8 JavaScript engine
            used for building server-side applications. It allows developers to
            write server-side code in JavaScript, which can be used to build
            scalable network applications such as web servers, API servers, and
            chat servers.
          </p>
          <p className="pt-3 text-justify">
            Express.js, on the other hand, is a web application framework built
            on top of Node.js. It provides a set of features and tools for
            building web applications and APIs more easily and efficiently, such
            as routing, middleware, and template rendering.
          </p>
          <p className="pt-3 text-justify">
            In simpler terms, Node.js is the foundation on which web
            applications are built, while Express.js is a framework that
            provides a set of tools and features for building web applications
            more easily and efficiently on top of Node.js.
          </p>
          <p className="pt-3 text-justify">
            To summarize, Node.js is a JavaScript runtime for building
            server-side applications, while Express.js is a web application
            framework built on top of Node.js that provides additional tools and
            features for building web applications more efficiently.
          </p>
        </div>
        <div className=" mb-10 px-3 py-5 rounded-lg ">
          <h2 className="text-3xl font-semibold mb-3">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p className="pt-3 text-justify">
            In React, a custom hook is a reusable piece of code that
            encapsulates logic that can be shared across components. Custom
            hooks are essentially JavaScript functions that allow developers to
            extract component logic into reusable functions that can be used
            across multiple components.
          </p>
          <p className="pt-3 text-justify">
            A custom hook can be created when a certain piece of logic needs to
            be used across multiple components, but cannot be easily extracted
            into a shared component or utility function. Custom hooks can also
            be used to abstract away complex or repetitive logic, making it
            easier to manage and test.
          </p>
          <p className="pt-3 text-justify">
            For example, suppose a developer have multiple components that fetch
            data from an API using the fetch function. Rather than repeating the
            same code in each component, then developer can create a custom hook
            called useFetch that encapsulates the data fetching logic. This hook
            can be used across multiple components to fetch data, making the
            code more reusable and maintainable.
          </p>
          <p className="pt-3 text-justify">
            To create a custom hook in React, developer need to follow the
            naming convention of starting the function name with the word use,
            and then encapsulate the desired logic inside the function body. The
            custom hook should then return the data or functionality that can be
            used by the components that use the hook.
          </p>
          <p className="pt-3 text-justify">
            In summary, custom hooks in React allow developers to extract
            reusable logic from components and encapsulate it into reusable
            functions. Custom hooks can be used to abstract away complex or
            repetitive logic, making it easier to manage and test, and
            ultimately lead to more maintainable and reusable code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
