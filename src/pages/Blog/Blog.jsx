import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Blog.css";
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();
const options = {
  orientation: "landscape",
  unit: "in",
  format: [20, 15],
};

const Blog = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div ref={ref}>
        <div className='blog-banner'>
          <h2>Blog</h2>
        </div>
        <div className='text-center mt-5'>
          <ReactToPdf
            targetRef={ref}
            filename='blog.pdf'
            options={options}
            x={0.5}
            y={0.5}
            scale={0.8}
          >
            {({ toPdf }) => (
              <button className='btn btn-favorite border-none' onClick={toPdf}>
                Create a pdf
              </button>
            )}
          </ReactToPdf>
        </div>
        <div className='wrapper'>
          <div className='ques-ans'>
            <h2>
              <span>Ques No 1:</span>Tell us the differences between
              uncontrolled and controlled components.
            </h2>
            <p>
              <span>Ans:</span> A controlled component manage by React state and
              A uncontrolled component manage by its own internal state. A
              controlled component receives its current value and an update
              callback via props, and the parent component manages the state of
              the component. An uncontrolled component, maintains its own
              internal state, and when the user interacts with the component, it
              updates its own state, which in turn updates the component's
              value.
            </p>
          </div>
          <div className='ques-ans'>
            <h2>
              <span>Ques No 2:</span>How to validate React props using
              PropTypes.
            </h2>
            <div>
              <span>Ans:</span>{" "}
              <p>
                The PropTypes utility exports a wide range of validators for
                configuring type definitions. Below are the validators for the
                basic data types:
              </p>
              <p>1. PropTypes.any: The prop can be of any data type</p>
              <p>2. PropTypes.bool: The prop should be a Boolean</p>
              <p>3. PropTypes.number: The prop should be a number</p>
              <p>4. PropTypes.string: The prop should be a string</p>
              <p> 5. PropTypes.func: The prop should be a function</p>
              <p>6. PropTypes.array: The prop should be an array</p>
              <p>7. PropTypes.object: The prop should be an object</p>
              <p>8. PropTypes.symbol: The prop should be a symbol</p>
            </div>
          </div>
          <div className='ques-ans'>
            <h2>
              <span>Ques No 3:</span>Tell us the difference between nodejs and
              express js.
            </h2>
            <p>
              <span>Ans:</span> NodeJS is the package, which provides the
              JavaScript run-time environment, whereas Express is a framework
              that sits on top of NodeJS and helps us to handle requests and
              responses.
            </p>
          </div>
          <div className='ques-ans'>
            <h2>
              <span>Ques No 4:</span>What is a custom hook, and why will you
              create a custom hook?
            </h2>
            <p>
              <span>Ans:</span> Custom hook is a reusable function that help to
              add special and unique functionality in react application. A
              custom hook starts with "use". Custom React JS hooks can help developers save time, are reliable, reusable, and make the code clean.
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Blog;
