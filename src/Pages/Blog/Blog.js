import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="px-5 pt-5">
                <h1 className="fs-4 font-bold">Q1:What are the different ways to manage a state in a React application?</h1> <br />
                <p className="fs-5 font-semibold">The Four Kinds of React State to Manage
                    When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                    There are four main types of state you need to properly manage in your React apps:

                    1.Local state
                    2.Global state
                    3.Server state
                    4.URL state
                </p> <br />

                <h1 className="fs-4 font-bold">Q2:How does prototypical inheritance work?</h1> <br />
                <p className="fs-5 font-semibold">Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p> <br />

                <h1 className="fs-4 font-bold">Q3:What is a unit test? Why should we write unit tests?</h1> <br />
                <p className="fs-5 font-semibold">Ans: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p> <br />

                <h1 className="fs-4 font-bold">Q4:React vs. Angular vs. Vue?</h1> <br />
                <p className="fs-5 font-semibold">Ans: Angular:
                    <br />

                    New features like enhanced RXJS, faster compilation (in under 3 seconds), new HttpClient launch.
                    Detailed documentation that allows getting all necessary information for the individual developer without asking his colleagues. However, this requires more time for education.
                    Two-way data binding that enables singular behavior for the app which minimized risks of possible errors.
                    MVVM (Model-View-ViewModel) that allows developers to work separately on the same app section using the same set of data.
                    Dependency injection of the features related to the components with modules and modularity in general.
                    <br /> <br />

                    ReactJS:
                    <br />

                    Easy to learn. React is much easier to learn because of its simplicity in terms of syntax. Engineers just need to recall their HTML writing skills and that’s it. No need to deeply learn TypeScript like in Angular.
                    High level of flexibility and maximum of responsiveness.
                    Virtual DOM (document object model) that allows arranging documents in HTML, XHTML, or XML formats into a tree from which is better acceptable by web browsers while parsing different elements of the web app.
                    Combined with ES6/7, ReactJS can work with the high load in an easy way.
                    Downward data binding which means that with this kind of data flow the child elements cannot affect parent data.
                    100% open source JavaScript library which get a lot of everyday updates and improvements according to the contributions of developers all over the world.
                    Absolutely light-weighted because the data performing on the user side can be easily represented on the server side simultaneously.
                    Migrating between versions is generally very easy, with Facebook providing “codemods” to automate much of the process.

                    <br /> <br />

                    Vue.js:
                    <br />

                    Empowered HTML. This means that Vue.js has many similar characteristics with Angular and this can help to optimize HTML blocks handling with a usage of different components.
                    Detailed documentation. Vue.js has very circumstantial documentation which can fasten learning curve for developers and save a lot of time to develop an app using only the basic knowledge of HTML and JavaScript.
                    Adaptability. It provides a rapid switching period from other frameworks to Vue.js because of the similarity with Angular and React in terms of design and architecture.
                    Awesome integration. Vue.js can be used for both building single-page applications and more difficult web interfaces of apps. The main thing is that smaller interactive parts can be easily integrated into the existing infrastructure with no negative effect on the entire system.
                    Large scaling. Vue.js can help to develop pretty large reusable templates that can be made with no extra time allocated for that according to its simple structure.
                    Tiny size. Vue.js can weight around 20KB keeping its speed and flexibility that allows reaching much better performance in comparison to other frameworks.
                    
                </p>


            </section>
        </div>
    );
};

export default Blog;