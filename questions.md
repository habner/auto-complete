1. What is the difference between Component and PureComponent?
   Give an example where it might break my app.

   The difference is that PureComponent handles the `ShouldComponentUpdate` method on its own, comparing the state and props of the component to prevent a rerender.
   The thing is that it compares by reference and not by value, so in a case that a Parent component pass a prop to a Child PureComponent that changes the reference, the child will trigger a rerender anyway.


2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

   Context is used to pass information down the React tree without having to pass props to every child node. But if some intermediary component with ShouldComponentUpdate blocks the rerender, the context will not be passed to it nor its children, which can break the functionality you desire.

3. Describe 3 ways to pass information from a component to its PARENT.

   I only know one. You can define callback function in the parent component and pass it to the child as a prop.

4. Give 2 ways to prevent components from re-rendering.

   The first one was mentioned early, which is using the `ShouldComponentUpdate`. The second way is to use React.memo(COMPONENT), which memoizes the component.

5. What is a fragment and why do we need it? Give an example where it might break my app.

   What I know is that fragments are used when you want to render more than one element without wrapping them in another element. I couldn´t think of an example where it breaks the app.

6. Give 3 examples of the HOC pattern.

   I don´t know if I got this question right. But I´m giving three examples of where HOC can be used.

   1 - Tooltip Component
   2 - Infinite Scroll
   3 - Bsically anything you want to add the same logic

7. what's the difference in handling exceptions in promises, callbacks and async...await.

   Promises -> Using promise.catch()
   Async/Await -> Using try {} catch {}
   Callbacks -> Passing the error to the first argument.
   Ex:
   ... {
     if (somethingWrong) { callback(new Error()) }
     else { callback(null, value) }
   }
   
8. How many arguments does setState take and why is it async.

  `setState` takes two arguments, the first one can be an object or a function and the second one is a callback that triggers after the state gets updated and the component rerendered. That is why the function is async.

9. List the steps needed to migrate a Class to Function Component.

* Change `class Component extends React.Component` to `function Component()`. Props are now function arguments.

* Put the content of the `render()` method inside the function body.

* Convert all methods to functions.

* Remove the constructor and use `useState` hook to set the component states;

* `componentDidMount`, `componentDidUpdate` and `componentWillUnmount` can be changed to the `useEffect` hook.

10. List a few ways styles can be used with components.

   You can import the styles directly using `import 'styles.css'`. You can use styled-components, css modules or just styling elements inline.

11. How to render an HTML string coming from the server.

  You need to use the `dangerouslySetInnerHTML` prop in order to set the innerHTML of an element, but you should sanitize it first, using an external library for instance.
